package main.java.com.command.mypage;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import main.java.com.command.Command;
import main.java.com.model.membermanage.MM_DAO;
import main.java.com.model.membermanage.MM_DTO;
import main.java.com.view.MemberDAO;
import main.java.com.view.MemberDTO;

public class myPagerev_Ok implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		
			String password = request.getParameter("password");
			String nickname = request.getParameter("nickname");
			HttpSession session =  request.getSession();
			int mm_id =  (int) session.getAttribute("writer");
			
		
			System.out.println(nickname + "닉네임");
			System.out.println(mm_id + "mm id");
			
			
			if(password != null) {
				try {
					MM_DAO dao = new MM_DAO();
					int cnt = 0; 
					cnt = dao.update_pw(password, mm_id);
					System.out.println("비번변경진입");
					request.setAttribute("rev_pw", cnt);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 }
			
			
			if(nickname != null) {
				MM_DAO dao = new MM_DAO();
				int cnt = 0; 
				try {
					cnt = dao.update_nick(nickname, mm_id);
					System.out.println("닉네임변경진입");
					request.setAttribute("rev_pw", cnt);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			
			}
			
			
			if(nickname != null) {
				MemberDTO[] arr = null;
				MemberDAO das = new MemberDAO();
				System.out.println("진입해요?");
				try {
					arr = das.member_MM_ID_Select(mm_id);
					request.setAttribute("rev_nick", arr);
					System.out.println("진입해요?");
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
			
			
			
			
			
	}

}
