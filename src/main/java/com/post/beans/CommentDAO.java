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

public class CommentDAO {

	
	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	
	
	public CommentDAO() {
		
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
		public int cm_Insert(CommentDTO dto) throws SQLException {
			int cnt = 0;
			
			String comentcentes = dto.getComment_contents();
			// 추후 writer ,id 작성 
			
			cnt = this.cm_Insert(comentcentes);
			return cnt;
		}
		
		public int cm_Insert(String comentcentes) throws SQLException {
			int cnt = 0;
		
			try {
				String sql = "INSERT INTO comment_table"
						+"(comment_id,comment_contents,writer,post_id,regdate) "
						+"VALUES"
						+"(SEQ_comment_table_comment_id.NEXTVAL,?,2,40,sysdate)";
				psmt = conn.prepareStatement(sql);
				psmt.setString(1, comentcentes);
				
				//writer는 받아와야함, id 는 받아와야함 
				
				cnt = psmt.executeUpdate();
			}	finally {
				close();
			
			}
			
			return cnt;
		}
		
		
		public CommentDTO[] createArray(ResultSet rs) throws SQLException {
			ArrayList<CommentDTO> list = new ArrayList<CommentDTO>();
			
			while(rs.next()) {

				int comment_id = rs.getInt("comment_id"); // 게시글 고유번호 
				String comment_contents = rs.getString("comment_contents"); //제목 
				int writer = rs.getInt("writer"); //제목 
				int post_id = rs.getInt("post_id"); //제목 
				Date d = rs.getDate("regdate");
				Time t = rs.getTime("regdate");
				String regdate = "";
				if( d != null) {
					regdate = new SimpleDateFormat("yyyy-mm-dd").format(d) + " "
							+ new SimpleDateFormat("hh:mm:ss").format(t);
				}
			
				CommentDTO dto = new CommentDTO(comment_id, comment_contents, writer,post_id);
				dto.setRegDate(regdate);
				list.add(dto);
				
				
				
				
			}
			
			int size = list.size();
			if(size == 0 ) return null;
			
			CommentDTO arr[] = new CommentDTO[size];
			list.toArray(arr);
			return arr;
		}
		
	
	
	
}
