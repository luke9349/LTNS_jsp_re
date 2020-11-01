package main.java.com.command.board;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sungs.temp.지울꺼얌.BoardListDTO;
import sungs.temp.지울꺼얌.PostDAO;

public class DefaultBoardCommand implements Board_Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		try {
			request.setCharacterEncoding("UTF-8");

			String category = request.getParameter("root");
			String searchType = request.getParameter("searchType");
			String search = request.getParameter("search");
			int page = Integer.parseInt(request.getParameter("page"));
			String contextPath = request.getServletContext().getRealPath("data");

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
		// TODO Auto-generated method stub

	}

	@Override
	public void responseXML(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub

	}

}
