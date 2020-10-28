package util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DataUtil {

	public static Connection getConnection() {

		Connection conn = null;

		try {
			String url = "jdbc:oracle:thin:@localhost:1521:xe";
			String user = "scott_b";
			String password = "tiger_b";

			Class.forName("oracle.jdbc.OracleDriver");

			return conn = DriverManager.getConnection(url, user, password);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return conn;

	}

}
