package test.maker;

import java.sql.SQLException;

public class Main_tester {

	public static void main(String[] args) {
		
		/*db 초기화*/
		try {
			Master_DAO_tester m=new Master_DAO_tester();
			m.refreshAll();
//			m.deleteAll();
			m.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		/*샘플 정회원 100명 생성*/
		new SampleMember_Maker().mk100Members();

		System.out.println("작업 완료!");
	}

}
