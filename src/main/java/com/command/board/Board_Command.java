package main.java.com.command.board;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.model.board.Board_DAO;

public interface Board_Command  extends Command {
	
	@Override
	default void execute(HttpServletRequest request, HttpServletResponse response) {
		
		int cnt = 0; // query 성공 체크변수  
		 
		
		//가져와야할 객체들 
		String name = request.getParameter("name"); 
		String title = request.getParameter("title");
		String content = request.getParameter("content");
		
		
		if(name != null && title != null && content != null && name.trim().length() > 0 && title.trim().length() >0) {
			
			
			try {
				//insert 구문 들어가야함 
				
			}catch (Exception e) {
				// TODO: handle exception
			}
			
			
		}//end if 
		
		
		
	}// end interface
}
