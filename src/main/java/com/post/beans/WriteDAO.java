package main.java.com.post.beans;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import main.java.com.util.DataUtil;

public class WriteDAO {
	
	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	
	
	
	public WriteDAO() {
		// TODO Auto-generated constructor stub
	}
	
	
	//글쓰기
	public int wr_insert(WriteDTO dto) {
		int cnt =0;
		
		return cnt;
	}
	
	
	
	//글 수정하기 
	public int wr_update(WriteDTO dto) {
		int cnt =0;
		
		return cnt;
	}
	
	
	
	
	//글 삭제하기 
	public int wr_delete(WriteDTO dto) {
		int cnt =0;
		
		return cnt;
	}
	
	
	//덧글 달기 
	public int comm_write(WriteDTO dto) {
		int cnt =0;
		
		return cnt;
	}
	
	
	//덧글 삭제하기 
	public int comm_delete(WriteDTO dto) {
		int cnt =0;
		
		return cnt;
	}
	
	
}
