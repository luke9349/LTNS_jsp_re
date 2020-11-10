package main.java.com.command.membermanage;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.view.MemberDAO;
import main.java.com.view.MemberDTO;

public class Signup_complete_command implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		
		
		
	try {
		request.setCharacterEncoding("utf-8");
		
		
		
	} catch (Exception e) {
		e.printStackTrace();
	}
	
	
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		String nik = request.getParameter("nik");
		String email = request.getParameter("email");
		
		
		MemberDAO dao = new MemberDAO();
		MemberDTO[] dto = null;
		

		
		int cnt = 0;
		//쿼리 실패 0 성공 1
		if (id != null)  {
			
			try {
				cnt = dao.select_join(id, nik, email);
				request.setAttribute("joinOK", cnt);
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
			
			
		}
		
		
		
		
		if(cnt == 1) { //유니크 조회 성공
			
			int cnt2=0;
			
			try {
				cnt2 = dao.insert_join(id, pw, nik, email);
				
				
				
				request.setAttribute("insertOK",cnt2);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			try {
				dto = dao.member_INFO_Select(id);
				
				
				request.setAttribute("", dto);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			
		}
		
	
		
		
		
		
		
		
	
	

	}

}
