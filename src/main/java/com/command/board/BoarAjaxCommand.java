package main.java.com.command.board;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.json.JsonMapper;

import main.java.com.command.Command;
import main.java.com.model.Post_Contents;
import main.java.com.util.LogUtil;
import test.AjaxBoardListJSON;
import test.BoardListDAO;
import test.BoardListDTO;
import test.JSONListDTO;

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

			String[] categorys = { "NOTICE", "MOVIE", "BOOK", "GAME", "SPORTS", "VIEWCNT", "EMPATHIZE" };
			String[] types = { "list", "album", "post" };
			String[] searchTypes = { "titleAndContent", "title", "content" };

			String category = "NOTICE";
			String type = "list";
			String searchType = null;
			String search = null;
			int page = 1;

			if (request.getParameter("root") != null) {
				category = request.getParameter("root");
				if (!inspectParameter(categorys, category))
					throw new Exception("This value is not valid: " + category);
			}

			if (request.getParameter("type") != null) {
				type = request.getParameter("type");
				if (!inspectParameter(types, type))
					throw new Exception("This value is not valid: " + category);
			}

			if (request.getParameter("searchType") != null) {
				searchType = request.getParameter("searchType");
				if (!inspectParameter(searchTypes, searchType))
					throw new Exception("This value is not valid: " + category);
			}

			if (request.getParameter("search") != null)
				search = URLDecoder.decode(request.getParameter("search"), "UTF-8");
			if (request.getParameter("page") != null) {
				try {
					page = Integer.parseInt(request.getParameter("page"));
				} catch (Exception e) {
					e.printStackTrace();
					LogUtil.error("[BoarAjaxCommand] [page] " + e.getMessage());
					return;
				}
			}

			ArrayList<BoardListDTO> list = null;
			ArrayList<JSONListDTO> result = null;
			if (inspectSearch(searchType, search)) {
				if (inspectCategory(category)) {
					list = new BoardListDAO().getAllList(category);
					result = contentToText(list);
					result = createSearchList(result, searchType, search, page, type);
				} else {
					list = new BoardListDAO().getCategoryAllList(category);
					result = contentToText(list);
					result = createSearchList(result, searchType, search, page, type);
				} // end if
			} else {
				if (inspectCategory(category)) {
					list = new BoardListDAO().getList(category, type, page);
					result = contentToText(list);
				} else {
					list = new BoardListDAO().getCategoryList(category, type, page);
					result = contentToText(list);
				} // end if
			} // end if

			request.setAttribute("list", result);
			responseJSON(request, response);

		} catch (UnsupportedEncodingException e) {
			LogUtil.error("[BoarAjaxCommand] [setCharacterEncoding] " + e.getMessage());
			e.printStackTrace();
			return;
		} catch (Exception e) {
			LogUtil.error("[BoarAjaxCommand] [params Error] " + e.getMessage());
			e.printStackTrace();
			return;
		} // end try
	} // end execute()

	private boolean inspectParameter(String[] params, String param) {
		for (String string : params) {
			if (string.equals(param)) {
				return true;
			}
		}
		return false;
	}

	private boolean inspectSearch(String searchType, String search) {
		boolean result = false;

		if (searchType != null && !searchType.equals("") && search != null && !search.equals("")) {
			return result = true;
		}
		return result;
	}

	private boolean inspectCategory(String category) {
		if (category.toLowerCase().equals("empathize") || category.toLowerCase().equals("viewcnt")) {
			return true;
		} else {
			return false;
		}
	}

	private ArrayList<JSONListDTO> contentToText(ArrayList<BoardListDTO> list) {
		ArrayList<JSONListDTO> result = new ArrayList<JSONListDTO>();
		int index = 0;
		for (BoardListDTO temp : list) {
			Post_Contents content = new Post_Contents(temp.getRealFilePath());
			if (index == 0) {
				this.count = temp.getDataLength();
				index++;
			} // end if

			JSONListDTO dto = new JSONListDTO();
			dto.setPostId(temp.getPostId());
			dto.setTitle(temp.getTitle());
			dto.setWriter(temp.getWriter());
			dto.setNickName(temp.getNickName());
			dto.setCategory(temp.getCategory());
			dto.setRegdate(temp.getRegdate());
			dto.setEmpathizeCnt(temp.getEmpathizeCnt());
			dto.setViewcnt(temp.getViewcnt());
			dto.setContentsText(content.getContentsText());
			dto.setThumbnailPath(content.getThumbnailPath());

			result.add(dto);

		} // end for
		return result;
	} // end contentToText()

	private ArrayList<JSONListDTO> createSearchList(ArrayList<JSONListDTO> list, String searchType, String search,
			int page, String type) {
		ArrayList<JSONListDTO> result = new ArrayList<JSONListDTO>();
		ArrayList<JSONListDTO> temp = new ArrayList<JSONListDTO>();
		for (JSONListDTO dto : list) {
			String content = null;
			switch (searchType) {
			case "titleAndContent":
				content = dto.getTitle() + " " + dto.getContentsText();
				break;
			case "content":
				content = dto.getContentsText();
				break;
			case "title":
				content = dto.getTitle();
				break;
			} // end switch

			if (searchMatches(content, search))
				temp.add(dto);

		} // end for

		this.count = temp.size();

		int startNo = 1;
		int endNo = 1;
		if (type.equals("list")) {
			startNo = (page - 1) * 10 + 1;
			endNo = page * 10;
		} else {
			startNo = (page - 1) * 8 + 1;
			endNo = page * 8;
		}

		try {
			for (int i = startNo - 1; i <= endNo - 1; i++) {
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
			if (Pattern.matches(".*" + string + ".*".toLowerCase(), content.toLowerCase())) {
				return true;
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
			result.setCount(this.count);
			result.setList(list);
		} // end if

		try {
			JsonMapper mapper = new JsonMapper();
			String json = mapper.writeValueAsString(result);
			response.setContentType("application/json; charset=UTF-8");
			response.getWriter().write(json);
		} catch (Exception e) {
			e.printStackTrace();
			LogUtil.error("[BoarAjaxCommand] [responseJSON] " + e.getMessage());
		} // end try

	} // end responseJSON()

	@Override
	public void responseXML(HttpServletRequest request, HttpServletResponse response) {

	}

}
