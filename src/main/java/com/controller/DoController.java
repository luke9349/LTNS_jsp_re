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
import main.java.com.command.post.comentCmd;
import main.java.com.command.post.deleteCommend;
import main.java.com.command.post.realViewCommend;

@WebServlet("*.do")
public class DoController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	 
	   public DoController() {
	        super();
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
			
		case "/post/view.do":
			cmd = new realViewCommend();
			cmd.execute(request, response);
			viewPage = "view.jsp";
			break;
			
<<<<<<< HEAD
		case "/board/board_list.do":
			viewPage = "board_list.jsp";
			break;
=======
		case "/post/deleteOk.do":
			cmd = new deleteCommend();
			cmd.execute(request, response);
			viewPage = "deleteOk.jsp";
			break;
			
			
		case "/post/coment.do":
			cmd = new comentCmd();
			cmd.execute(request, response);
			viewPage = "coment.jsp";
			break;

>>>>>>> branch 'master' of https://github.com/luke9349/LTNS_jsp_re.git
		}//end swithc
		
		if(viewPage != null) {
			RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
			dispatcher.forward(request, response);
		}
		
	}// end actiondo

}
