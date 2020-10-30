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


	public static void resourceClose(PreparedStatement pstmt, Connection conn) {
		try {
			if (pstmt != null && !pstmt.isClosed())
				pstmt.close();
			if (conn != null && !conn.isClosed())
				conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void resourceClose(Statement stmt, Connection conn) {
		try {
			if (stmt != null && !stmt.isClosed())
				stmt.close();
			if (conn != null && !conn.isClosed())
				conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void resourceClose(ResultSet rs, PreparedStatement pstmt, Connection conn) {
		try {
			if (rs != null && !rs.isClosed())
				rs.close();
			if (pstmt != null && !pstmt.isClosed())
				pstmt.close();
			if (conn != null && !conn.isClosed())
				conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void resourceClose(ResultSet rs, Statement stmt, Connection conn) {
		try {
			if (rs != null && !rs.isClosed())
				rs.close();
			if (stmt != null && !stmt.isClosed())
				stmt.close();
			if (conn != null && !conn.isClosed())
				conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void resourceClose(ResultSet rs, PreparedStatement pstmt, Statement stmt, Connection conn) {
		try {
			if (rs != null && !rs.isClosed())
				rs.close();
			if (pstmt != null && !pstmt.isClosed())
				pstmt.close();
			if (stmt != null && !stmt.isClosed())
				stmt.close();
			if (conn != null && !conn.isClosed())
				conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
