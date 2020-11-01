package main.java.com.command.board;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.json.JsonMapper;

import sungs.temp.지울꺼얌.AjaxBoardListJSON;
import sungs.temp.지울꺼얌.BoardListDTO;
import sungs.temp.지울꺼얌.PostDAO;

public class DefaultBoardCommand implements Board_Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		try {
			request.setCharacterEncoding("UTF-8");

			String category = null;
			String searchType = null;
			String search = null;
			int page = 1;
			String contextPath = request.getServletContext().getRealPath("data");

			if (request.getParameter("root") != null)
				category = request.getParameter("root");
			if (request.getParameter("searchType") != null)
				searchType = request.getParameter("searchType");
			if (request.getParameter("search") != null)
				search = URLDecoder.decode(request.getParameter("search"), "UTF-8");
			if (request.getParameter("page") != null)
				page = Integer.parseInt(request.getParameter("page"));
			
			ArrayList<BoardListDTO> list = null;
			if (searchType != null)
				list = new PostDAO(contextPath).getCategorySearchList(category, searchType, search, page);
			else
				list = new PostDAO(contextPath).getCategoryList(category, page);
			request.setAttribute("list", list);
			responseJSON(request, response);

		} catch (UnsupportedEncodingException e) { // request 인코딩 exception
			e.printStackTrace();
		} // end try

	} // end execute

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
