package main.java.com.util;

import java.sql.Connection;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class DataUtil {

	public static Connection getConnection() {

		try {
			
			InitialContext initCon = new InitialContext();
			Context context = (Context) initCon.lookup("java:/comp/env");
			DataSource dataSource = (DataSource) context.lookup("jdbc/LTNS_jsp");
			
			//추가
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
