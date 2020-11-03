package main.java.com.command.post;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.post.beans.FileWriteDAO;
import main.java.com.post.beans.FileWriteDTO;
import main.java.com.post.beans.WriteDAO;
import main.java.com.post.beans.WriteDTO;

public class updateCommend implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {

		WriteDAO dao = new WriteDAO();
		WriteDTO[] arr = null;
		FileWriteDTO[] file = null;
		FileWriteDAO filedao = new FileWriteDAO();
		int post_contents ;
		int post_id = Integer.parseInt(request.getParameter("post_id"));
		
		
		
		try {
			arr = dao._post_update(post_id);
			request.setAttribute("update", arr);
		}catch (Exception e) {
			e.printStackTrace();
		}//end try 
	
	
	post_contents = arr[0].getPost_contents();
	
	if(post_contents != 0) {
		try {
			file = filedao.view_cotent(post_id);
			request.setAttribute("file_view", file);
			System.out.println(post_contents);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}// end try 
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	}	

}
