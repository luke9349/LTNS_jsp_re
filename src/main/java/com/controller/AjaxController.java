package main.java.com.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.command.board.BoardAjaxCommand;
import main.java.com.command.mainpage.Mainpage_Add_NearestBoard_Command_By_AJAX;
import main.java.com.command.membermanage.Email_ajax_command;
import main.java.com.command.membermanage.Signup_ajax_command;
import main.java.com.command.mypage.Mypage_Add_MyComment_Command_By_AJAX;
import main.java.com.command.mypage.Mypage_Add_MyEmpathize_Command_By_AJAX;
import main.java.com.command.mypage.Mypage_Add_MyPost_Command_By_AJAX;

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
		case "/mainpage/mainpage.ajax":
			new Mainpage_Add_NearestBoard_Command_By_AJAX().execute(request, response);
			break;
		case "/mypage/mypage_mypost.ajax":
			new Mypage_Add_MyPost_Command_By_AJAX().execute(request,response);
			break;
		case "/mypage/mypage_mycomment.ajax":
			new Mypage_Add_MyComment_Command_By_AJAX().execute(request,response);
			break;
		case "/mypage/mypage_myempathize.ajax":
			new Mypage_Add_MyEmpathize_Command_By_AJAX().execute(request,response);
			break;			
		case "/board/board_list.ajax":
			command = new BoardAjaxCommand();
			command.execute(request, response);
			return;
		case "/membermanage/sign-up.ajax":
			command = new Signup_ajax_command();
			command.execute(request, response);
			return;
		case "/membermanage/email.ajax":
			command = new Email_ajax_command();
			command.execute(request, response);
			return;	
		} // end switch
	} // end actionAjax

}
