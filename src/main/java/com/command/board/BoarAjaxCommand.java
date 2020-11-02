package main.java.com.command.board;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.json.JsonMapper;

import main.java.com.command.Command;
import park.지울꺼얌.AjaxBoardListJSON;
import park.지울꺼얌.BoardListDTO;
import park.지울꺼얌.PostDAO;

public class BoarAjaxCommand implements Command, Board_Command {

	private static final String SQL = null;

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		try {
			request.setCharacterEncoding("UTF-8");

			String category = "NOTICE";
			String searchType = null;
			String search = null;
			int page = 1;

			if (request.getParameter("root") != null)
				category = request.getParameter("root");
			if (request.getParameter("searchType") != null)
				searchType = request.getParameter("searchType");
			if (request.getParameter("search") != null)
				search = URLDecoder.decode(request.getParameter("search"), "UTF-8");
			if (request.getParameter("page") != null)
				page = Integer.parseInt(request.getParameter("page"));

			ArrayList<BoardListDTO> list = null;
			switch (category) {
			case "empathize":
				list = inspectSearch(searchType, search, page, SQL);
				break;
			case "viewcnt":
				list = inspectSearch(searchType, search, page, SQL);
				break;
			default:
				list = inspectSearch(searchType, search, category, page);
				break;
			}

		} catch (UnsupportedEncodingException e) {
			System.out.println("request 인코딩 에러");
			e.printStackTrace();
		} // end try
	} // end execute()

	private ArrayList<BoardListDTO> inspectSearch(String searchType, String search, String category, int page) {

		ArrayList<BoardListDTO> list = new ArrayList<BoardListDTO>();

		if (searchType != null && search != null) {
			list = new PostDAO().getList(category, page);
			list = contentToText(list);
		} else {
			list = new PostDAO().getCategorySearchList(category);
			list = contentToText(list);
			list = createSearchList(list, searchType, search, page);
		}

		return list;
	}

	private ArrayList<BoardListDTO> inspectSearch(String searchType, String search, int page, String sql2) {
		ArrayList<BoardListDTO> list = new ArrayList<BoardListDTO>();

		if (searchType != null && search != null) {
			list = new PostDAO().getList(sql2, page);
		} else {
			list = new PostDAO().getSearchList(sql2);
			list = createSearchList(list, searchType, search, page);
		}
		return list;
	}

	private ArrayList<BoardListDTO> contentToText(ArrayList<BoardListDTO> list) {
		ArrayList<BoardListDTO> result = new ArrayList<BoardListDTO>();

		for (BoardListDTO dto : list) {
			String content = 파일변환(dto.getPostContent());
			//여기서 다른 DTO 로 바꿔 조야 겠당
			
			dto.setPostContent(content);
			result.add(dto);
		}
		return result;
	}

	private ArrayList<BoardListDTO> createSearchList(ArrayList<BoardListDTO> list, String searchType, String search,
			int page) {
		ArrayList<BoardListDTO> result = new ArrayList<BoardListDTO>();
		ArrayList<BoardListDTO> temp = new ArrayList<BoardListDTO>();

		for (BoardListDTO dto : list) {
			String content = null;
			switch (searchType) {
			case "titleAndContent":
				content = dto.getTitle() + dto.getPostContent();
				break;
			case "content":
				content = dto.getPostContent();
				break;
			case "title":
				content = dto.getTitle();
				break;
			} // end switch

			if (searchMatches(content, search)) {
				temp.add(dto);
			} // end if

		} // end for

		int startNo = (page - 1) * 10 + 1;
		int endNo = page * 10;

		try {
			for (int i = startNo; i <= endNo; i++) {
				result.add(temp.get(i)); // 페이지 설정
			} // end for
		} catch (Exception e) {
			return result;
		} // end try

		return result;
	}

	private boolean searchMatches(String content, String search) {
		boolean result = false;
		String[] searchArr = search.split(" ");
		for (String string : searchArr) {
			if (Pattern.matches(string, content)) {
				result = true;
				break;
			} // end if
		} // end for
		return result;
	}

	@Override
	public void responseJSON(HttpServletRequest request, HttpServletResponse response) {
		ArrayList<BoardListDTO> list = (ArrayList<BoardListDTO>) request.getAttribute("list");

		AjaxBoardListJSON result = new AjaxBoardListJSON();

		if (list.size() == 0) {
			result.setStatus("FAIL");
			result.setCount(0);
		} else {
			result.setStatus("OK");
			result.setCount(list.size());
			result.setList(list);
		} // end if

		try {
			JsonMapper mapper = new JsonMapper();
			String json = mapper.writeValueAsString(result);
			response.setContentType("application/json; charset=UTF-8");
			response.getWriter().write(json);
		} catch (Exception e) {
			e.printStackTrace();
		} // end try

	} // end responseJSON()

	@Override
	public void responseXML(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub

	}

}
