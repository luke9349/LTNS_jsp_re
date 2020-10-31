package main.java.com.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.command.post.ViewCommend;
import main.java.com.command.post.WriteCommend;

@WebServlet("*.do")
public class DoController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	 
	public DoController() {
		// TODO Auto-generated constructor stub
	}


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		actionDo(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		actionDo(request, response);
	}
	
	private void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		// url로부터 uri contextpath, commend 분리 
		String uri = request.getRequestURI();
		String conPath = request.getContextPath();
		String com = uri.substring(conPath.length());
				
		System.out.println("uri:"+ uri);
		System.out.println("conPath:"+ conPath);
		System.out.println("com:"+ com);
				
				// 컨트롤러는 아래 두가지를 결정해야 한다. 
		Command cmd = null; // 어떠한 로직을 수행할지 결정 
		String viewPage = null; // 어떠한 페이지를 보여줄지 결정 
			
		
		switch (com) {
			
		case "/post/write.do":
			viewPage = "write.jsp";
			break;
			
		case "/post/writeOk.do":
			cmd = new WriteCommend();
			cmd.execute(request, response);
			viewPage = "writeOk.jsp";
			break;
			
		case "/post/viewOk.do":
			cmd = new ViewCommend();
			cmd.execute(request, response);
			viewPage = "viewOk.jsp";
			break;
			
			

		}//end swithc
		
		if(viewPage != null) {
			RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
			dispatcher.forward(request, response);
		}
		
	}// end actiondo

}
