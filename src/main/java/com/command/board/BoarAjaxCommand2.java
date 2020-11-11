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
import main.java.com.model.board.BoardListDAO;
import main.java.com.model.board.BoardListDAO2;
import main.java.com.model.board.BoardListDTO;
import main.java.com.model.board.Board_DAO;
import main.java.com.model.board.JSONListDTO;
import main.java.com.util.LogUtil;

public class BoarAjaxCommand2 implements Command, Board_Command {

	private long dataLength;

	public BoarAjaxCommand2() {
		this.dataLength = 0;
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

			ArrayList<BoardListDTO> list = null;
			ArrayList<JSONListDTO> result = null;
			switch (category) {
			case "EMPATHIZE":
				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null && searchType.equals("writer")) {
					dataLength = new BoardListDAO2()
							.getEmpathizeSearchDateAndNicknameAllList(startDate, endDate, search).size();
					list = new BoardListDAO2().getEmpathizeSearchDateAndNicknameList(startDate, endDate, search, type,
							page);
					result = contentToText(list);
					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null && searchType.equals("title")) {
					dataLength = new BoardListDAO2().getEmpathizeSearchDateAndTitleAllList(startDate, endDate, search)
							.size();
					list = new BoardListDAO2().getEmpathizeSearchDateAndTitleList(startDate, endDate, search, type,
							page);
					result = contentToText(list);
					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null) {
					list = new BoardListDAO2().getEmpathizeSearchDateAllList(startDate, endDate);
					result = contentToText(list);
					result = createSearchList(result, searchType, search, page, type);
					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")) {
					dataLength = new BoardListDAO2().getEmpathizeSearchDateAllList(startDate, endDate).size();
					list = new BoardListDAO2().getEmpathizeSearchDateList(startDate, endDate, type, page);
					result = contentToText(list);
					break;
				}

				if (searchType != null && searchType.equals("writer")) {
					dataLength = new BoardListDAO2().getEmpathizeSearchNickNameAllList(search).size();
					list = new BoardListDAO2().getEmpathizeSearchNickNameList(type, search, page);
					result = contentToText(list);
					break;
				}

				if (searchType != null && searchType.equals("title")) {
					dataLength = new BoardListDAO2().getEmpathizeSearchTitleAllList(search).size();
					list = new BoardListDAO2().getEmpathizeSearchTitleList(type, search, page);
					result = contentToText(list);
					break;
				}

				if (searchType != null && !searchType.equals("")) {
					list = new BoardListDAO2().getEmpathizeAllList();
					result = contentToText(list);
					result = createSearchList(result, searchType, search, page, type);
					break;
				}

				dataLength = new BoardListDAO2().getEmpathizeAllList().size();
				list = new BoardListDAO2().getEmpathizeList(type, page);
				result = contentToText(list);
				break;
			case "VIEWCNT":
				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null && searchType.equals("writer")) {
					dataLength = new BoardListDAO2().getViewcntSearchDateAndNicknameAllList(startDate, endDate, search)
							.size();
					list = new BoardListDAO2().getViewcntSearchDateAndNicknameList(startDate, endDate, search, type,
							page);
					result = contentToText(list);
					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null && searchType.equals("title")) {
					dataLength = new BoardListDAO2().getViewcntSearchDateAndTitleAllList(startDate, endDate, search)
							.size();
					list = new BoardListDAO2().getViewcntSearchDateAndTitleList(startDate, endDate, search, type, page);
					result = contentToText(list);
					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null) {
					list = new BoardListDAO2().getViewcntSearchDateAllList(startDate, endDate);
					result = contentToText(list);
					result = createSearchList(result, searchType, search, page, type);
					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")) {
					dataLength = new BoardListDAO2().getViewcntSearchDateAllList(startDate, endDate).size();
					list = new BoardListDAO2().getViewcntSearchDateList(startDate, endDate, type, page);
					result = contentToText(list);
					break;
				}

				if (searchType != null && searchType.equals("writer")) {
					dataLength = new BoardListDAO2().getViewcntSearchNickNameAllList(search).size();
					list = new BoardListDAO2().getViewcntSearchDateAndNicknameList(startDate, endDate, search, type,
							page);
					result = contentToText(list);
					break;
				}

				if (searchType != null && searchType.equals("title")) {
					dataLength = new BoardListDAO2().getViewCntSearchTitleAllList(search).size();
					list = new BoardListDAO2().getViewcntSearchTitleList(type, search, page);
					break;
				}

				if (searchType != null && !searchType.equals("")) {
					list = new BoardListDAO2().getViewcntAllList();
					result = contentToText(list);
					result = createSearchList(result, searchType, search, page, type);
					break;
				}

				dataLength = new BoardListDAO2().getViewcntAllList().size();
				list = new BoardListDAO2().getViewcntList(type, page);
				result = contentToText(list);
				break;

			case "MYPAGE":
				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null && searchType.equals("writer")) {

					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null && searchType.equals("title")) {

					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null) {
					// 검색
					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")) {

					break;
				}

				if (searchType != null && searchType.equals("writer")) {

					break;
				}

				if (searchType != null && searchType.equals("title")) {

					break;
				}

				if (searchType != null && !searchType.equals("")) {
					// 검색
					break;
				}

				dataLength = new BoardListDAO2().getEmpathizeAllList().size();
				list = new BoardListDAO2().getEmpathizeList(type, page);
				result = contentToText(list);
				break;
			default:
				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null && searchType.equals("writer")) {

					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null && searchType.equals("title")) {

					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")
						&& searchType != null) {
					// 검색
					break;
				}

				if (startDate != null && !startDate.equals("") && endDate != null && !endDate.equals("")) {

					break;
				}

				if (searchType != null && searchType.equals("writer")) {

					break;
				}

				if (searchType != null && searchType.equals("title")) {

					break;
				}

				if (searchType != null && !searchType.equals("")) {
					// 검색
					break;
				}

				dataLength = new BoardListDAO2().getEmpathizeAllList().size();
				list = new BoardListDAO2().getEmpathizeList(type, page);
				result = contentToText(list);
				break;
			}

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

	private ArrayList<JSONListDTO> contentToText(ArrayList<BoardListDTO> list) {
		ArrayList<JSONListDTO> result = new ArrayList<JSONListDTO>();
		for (BoardListDTO temp : list) {
			Post_Contents content = new Post_Contents(temp.getRealFilePath());

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
			StringBuffer content = new StringBuffer();
			switch (searchType) {
			case "titleAndContent":
				content.append(dto.getTitle());
				content.append(" ");
				content.append(dto.getContentsText());
				break;
			case "content":
				content.append(dto.getContentsText());
				break;
			} // end switch

			if (searchMatches(content.toString(), search))
				temp.add(dto);

		} // end for

		this.dataLength = temp.size();

		int startNo = 1;
		int endNo = 1;
		int cnt = 10;

		if (!type.equals("list"))
			cnt = 8;

		startNo = (page - 1) * cnt + 1;
		endNo = page * cnt;

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
			result.setCount(this.dataLength);
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
