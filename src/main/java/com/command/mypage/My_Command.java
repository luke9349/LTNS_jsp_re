package main.java.com.command.mypage;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.model.DAO;
import main.java.com.model.DTO;
import main.java.com.model.mainpage.Mainpage_DAO;
import main.java.com.model.mainpage.Post_DTO;

public class My_Command implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		
		DTO [] arr1 = null;
		DTO [] arr2 = null;
		DTO [] arr3 = null;
		try {
			//인기게시판- 트랜잭션 수행
			arr1=new Mainpage_DAO().selectBySQL(Mainpage_DAO.SELECT_6_POSTS_BY_VIEWCNT);
			System.out.println("서버 확인-뷰카운트: "+arr1);
			for(DTO v : arr1) {
				System.out.println(((Post_DTO)v).getNickname());
			}
			request.setAttribute("viewcnt_board", arr1);
			
			//공감게시판
			arr2=new Mainpage_DAO().selectBySQL(Mainpage_DAO.SELECT_3_POSTS_BY_EMPATHIZE_CNT);
			System.out.println("서버 확인-공감: "+arr2);
			for(DTO v : arr2) {
				System.out.println(((Post_DTO)v).getNickname());
			}
			request.setAttribute("empath_board", arr2);
			
			//최신순게시판
			arr3=new Mainpage_DAO().selectBySQL(Mainpage_DAO.SELECT_5_POSTS_BY_NEAREST);
			request.setAttribute("newarest_board", arr3);
			// "~_board" 란 name 으로 request 에 arr 값 저장
			// 즉, request 에 담아서 컨트롤러에 전달되는 셈
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

}
