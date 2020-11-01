package main.java.com.command.post;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.post.beans.CommentDAO;


public class comentCmd implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		
		
		//댓글작성 
		int cnt = 0;
		CommentDAO dao = new CommentDAO();
		
		//String conents = request.getParameter("commentArea");
		String conents = "hello";
		System.out.println(conents);
		// 추후 id, writer를 이용하여 try catch
		if(conents != null) {
			try {
				cnt = dao.cm_Insert(conents);
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
		
			}
		}
		
		
		request.setAttribute("comment_rs", cnt);
		System.out.println("쿼리 결과 성공:" + cnt);
		
		
	}

}
