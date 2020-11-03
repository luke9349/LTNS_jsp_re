package main.java.com.command.mainpage;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.model.DAO;
import main.java.com.model.DTO;
import main.java.com.model.mainpage.Mainpage_DAO;

public class Mainpage_Command implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		DAO dao = new Mainpage_DAO();  // DAO 객체 생성
		DTO [] arr1 = null;
		DTO [] arr2 = null;
		DTO [] arr3 = null;
		try {
			// 트랜잭션 수행
			arr1=dao.selectBySQL(Mainpage_DAO.SELECT_6_POSTS_BY_VIEWCNT);
			request.setAttribute("viewcnt_board", arr1);
			arr2=dao.selectBySQL(Mainpage_DAO.SELECT_3_POSTS_BY_EMPATHIZE_CNT);
			request.setAttribute("empath_board", arr2);
			arr3=dao.selectBySQL(Mainpage_DAO.SELECT_5_POSTS_BY_NEAREST);
			request.setAttribute("newarest_board", arr3);
			// "~_board" 란 name 으로 request 에 arr 값 저장
			// 즉, request 에 담아서 컨트롤러에 전달되는 셈
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

}
