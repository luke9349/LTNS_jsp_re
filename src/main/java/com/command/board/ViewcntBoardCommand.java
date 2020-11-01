package main.java.com.command.board;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sungs.temp.지울꺼얌.BoardListDTO;
import sungs.temp.지울꺼얌.PostDAO;

public class ViewcntBoardCommand implements Board_Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		String searchType = request.getParameter("searchType");
		String search = request.getParameter("search");
		int page = Integer.parseInt(request.getParameter("page"));
		String contextPath = request.getServletContext().getRealPath("data");

		ArrayList<BoardListDTO> list = null;
		if (searchType != null)
			list = new PostDAO(contextPath).getViewCntSearchList(searchType, search, page);
		else
			list = new PostDAO(contextPath).getViewCntList(page);
		request.setAttribute("list", list);
		responseJSON(request, response);
	}

	@Override
	public void responseJSON(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub

	}

	@Override
	public void responseXML(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub

	}

}
