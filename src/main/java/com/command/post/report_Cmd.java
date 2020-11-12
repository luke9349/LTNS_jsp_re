package main.java.com.command.post;


import java.io.UnsupportedEncodingException;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import main.java.com.command.Command;

public class report_Cmd implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
	

		HttpSession session =  request.getSession();
		String nickname = (String) session.getAttribute("nickname");
		int post_id = Integer.parseInt(request.getParameter("post_id"));
		String titles = request.getParameter("subjects");
		String artcle = request.getParameter("artcle");
		String select = request.getParameter("select");
		
		
		
		
		final String master = "nbnloper@gmail.com";
		final String password = "password";

		
		Properties prop = new Properties();
	
	}

}
