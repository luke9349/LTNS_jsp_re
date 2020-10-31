package main.java.com.command.post;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.post.beans.WriteDAO;

public class WriteCommend implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		
		
		//글작성 
		int cnt = 0;
		WriteDAO dao = new WriteDAO();
		String title = request.getParameter("title");//제목 
		String category = request.getParameter("category"); //제목 
		
		if( title != null && title.trim().length() > 0) {
			try {
				cnt = dao.wr_insert(title, category);
				
			} catch (Exception e) {
				e.printStackTrace();
			}
		}// end if 
		
		
		request.setAttribute("result", cnt);
		System.out.println("쿼리 결과 성공:" + cnt);
		
		
	
	

		
		
		
		
		
	}

}
