package test.maker;

import java.sql.SQLException;

public class Main_tester {

	public static void main(String[] args) {
		
		/*db 초기화*/
		try {
			Master_DAO_tester m=new Master_DAO_tester();
			m.refreshAll();
			m.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		

	}

}
