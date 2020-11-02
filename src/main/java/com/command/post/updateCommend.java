package main.java.com.command.post;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.post.beans.WriteDAO;
import main.java.com.post.beans.WriteDTO;

public class updateCommend implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {

		WriteDAO dao = new WriteDAO();
		WriteDTO[] arr = null;
		int post_id = Integer.parseInt(request.getParameter("post_id"));
		try {
			arr = dao._post_update(post_id);
			request.setAttribute("update", arr);
		}catch (Exception e) {
			e.printStackTrace();
		}
	}

}
