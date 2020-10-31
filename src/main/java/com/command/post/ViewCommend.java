package main.java.com.command.post;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.Command;
import main.java.com.post.beans.FileWriteDAO;

public class ViewCommend implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		
		//파일 인설트 
		int file_quert_cnt = 0;
		FileWriteDAO filedao = new FileWriteDAO(); 
		
		
		String real_filename = request.getParameter("real_filename");
		String filename = request.getParameter("filename");
		String filekind = request.getParameter("filekind");
		
		System.out.println(real_filename);
		System.out.println(filename);
		System.out.println(filekind);
		
		
		if(real_filename != null) {
			try {
				file_quert_cnt = filedao.fileInsert(filekind, real_filename, filename);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		
		request.setAttribute("fileOk", file_quert_cnt);
		System.out.println("파일쿼리성공"+file_quert_cnt);
		
		
	}

}
