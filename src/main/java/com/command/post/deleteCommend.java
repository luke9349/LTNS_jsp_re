package main.java.com.command.post;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.model.post.WriteDAO;

public class deleteCommend implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {

		int cnt = 0;
		WriteDAO dao = new WriteDAO();
		
		int requestsdata = Integer.parseInt(request.getParameter("post_id"));
		
		try {
			cnt = dao.post_delete(requestsdata);
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println(requestsdata + " 캐치");
		} // end try

		request.setAttribute("deletePost", cnt);
		System.out.println("쿼리성공"+cnt);
		
		
		
		
	}

}
