package main.java.com.model.mainpage;

import java.sql.*;
import java.util.ArrayList;
import main.java.com.model.DAO;
import main.java.com.model.DB;
import main.java.com.model.DTO;

public class Mainpage_DAO implements DAO {
	/*--공감 순으로 뷰를 정렬하여,포스트 3개  가져오기--*/
	final static String SELECT_3_POSTS_BY_EMPATHIZE_CNT="SELECT A.post_id AS post_id, B.title AS title, B.writer AS writer, B.category AS category, B.regdate AS regdate, B.post_contents AS post_contents "
			+"FROM tot_post_view A LEFT OUTER JOIN ("
			+"										SELECT post_table.post_id AS post_id, post_table.title AS title, mm_table.id AS writer, post_table.category AS category, post_table.regdate AS regdate, post_table.post_contents AS post_contents "
			+"										FROM post_table LEFT OUTER JOIN mm_table "
			+"										ON post_table.writer = mm_table.mm_id " 
			+"					 															) B " 
			+"ON A.post_id=B.post_id " 
			+"WHERE rownum <= 6 " 
			+"ORDER BY A.empathize_cnt DESC";
	
	/*--조회수 순으로 뷰를 정렬하여,포스트 6개  가져오기--*/
	final static String SELECT_6_POSTS_BY_VIEWCNT="SELECT post_table.post_id AS post_id, post_table.title AS title, mm_table.id AS writer, post_table.category AS category, post_table.regdate AS regdate, post_table.post_contents AS post_contents "  
			+"FROM post_table LEFT OUTER JOIN mm_table " 
			+"ON post_table.writer = mm_table.mm_id " 
			+"WHERE rownum <=3" 
			+"ORDER BY post_table.viewCnt DESC";
	
	/*--최신 순으로 포스트 5개 가져오기--*/
	final static String SELECT_5_POSTS_BY_NEAREST="SELECT post_table.post_id AS post_id, post_table.title AS title, mm_table.id AS writer, post_table.category AS category, post_table.regdate AS regdate, post_table.post_contents AS post_contents " 
			+"FROM post_table LEFT OUTER JOIN mm_table " 
			+"ON post_table.writer = mm_table.mm_id "
			+"WHERE rownum <=5 "
			+"ORDER BY post_table.regdate DESC";
	
	/*--최신 순으로, n번째 이후, 다음 포스트 3개 가져오기 매개변수로 regdate 받을것!--*/
	final static String SELECT_NEXT_3_POSTS_BY_NEAREST="SELECT post_table.post_id AS post_id, post_table.title AS title, mm_table.id AS writer, post_table.category AS category, post_table.regdate AS regdate, post_table.post_contents AS post_contents " 
			+"FROM post_table LEFT OUTER JOIN mm_table "  
			+"ON post_table.writer = mm_table.mm_id " 
			+"WHERE post_table.regdate<? AND rownum <=5 "  
			+"ORDER BY post_table.regdate DESC";
	
	
	//DB 연결에 필요한 변수들
	Connection conn;
	PreparedStatement pstmt;
	Statement stmt;
	ResultSet rs;
	
	//객체 생성시, DB Connection 생성
	public Mainpage_DAO() {
		try {
			Class.forName(DB.DRIVER);
			conn=DriverManager.getConnection(DB.URL,DB.USERID,DB.USERPW);
			System.out.println("DAO 생성, DB 연결");
		}catch (Exception e) {
			e.printStackTrace();
		}// end try
	}// 생성자 end
	
	
	//DB 자원 반납
	@Override
	public void close() throws SQLException {
		if(rs != null) rs.close();
		if(pstmt != null) pstmt.close();
		if(stmt != null) stmt.close();
		if(conn != null) conn.close(); 
	}//end close()
	
	
	
	// ResultSet => DTO
	@Override
	public DTO mkDTO(ResultSet rs) throws SQLException {
		int post_id=rs.getInt("post_id");
		String title=rs.getString("title");
		String writer=rs.getString("writer");
		String category=rs.getString("category");
		String regdate=rs.getString("regdate");
		int post_contents=rs.getInt("post_contents");
		int viewCnt=0;//받지 않음
		int empathCnt=0;//받지 않음
		int mm_id=0;// mm_id가 아닌, 아이디를 바로 받는다
		
		DTO dto=new Post_DTO(post_id, title, writer, category, regdate, post_contents, viewCnt, empathCnt, mm_id);
		return dto;
	}//end mkDTO
	
	
	
	// ResultSet => DTOs
	@Override
	public DTO[] mkDTOs(ResultSet rs) throws SQLException {
		DTO[] arr=null;
		ArrayList<DTO> list=new ArrayList<DTO>();
		
		while(rs.next()) {
			list.add(mkDTO(rs));
		}
		int size=list.size();
		if(size==0)return null;
		arr=new DTO[size];
		list.toArray(arr);
		
		return arr;
	}//end mkDTOs()
	
	
	
	//sql문으로 가져오기
	@Override
	public DTO[] selectBySQL(String sql) throws SQLException {
		DTO [] arr=null;
		try {
			pstmt=conn.prepareStatement(sql);
			rs=pstmt.executeQuery();
			arr=mkDTOs(rs);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return arr;
	}//end - sql문으로 가져오기
	
	
	
	//String 매개변수를 받는 sql문으로 가져오기
	@Override
	public DTO[] selectBySQL(String sql,int[] intParamsForPstmt, String [] stringParamsForPstmt) throws SQLException {
		DTO [] arr=null;
		try {
			pstmt=conn.prepareStatement(sql);
			
			for(int i=0;i<stringParamsForPstmt.length;i++) {
				pstmt.setString(i, stringParamsForPstmt[i]);
			}
			
			rs=pstmt.executeQuery();
			arr=mkDTOs(rs);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return arr;
	}//end - String 매개변수를 받는 sql문으로 가져오기	
	
}
