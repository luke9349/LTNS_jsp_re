package main.java.com.command.board;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.command.mainpage.Mainpage_Command_AJAX;
import main.java.com.command.mainpage.Mainpage_Command_do;

public class BoarAjax implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		try {
			request.setCharacterEncoding("UTF-8");

			String type = request.getParameter("root");

			Board_Command command = null;

			switch (type) {
			case "mainpage":
				new Mainpage_Command_do().execute(request, response);
				new Mainpage_Command_AJAX().execute(request, response);
				break;
			case "free":
				command = new FreeBoard();
				command.execute(request, response);
				break;
			case "reading":
				command = new ReadingBoard();
				command.execute(request, response);
				break;
			case "movie":
				command = new MovieBoard();
				command.execute(request, response);
				break;
			case "sports":
				command = new SportsBoard();
				command.execute(request, response);
				break;
			case "game":
				command = new GameBoard();
				command.execute(request, response);
				break;
			case "empath":
				command = new EmpathBoard();
				command.execute(request, response);
				break;
			case "viewcnt":
				command = new ViewcntBoard();
				command.execute(request, response);
				break;
			default:
				command = new FreeBoard();
				command.execute(request, response);
				break;
			}

		} catch (UnsupportedEncodingException e) {
			System.out.println("request 인코딩 에러");
			e.printStackTrace();
		} // end try
	} // end execute()

}
