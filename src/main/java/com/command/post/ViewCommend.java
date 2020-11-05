
package main.java.com.command.post;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import main.java.com.command.Command;
import main.java.com.model.post.FileWriteDAO;
import main.java.com.model.post.FileWriteDTO;
import main.java.com.model.post.WriteDAO;
import main.java.com.model.post.WriteDTO;
import main.java.com.view.MemberDAO;
import main.java.com.view.MemberDTO;
import main.java.com.view.TOT_Post_DAO;
import main.java.com.view.TOT_Post_DTO;

public class ViewCommend implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		WriteDAO dao = new WriteDAO();
		WriteDTO[] arr = null;
		FileWriteDTO[] file = null;
		FileWriteDAO filedao = new FileWriteDAO();
		int post_contents ;
		int post_id = Integer.parseInt(request.getParameter("post_id"));
		
		HttpSession session =  request.getSession();
	    int writer =  (int) session.getAttribute("writer");
				
				
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
		
		
		//member에서 유저 정보 가져오기 
		
		if(writer != 0) {
			MemberDTO[] memberarr = null;
			MemberDAO memberdao = new MemberDAO();
			
			try {
				memberarr = memberdao.member_Select(writer);
				request.setAttribute("member", memberarr);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		
		
		
		//공감수 가져오기 
		
		if (writer != 0 || post_id != 0) {
			TOT_Post_DTO[] tdto = null;
			TOT_Post_DAO tdao = new TOT_Post_DAO();
			try {
				tdto = tdao.tot_table_select(post_id);
				request.setAttribute("tot", tdto);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		
		
		
		
		
		
		
		
		
	
	
		
		
		

	}

}
