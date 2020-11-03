
package main.java.com.command.post;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.model.DTO;
import main.java.com.model.post.FileWriteDAO;
import main.java.com.model.post.FileWriteDTO;
import main.java.com.model.post.WriteDAO;
import main.java.com.model.post.WriteDTO;

public class ViewCommend implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		WriteDAO dao = new WriteDAO();
		WriteDTO[] arr = null;
		FileWriteDTO[] file = null;
		FileWriteDAO filedao = new FileWriteDAO();
		int post_contents ;
		//post_id를 통한 글보기 
		//int post_id = Integer.parseInt(request.getParameter("post_id"));
		//int writer_id = Integer.parseInt(request.getParameter("writer"));
		int writer =2;
		int post_id = Integer.parseInt(request.getParameter("post_id"));

		//int post_id = 336;
		
		if(post_id != 0) {
			try {
				arr =  dao.wr_view(post_id);
				request.setAttribute("views", arr);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		
		
		post_contents = arr[0].getPost_contents();
		
		if(post_contents != 0) {
			try {
				file = filedao.view_cotent(post_contents);
				request.setAttribute("contents_view", file);
				System.out.println(post_contents);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}// end if
		
		
		
	
		
		
		
		
		
		
		
		
		
		
		
	
	
		
		
		

	}

}
