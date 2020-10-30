package main.java.com.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class DataUtil {
	
	
	static Connection conn;
	static PreparedStatement pstmt;
	static Statement stmt;
	static ResultSet rs;

	
	
	
	
	public static Connection getConnection() {

		try {

			InitialContext initCon = new InitialContext();
			Context context = (Context) initCon.lookup("java:/comp/env");
			DataSource dataSource = (DataSource) context.lookup("jdbc/LTNS_jsp");

			return dataSource.getConnection();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	

	public static void close() throws SQLException {
		if(rs != null) rs.close();
		if(pstmt != null) pstmt.close();
		if(stmt != null) stmt.close();
		if(conn != null) conn.close();
		
	} // end close()
	
	

}
