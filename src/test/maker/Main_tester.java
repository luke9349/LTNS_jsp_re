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
		new SampleMember_Maker().mkMembers(100);

		System.out.println("회원생성 작업 완료!");
		
		/*샘플 포스트 100개 생성*/
		new SamplePost_Maker().mkStringOrTagOrImg(100);
	}

}
