package main.java.com.command.post;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.post.beans.WriteDAO;
import main.java.com.post.beans.WriteDTO;

public class realViewCommend implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		WriteDAO dao = new WriteDAO();
		WriteDTO [] arr = null;
	

		
		int post_ids = 40;
	
		try {
			arr = dao.wr_view(post_ids);
			request.setAttribute("views", arr);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println(post_ids);
		}
		
		System.out.println(post_ids);
		
	
		
		

	}

}
