package main.java.com.command.post;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.post.beans.WriteDAO;

public class deleteCommend implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {

		int cnt = 0;
		WriteDAO dao = new WriteDAO();
		
		//int post_id = Integer.parseInt(request.getParameter("post_content"));
		int post_id = 194;
		
		
			try {
				cnt = dao.post_delete(post_id);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}		
	
		
		request.setAttribute("deletePost", cnt);
		System.out.println("쿼리성공"+cnt);
		
		
		
		
		
	}

}
