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
import main.java.com.model.board.AjaxBoardListJSON;
import main.java.com.model.board.BoardListDAO2;
import main.java.com.model.board.BoardListDTO;
import main.java.com.model.board.JSONListDTO;
import main.java.com.util.LogUtil;

public class BoardAjaxCommand2 implements Command, Board_Command {

	long count;

	public BoardAjaxCommand2() {
		this.count = 0;
	}

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		try {
			request.setCharacterEncoding("UTF-8");

			String[] categorys = { "NOTICE", "MOVIE", "BOOK", "GAME", "SPORTS", "VIEWCNT", "EMPATHIZE", "MYPAGE" };
			String[] types = { "list", "album", "post" };
			String[] searchTypes = { "titleAndContent", "title", "content", "writer" };

			String category = "NOTICE";
			String type = "list";
			String searchType = null;
			String search = null;
			String startDate = null;
			String endDate = null;
			int page = 1;

			if (request.getParameter("root") != null) {
				category = request.getParameter("root");
				if (!inspectParameter(categorys, category)) {
					Exception e = new Exception("This value is not valid: " + category);
					LogUtil.error(e.getMessage());
					e.printStackTrace();
					request.getSession().setAttribute("messageType", "오류 메시지");
					request.getSession().setAttribute("messageContent", "접근할수 없습니다.");
					return;
				}
			}

			if (request.getParameter("type") != null) {
				type = request.getParameter("type");
				if (!inspectParameter(types, type)) {
					Exception e = new Exception("This value is not valid: " + type);
					LogUtil.error(e.getMessage());
					e.printStackTrace();
					request.getSession().setAttribute("messageType", "오류 메시지");
					request.getSession().setAttribute("messageContent", "접근할수 없습니다.");
					return;
				}
			}

			if (request.getParameter("searchType") != null) {
				System.out.println(request.getParameter("searchType"));
				searchType = request.getParameter("searchType");
				if (!inspectParameter(searchTypes, searchType)) {
					Exception e = new Exception("This value is not valid: " + searchType);
					LogUtil.error(e.getMessage());
					e.printStackTrace();
					request.getSession().setAttribute("messageType", "오류 메시지");
					request.getSession().setAttribute("messageContent", "접근할수 없습니다.");
					return;
				}
			}

			if (request.getParameter("search") != null)
				search = URLDecoder.decode(request.getParameter("search"), "UTF-8");

			if (request.getParameter("startDate") != null && !request.getParameter("startDate").equals(""))
				startDate = request.getParameter("startDate");

			if (request.getParameter("endDate") != null && !request.getParameter("endDate").equals(""))
				endDate = request.getParameter("endDate");

			if (request.getParameter("page") != null) {
				try {
					page = Integer.parseInt(request.getParameter("page"));
				} catch (Exception e) {
					e.printStackTrace();
					LogUtil.error("[BoarAjaxCommand] [page] " + e.getMessage());
					request.getSession().setAttribute("messageType", "오류 메시지");
					request.getSession().setAttribute("messageContent", "접근할수 없습니다.");
					return;
				}
			}

//			switch (category) {
//			case "EMPATHIZE":
//			case "VIEWCNT":
//				if ("날짜검색" == true) {
//					if ("검색이 있나 ?" == true) {
//						if("검색이 있자면 작성자 검색인가?" == true) {
//							날짜 + 작성자로 검색어 목록 get
//						} else {
//							날짜 로 목록 get
//							검색 로직 시작
//						}
//					} else {
//						날짜로만 검색된 목록 get
//					}
//				} else {
//					기본적인 목록 get
//				}
//				break;
//			case "MYPAGE":
//
//				break;
//
//			default:
//				break;
//			}

			ArrayList<BoardListDTO> list = null;
			ArrayList<JSONListDTO> result = null;
			if (inspectSearch(searchType, search)) {
				if (inspectCategory(category)) {
					list = new BoardListDAO2().getAllList(category);
					result = contentToText(list);
					result = createSearchList(result, searchType, search, page, type);
				} else {
					list = new BoardListDAO2().getCategoryAllList(category);
					result = contentToText(list);
					result = createSearchList(result, searchType, search, page, type);
				} // end if
			} else {
				if (inspectCategory(category)) {
					list = new BoardListDAO2().getList(category, type, page);
					result = contentToText(list);
				} else {
					list = new BoardListDAO2().getCategoryList(category, type, page);
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
			dto.setWriterNum(temp.getWriterNum());
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