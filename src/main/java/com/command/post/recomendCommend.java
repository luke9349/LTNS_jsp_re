package main.java.com.command.post;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.view.recomendDAO;
import main.java.com.view.recomendDTO;

public class recomendCommend implements Command{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {

		int cnt =0;
		
		
		
		int post_id = Integer.parseInt(request.getParameter("post_id"));
		int mm_id = Integer.parseInt(request.getParameter("writer"));
		int rec_chkes = Integer.parseInt(request.getParameter("rec_chk"));
		System.out.println(rec_chkes);
			// 추천받았을때 값증가
		
		recomendDAO dao = new recomendDAO();
		
		if (rec_chkes == 1) {
				cnt = dao.empathize_insert(post_id, mm_id);
				request.setAttribute("rec", cnt);
			
		}else if (rec_chkes == 0) {
				cnt = dao.empathize_delete(post_id, mm_id);
				request.setAttribute("rec", cnt);
			}	
	
			
			
		
		
		
		
		
		
	}

	private void swicth(int rec_chkes) {
		// TODO Auto-generated method stub
		
	}
	

}
