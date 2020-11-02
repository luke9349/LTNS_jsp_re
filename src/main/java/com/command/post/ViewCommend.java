
package main.java.com.command.post;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.post.beans.WriteDAO;
import main.java.com.post.beans.WriteDTO;

public class ViewCommend implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		WriteDAO dao = new WriteDAO();
		WriteDTO [] arr = null;
		
		int post_id =203;//널옴 수정해야함

		try {
			arr = dao.wr_view(post_id);
			System.out.println(arr);
			System.out.println(post_id);
			request.setAttribute("views", arr);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

			System.out.println(arr);
			System.out.println(post_id);
		}
	
		
		

	}

}
