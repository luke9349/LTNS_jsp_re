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

import main.java.com.model.DAO;
import main.java.com.model.DB;
import main.java.com.model.DTO;

public class WriteDAO implements DAO {
	
	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	
	
	public static final String SQL_WRITE_SEARCH_BY_UID =
			"SELECT * FROM POST_TABLE pt WHERE POST_ID  = ?";
	

	
	
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
	public int wr_insert(WriteDTO dto, int currval) throws SQLException {
		int cnt =0;
		
		String title = dto.getTitle(); //제목 
		//String writer = dto.getWriter(); // 글쓴이
		String category = dto.getCategory(); // 카테고리 
		int currvaldata = currval;
		
		cnt = this.wr_insert(title, category, currvaldata);
		return cnt;
	}
	
	public int wr_insert(String title, String category, int currvaldata) throws SQLException {
		int cnt = 0;
	
		
		try {
			String sql =
					"INSERT INTO post_table"
					+"(post_id,title,writer,category,regdate,post_contents,viewCnt) "
					+"VALUES"
					+"(SEQ_post_table_post_id.NEXTVAL,?,2,?,SYSTIMESTAMP,?,0)";
					
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, title);
			psmt.setString(2, category);
			psmt.setInt(3, currvaldata);
			
			
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
	
	
	
	//글 조회수증가 보기 뷰
	public WriteDTO[] wr_view(int post_id) throws SQLException {
		int cnt =0;
		WriteDTO [] arr = null;
		
		String sql = "UPDATE post_table SET viewCnt=viewCnt+1 WHERE post_id = ?";
		String views = "SELECT  * FROM POST_TABLE pt WHERE POST_ID = ?";
		try {
			
			conn.setAutoCommit(false);
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, post_id);
			cnt = psmt.executeUpdate();
			psmt.close();
			
			psmt = conn.prepareStatement(views);
			psmt.setInt(1, post_id);
			rs = psmt.executeQuery();
			arr= createArray(rs);
			conn.commit();
			System.out.println("트랜잭션성공"+post_id);
			
		} catch (Exception e) {
			e.printStackTrace();
			conn.rollback();
			System.out.println("트랜잭션 실패 roll back");
			throw e;
		} finally {
			close();
		} 
		
		return arr;
	}
	
	
	
	
	//글 삭제하기 
	public int post_delete(int requestsdata) throws SQLException {
		int cnt =0;
		
		try {
			String sql ="DELETE FROM POST_TABLE pt WHERE post_id = ?";
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, requestsdata);
			cnt = psmt.executeUpdate();
	
		} finally {
			System.out.println(requestsdata + "값얼마니?");
			close();
		}
		
		return cnt;
	}
	
	
	//글 업데이트하기 
	public  WriteDTO[] _post_update(int post_id) throws SQLException {
		int cnt = 0;
		WriteDTO[] arr = null;
		try {
			psmt = conn.prepareStatement(SQL_WRITE_SEARCH_BY_UID);
			psmt.setInt(1, post_id);
			rs = psmt.executeQuery();
			arr = createArray(rs);
		} finally {
			close();
		}
		return arr;
	}

	
	

	
	
	
	
//	@Override
//	public DTO mkDTO(ResultSet rs) throws SQLException {
//		int post_id = rs.getInt("post_id"); // 게시글 고유번호 
//		String title = rs.getString("title"); //제목 
//		String writer = rs.getString("writer"); //제목 
//		String category = rs.getString("category"); //제목 
//		String regdate = rs.getString("regdate");
//		int content = rs.getInt("post_contents"); //파일주소 
//		int viewCnt = rs.getInt("viewCnt");
//		DTO dto = new WriteDTO(post_id, title, writer,category, content, viewCnt);
//		((WriteDTO)dto).setRegDate(regdate);
//		return dto;
//	}
//	
//	@Override
//	public DTO[] mkDTOs(ResultSet rs) throws SQLException {
//		DTO[] arr=null;
//		ArrayList<DTO> list=new ArrayList<DTO>();
//		
//		while(rs.next()) {
//			list.add(mkDTO(rs));
//		}
//		int size=list.size();
//		if(size==0)return null;
//		arr=new DTO[size];
//		list.toArray(arr);
//		
//		return arr;
//	}

	@Override
	public DTO[] selectBySQL(String sql) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DTO[] selectBySQL(String sql, String stringParamForPstmt) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DTO[] selectBySQL(String sql, String... stringParamForPstmt) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DTO mkDTO(ResultSet rs) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DTO[] mkDTOs(ResultSet rs) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}


	
	
}
