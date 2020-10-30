package main.java.com.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("*.ajax")
public class AjaxController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AjaxController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		actionAjax(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		actionAjax(request, response);
	}
	
	protected void actionAjax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String type = request.getParameter("root");
		
		switch(type) {
		case "free":
			return;
		case "reading":
			return;
		case "movie":
			return;
		case "sports":
			return;
		case "game":
			return;
		case "empath":
			return;
		case "viewcnt":
			return;
		default:
			return;
		}
	} // end actionAjax

}
