package main.java.com.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.command.board.BoarAjaxCommand;
import main.java.com.command.mainpage.Mainpage_Add_NearestBoard_Command_By_AJAX;

@WebServlet("*.ajax")
public class AjaxController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AjaxController() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		actionAjax(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		actionAjax(request, response);
	}

	protected void actionAjax(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");

		// URL로부터 URI, ContextPath, Command 분리
		String uri = request.getRequestURI();
		String contextPath = request.getContextPath();
		String type = uri.substring(contextPath.length());
		System.out.println(uri);
		
		Command command = null;

		switch (type) {
		case "/board/board_list.ajax":
			command = new BoarAjaxCommand();
			command.execute(request, response);
			return;
		case "/mainpage/mainpage.ajax":
			new Mainpage_Add_NearestBoard_Command_By_AJAX().execute(request, response);
			break;
		} // end switch
	} // end actionAjax

}
