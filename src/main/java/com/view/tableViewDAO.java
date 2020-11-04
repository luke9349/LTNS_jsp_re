package main.java.com.view;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import main.java.com.model.DB;

public class tableViewDAO {

	
	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	
	
	public static final String SQL_INSERT_EMPATHIZE = 
			"INSERT INTO empathize_table(post_id,mm_id) "
			+"VALUES (?, ?)";
	
	
	public tableViewDAO() {

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
	

	
	
	public int empathize_insert(int post_id, int mm_id) {
		int cnt = 0;
		
		try {
			psmt = conn.prepareStatement(SQL_INSERT_EMPATHIZE);
			psmt.setInt(1, post_id);
			psmt.setInt(2, mm_id);
			
			cnt = psmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return cnt ;
	}
	
	
	
	
}
