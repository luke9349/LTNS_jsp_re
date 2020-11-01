package main.java.com.command.board;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.command.mainpage.Mainpage_Command_AJAX;
import main.java.com.command.mainpage.Mainpage_Command_do;

public class BoarAjaxCommand implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		try {
			request.setCharacterEncoding("UTF-8");

			String category = request.getParameter("root");

			Board_Command command = null;

			switch (category) {
			case "mainpage":
				new Mainpage_Command_do().execute(request, response);
				new Mainpage_Command_AJAX().execute(request, response);
				break;
			case "empathize":
				command = new EmpathizeBoardCommand();
				command.execute(request, response);
				return;
			case "viewcnt":
				command = new ViewcntBoardCommand();
				command.execute(request, response);
				return;
			default:
				command = new DefaultBoardCommand();
				command.execute(request, response);
				return;
			}

		} catch (UnsupportedEncodingException e) {
			System.out.println("request 인코딩 에러");
			e.printStackTrace();
		} // end try
	} // end execute()

}
