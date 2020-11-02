package main.java.com.command.board;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.json.JsonMapper;

import main.java.com.command.Command;
import main.java.com.model.DTO;
import main.java.com.model.Post_Contents;
import park.지울꺼얌.AjaxBoardListJSON;
import park.지울꺼얌.BoardListDTO;
import test.JSONListDTO;
import test.LastDAO;
import test.LastDTO;
import test.TestDAO;
import test.TestQuery;

public class BoarAjaxCommand implements Command, Board_Command {

	long count;

	public BoarAjaxCommand() {
		this.count = 0;
	}

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
			if (request.getParameter("page") != null) {
				try {
					page = Integer.parseInt(request.getParameter("page"));
				} catch (Exception e) {
					e.printStackTrace();
				}
			}

			String sql = null;
			ArrayList<LastDTO> list = null;
			ArrayList<JSONListDTO> result = null;
			if (inspectSearch(searchType, search)) {
				sql = queryToSearch(category);
				if (inspectCategory(category)) {
					list = new LastDAO().getAllList(sql);
					result = contentToText(list);
					result = createSearchList(result, searchType, search, page);
				} else {
					list = new LastDAO().getCategoryAllList(sql, category);
					result = contentToText(list);
					result = createSearchList(result, searchType, search, page);
				} // end if
			} else {
				sql = queryToCategory(category);
				if (inspectCategory(category)) {
					list = new LastDAO().getList(sql, page);
					result = contentToText(list);
				} else {
					list = new LastDAO().getCategoryList(sql, category, page);
					result = contentToText(list);
				} // end if
			} // end if
			
			request.setAttribute("list", result);
			responseJSON(request, response);

		} catch (UnsupportedEncodingException e) {
			System.out.println("request 인코딩 에러");
			e.printStackTrace();
		} // end try
	} // end execute()

	private boolean inspectSearch(String searchType, String search) {
		boolean result = false;

		if (searchType != null && !searchType.equals("") && search != null && !search.equals("")) {
			return result = true;
		}
		return result;
	}

	private String queryToCategory(String category) {
		switch (category) {
		case "empathize":
			return TestQuery.SELECT_POST_BY_EMAPTHIZE_PAGE;
		case "viewcnt":
			return TestQuery.SELECT_POST_BY_VIEWCNT_PAGE;
		default:
			return TestQuery.SELECT_POST_BY_CATEGORY_PAGE;
		}
	}

	private String queryToSearch(String category) {
		switch (category) {
		case "empathize":
			return TestQuery.SELECT_POST_BY_EMPATHIZE_ALL;
		case "viewcnt":
			return TestQuery.SELECT_POST_BY_VIEWCNT_ALL;
		default:
			return TestQuery.SELECT_POST_BY_CATEGORY_ALL;
		}
	}

	private boolean inspectCategory(String category) {
		if (category.equals("empathize") || category.equals("viewcnt")) {
			return true;
		} else {
			return false;
		}
	}

	private ArrayList<JSONListDTO> contentToText(ArrayList<LastDTO> list) {
		ArrayList<JSONListDTO> result = new ArrayList<JSONListDTO>();
		int index = 0;
		for (LastDTO temp : list) {
			Post_Contents content = new Post_Contents(temp.getRealFilePath());
			if (index == 0) {
				this.count = temp.getDataLength();
				index++;
			} // end if

			JSONListDTO dto = new JSONListDTO();
			dto.setPostId(temp.getPostId());
			dto.setTitle(temp.getTitle());
			dto.setWriter(temp.getWriter());
			dto.setCategory(temp.getCategory());
			dto.setRegdate(temp.getRegdate());
			dto.setEmpathizeCnt(temp.getEmpathizeCnt());
			dto.setViewcnt(temp.getViewcnt());
			dto.setContentsText(content.getContentsText());
			dto.setThumbnailPath(content.getThumbnailPath());

			result.add(dto);

			System.out.println(dto);

		} // end for
		return result;
	} // end contentToText()

	private ArrayList<JSONListDTO> createSearchList(ArrayList<JSONListDTO> list, String searchType, String search,
			int page) {
		ArrayList<JSONListDTO> result = new ArrayList<JSONListDTO>();
		ArrayList<JSONListDTO> temp = new ArrayList<JSONListDTO>();
		for (JSONListDTO dto : list) {
			String content = null;
			switch (searchType) {
			case "titleAndContent":
				content = dto.getTitle() + dto.getContentsText();
				break;
			case "content":
				content = dto.getContentsText();
				break;
			case "title":
				content = dto.getTitle();
				break;
			} // end switch

			if (searchMatches(content, search)) {
				temp.add(dto);
			} // end if

		} // end for

		this.count = temp.size();

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
				return result = true;
			} // end if
		} // end for
		return result;
	}

	@Override
	public void responseJSON(HttpServletRequest request, HttpServletResponse response) {
		// 여기는 수정 피룡
		ArrayList<JSONListDTO> list = (ArrayList<JSONListDTO>) request.getAttribute("list");

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
			System.out.println(json);
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
