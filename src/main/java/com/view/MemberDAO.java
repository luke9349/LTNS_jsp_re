package main.java.com.view;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import main.java.com.model.DB;
import main.java.com.model.post.FileWriteDTO;

public class MemberDAO {

	
	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	
	public static final String SQL_SELECT_USER_ID = 
			"SELECT * FROM MM_TABLE mt WHERE MM_id = ?";
	
	public static final String SQL_LOGIN_CHK = 
			"SELECT * FROM MM_TABLE WHERE id = ? AND PASSWORD = ? ";

	public static final String SQL_ID_INFO_SELECT =
			"SELECT * FROM MM_TABLE mt WHERE id = ? ";
	
	public static final String SQL_SELECT_JOIN =
			"SELECT * FROM MM_TABLE WHERE ID=? AND NICKNAME= ? AND EMAIL=? " ;
	
	public static final String SQL_INSERT_JOIN =
			" INSERT INTO mm_table(mm_id,id,password,nickname,email,grade) "
			+ "VALUES"
			+ "(SEQ_mm_table_mm_id.NEXTVAL,?,?,?,?,'MEMBER')";
	
	
	
	public MemberDAO() {

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
	
	
	//멤버정보 꺼내오기  회원가입완료후 정보출력
	
	public MemberDTO[] member_Select(int mm_id) throws SQLException {
		int cnt = 0;
		MemberDTO[] arr = null;
		
		try {
			psmt = conn.prepareStatement(SQL_SELECT_USER_ID);
			psmt.setInt(1, mm_id);
			rs = psmt.executeQuery();
			arr = createMember(rs);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}

		
		return arr;
		
	}
	
	//id 정보 출력 
	
	public MemberDTO[] member_INFO_Select(String id) throws SQLException {
		int cnt = 0;
		MemberDTO[] arr = null;
		
		try {
			psmt = conn.prepareStatement(SQL_ID_INFO_SELECT);
			psmt.setString(1, id);
			rs = psmt.executeQuery();
			arr = createMember(rs);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}

		
		return arr;
		
	}
	
	
	
	
	
	
	
	
	
	//멤버 id검색
	public int login_member(String id, String pw) throws SQLException {
		int cnt = 0;
		
		try {
			psmt = conn.prepareStatement(SQL_LOGIN_CHK);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			cnt = psmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			close();
		}
		
		
		return cnt;
	}
	
	//회원가입 조회
	public int select_join(String id, String nik, String email) throws SQLException {
		
		int cnt = 0;
		try {
			psmt = conn.prepareStatement(SQL_SELECT_JOIN);
			psmt.setString(1, id);
			psmt.setString(2, nik);
			psmt.setString(3, email);
			
			cnt = psmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			close();
		}
		
		
		return cnt;		
		
		
		
	}
	

	//회원가입 Insert
	public int insert_join(String id, String pw, String nik, String email) throws SQLException {
		
		int cnt = 0;
		try {
			psmt = conn.prepareStatement(SQL_INSERT_JOIN);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			psmt.setString(3, nik);
			psmt.setString(4, email);
			
			
			cnt = psmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			close();
		}
		
		
		return cnt;		
		
		
		
		
	}
	
	
	
	
	
	public MemberDTO[] createMember(ResultSet rs) throws SQLException {
		ArrayList<MemberDTO> memberlist = new ArrayList<MemberDTO>();
		
		while(rs.next()) {

			int mm_id = rs.getInt("mm_id");
			String id = rs.getString("id");
			String pw = rs.getString("password");
			String nickname = rs.getString("nickname");
			String email = rs.getString("email");
			String grade = rs.getString("grade");
			MemberDTO memberdto = new MemberDTO(mm_id, id, pw, nickname, email, grade);
			memberlist.add(memberdto);
			
		}
		
		int size = memberlist.size();
		if(size == 0 ) return null;
		
		MemberDTO arr[] = new MemberDTO[size];
		memberlist.toArray(arr);
		return arr;
	}
	

	
	
	
	
	
}
