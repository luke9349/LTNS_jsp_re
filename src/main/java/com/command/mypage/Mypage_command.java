package main.java.com.command.mypage;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.model.DTO;
import main.java.com.model.board.CommentDTO;
import main.java.com.model.mainpage.Mainpage_DAO;
import main.java.com.model.mainpage.Post_DTO;
import main.java.com.model.mypage.Count_DAO;
import main.java.com.model.mypage.Count_DTO;
import main.java.com.model.mypage.Mypage_DAO;

public class Mypage_command implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
try {
		int mm_id=(int)request.getSession().getAttribute("writer");
//		int btn_id=Integer.parseInt(request.getParameter("btn_id"));
		DTO [] arr1 = null;
		DTO [] arr2 = null;
		DTO [] arr3 = null;
		int count1=0;
		int count2=0;
		int count3=0;
		try {
			//내가 작성한 글- 트랜잭션 수행
			//todo 1 대신 mm_id 를 넣어야 한다
			arr1=new Mypage_DAO().selectBySQL_withSignal(Mypage_DAO.SELECT_6_MY_POSTS,1,mm_id);
			System.out.println("서버 확인-내가작성한 글: "+arr1);
			request.setAttribute("mypost_board", arr1);
			try {
			count1=((Count_DTO)new Count_DAO().selectBySQL(Mypage_DAO.SELECT_MY_POSTS_CNT, mm_id)[0]).getCount();
			}catch(NullPointerException e) {
				count1=0;
			}
			request.setAttribute("mypost_board_cnt", count1);
			
			//내가 작성한 댓글
			arr2=new Mypage_DAO().selectBySQL_withSignal(Mypage_DAO.SELECT_6_MY_COMMENTS,2,mm_id);
			System.out.println("서버 확인-내가작성한댓글: "+arr2);
			for(DTO v : arr2) {
				System.out.println(((CommentDTO)v).getCommentContents());
			}
			request.setAttribute("mycomment_board", arr2);
			try {
			count2=((Count_DTO)new Count_DAO().selectBySQL(Mypage_DAO.SELECT_MY_COMMENTS_CNT, mm_id)[0]).getCount();			
			}catch(NullPointerException e) {
				count2=0;
			}
			request.setAttribute("mycomment_board_cnt", count2);
			
			//공감한 게시글
			arr3=new Mypage_DAO().selectBySQL_withSignal(Mypage_DAO.SELECT_6_MY_EMPATHIZE,3,mm_id);
			request.setAttribute("myempathize_board", arr3);
			try {
			count3=((Count_DTO)new Count_DAO().selectBySQL(Mypage_DAO.SELECT_MY_EMPATHIZE_CNT, mm_id)[0]).getCount();
			}catch(NullPointerException e) {
				count3=0;
			}
			request.setAttribute("myempathize_board_cnt", count3);
			// "~_board" 란 name 으로 request 에 arr 값 저장
			// 즉, request 에 담아서 컨트롤러에 전달되는 셈
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		}catch(Exception e) {
			e.printStackTrace();
		}

	}

}
