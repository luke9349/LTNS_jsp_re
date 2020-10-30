package main.java.com.command.mainpage;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.model.DAO;
import main.java.com.model.DTO;
import main.java.com.model.mainpage.Mainpage_DAO;

public class Mainpage_Command_do implements Mainpage_Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		DAO dao= new Mainpage_DAO();
		DTO [] arr=null;
		
		try {
			//트랜잭션 수행
			arr=dao.select();

			// "list" 란 name 으로 request 에 arr 값 저장
			// 즉, request 에 담아서 컨트롤러에 전달되는 셈
			request.setAttribute("list", arr);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	} // end execute()
} // end Command