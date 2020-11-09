package main.java.com.command.mypage;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.model.DTO;
import main.java.com.model.mainpage.Mainpage_DAO;
import main.java.com.model.mainpage.Post_DTO;
import main.java.com.model.mypage.Mypage_DAO;

public class Mypage_command implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {

		DTO [] arr1 = null;
		DTO [] arr2 = null;
		DTO [] arr3 = null;
		try {
			//내가 작성한 글- 트랜잭션 수행
			arr1=new Mainpage_DAO().selectBySQL(Mypage_DAO.SELECT_6_MY_POSTS);
			System.out.println("서버 확인-내가작성한 글: "+arr1);
			for(DTO v : arr1) {
				System.out.println(((Post_DTO)v).getNickname());
			}
			request.setAttribute("mypost_board", arr1);
			
			//내가 작성한 댓글
			arr2=new Mainpage_DAO().selectBySQL(Mypage_DAO.SELECT_6_MY_COMMENTS);
			System.out.println("서버 확인-내가작성한댓글: "+arr2);
			for(DTO v : arr2) {
				System.out.println(((Post_DTO)v).getNickname());
			}
			request.setAttribute("mycomment_board", arr2);
			
			//공감한 게시글
			arr3=new Mainpage_DAO().selectBySQL(Mypage_DAO.SELECT_6_MY_EMPATHIZE);
			request.setAttribute("myempathize_board", arr3);
			// "~_board" 란 name 으로 request 에 arr 값 저장
			// 즉, request 에 담아서 컨트롤러에 전달되는 셈
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}

}
