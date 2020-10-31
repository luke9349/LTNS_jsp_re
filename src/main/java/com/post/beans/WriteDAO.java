package main.java.com.post.beans;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import main.java.com.model.DB;

public class WriteDAO {
	
	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	
	
	
	public WriteDAO() {
		
		try {
			Class.forName(DB.DRIVER);
			conn = DriverManager.getConnection(DB.URL, DB.USERID, DB.USERPW);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public void close() throws SQLException {
		if(rs != null) rs.close();
		if(psmt != null) psmt.close();
		if(stmt != null) stmt.close();
		if(conn != null) conn.close();
		
	} // end close()
	
	
	//글쓰기
	public int wr_insert(WriteDTO dto) throws SQLException {
		int cnt =0;
		
		String title = dto.getTitle(); //제목 
		//String writer = dto.getWriter(); // 글쓴이
		String category = dto.getCategory(); // 카테고리 

		
		cnt = this.wr_insert(title, category);
		return cnt;
	}
	
	public int wr_insert(String title, String category) throws SQLException {
		int cnt = 0;
	
		try {
			String sql = "INSERT INTO post_table"
					+"(post_id,title,writer,category,regdate,post_contents,viewCnt) "
					+"VALUES" 
					+"(SEQ_post_table_post_id.NEXTVAL,?,2,?,SYSDATE,SEQ_post_table_post_id.CURRVAL, 02)";

					
			
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, title);
			psmt.setString(2, category);
			
			cnt = psmt.executeUpdate();
		} finally {
			close();
		
		}
		
		return cnt;
	}
	
	
	public WriteDTO[] createArray(ResultSet rs) throws SQLException {
		ArrayList<WriteDTO> list = new ArrayList<WriteDTO>();
		
		while(rs.next()) {

			int post_id = rs.getInt("post_id"); // 게시글 고유번호 
			String title = rs.getString("title"); //제목 
			String writer = rs.getString("writer"); //제목 
			String category = rs.getString("category"); //제목 
			//sysdate
			Date d = rs.getDate("regdate");
			Time t = rs.getTime("regdate");
			String regDate = "";
			if( d != null) {
				regDate = new SimpleDateFormat("yyyy-mm-dd").format(d) + " "
						+ new SimpleDateFormat("hh:mm:ss").format(t);
			}
			int content = rs.getInt("post_contents"); //파일주소 
			int viewCnt = rs.getInt("viewCnt");
			WriteDTO dto = new WriteDTO(post_id, title, writer,category, content, viewCnt);
			dto.setRegDate(regDate);
			list.add(dto);
			
		}
		
		int size = list.size();
		if(size == 0 ) return null;
		
		WriteDTO arr[] = new WriteDTO[size];
		list.toArray(arr);
		return arr;
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
