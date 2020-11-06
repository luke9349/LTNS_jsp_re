package main.java.com.model.mainpage;

import java.sql.*;
import java.util.ArrayList;
import main.java.com.model.DAO;
import main.java.com.model.DB;
import main.java.com.model.DTO;
import main.java.com.model.Post_Contents;
import main.java.com.util.DataUtil;

public class Mainpage_DAO implements DAO {
	/*--공감 순으로 뷰를 정렬하여,포스트 3개  가져오기--*/
	public final static String SELECT_3_POSTS_BY_EMPATHIZE_CNT="SELECT P.post_id AS post_id, M.mm_id AS mm_id, M.ID AS id, M.nickname AS nickname, P.title AS title, P.regdate AS regdate, P.category AS category, F.real_filename AS real_filename, V.empathize_cnt AS empathize_cnt, P.viewcnt AS viewcnt " +  
			"FROM tot_post_view V " + 
			"LEFT OUTER JOIN post_table P " + 
			"ON V.post_id=P.post_id " + 
			"LEFT OUTER JOIN mm_table M " + 
			"ON P.writer=M.mm_id " + 
			"LEFT OUTER JOIN file_table F " + 
			"ON P.post_contents=F.file_id " + 
			"WHERE ROWNUM <= 3 " + 
			"ORDER by V.empathize_cnt DESC";
	
	/*--조회수 순으로 뷰를 정렬하여,포스트 6개  가져오기--*/
	public final static String SELECT_6_POSTS_BY_VIEWCNT="SELECT P.post_id AS post_id, M.mm_id AS mm_id, M.ID AS id, M.nickname AS nickname, P.title AS title, P.regdate AS regdate, P.category AS category, F.real_filename AS real_filename, V.empathize_cnt AS empathize_cnt, P.viewcnt AS viewcnt " + 
			"FROM tot_post_view V " + 
			"LEFT OUTER JOIN post_table P " + 
			"ON V.post_id=P.post_id " + 
			"LEFT OUTER JOIN mm_table M " + 
			"ON P.writer=M.mm_id " + 
			"LEFT OUTER JOIN file_table F " + 
			"ON P.post_contents=F.file_id " + 
			"WHERE ROWNUM <= 6 " + 
			"ORDER by P.viewcnt DESC";
	
	/*--최신 순으로 포스트 5개 가져오기--*/
	public final static String SELECT_5_POSTS_BY_NEAREST="SELECT P.post_id AS post_id, M.mm_id AS mm_id, M.ID AS id, M.nickname AS nickname, P.title AS title, P.regdate AS regdate, P.category AS category, F.real_filename AS real_filename, V.empathize_cnt AS empathize_cnt, P.viewcnt AS viewcnt " + 
			"FROM tot_post_view V " + 
			"LEFT OUTER JOIN post_table P " + 
			"ON V.post_id=P.post_id " + 
			"LEFT OUTER JOIN mm_table M " + 
			"ON P.writer=M.mm_id " + 
			"LEFT OUTER JOIN file_table F " + 
			"ON P.post_contents=F.file_id " + 
			"WHERE ROWNUM <= 5 " + 
			"ORDER by P.regdate DESC";
	
	/*--최신 순으로, n번째 이후, 다음 포스트 3개 가져오기 매개변수로 regdate 받을것!--*/
	public final static String SELECT_NEXT_3_POSTS_BY_NEAREST="SELECT P.post_id AS post_id, M.mm_id AS mm_id, M.ID AS id, M.nickname AS nickname, P.title AS title, P.regdate AS regdate, P.category AS category, F.real_filename AS real_filename, V.empathize_cnt AS empathize_cnt, P.viewcnt AS viewcnt " + 
			"FROM tot_post_view V " + 
			"LEFT OUTER JOIN post_table P " + 
			"ON V.post_id=P.post_id " + 
			"LEFT OUTER JOIN mm_table M " + 
			"ON P.writer=M.mm_id " + 
			"LEFT OUTER JOIN file_table F " + 
			"ON P.post_contents=F.file_id " + 
			"WHERE P.regdate<=? AND rownum <=5 " + 
			"ORDER BY P.regdate DESC";
	
	
	//DB 연결에 필요한 변수들
	Connection conn;
	PreparedStatement pstmt;
	Statement stmt;
	ResultSet rs;
	
	//객체 생성시, DB Connection 생성
	public Mainpage_DAO() {
		try {
			System.out.println("DAO 생성");
			conn=DataUtil.getConnection();
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
		System.out.println("메인페이지 DAO 생성시작");
		int post_id=rs.getInt("post_id");
		System.out.println("0");
		String title=rs.getString("title");
		System.out.println("1");
		String nickname=rs.getString("nickname");
		System.out.println("2");
		String id=rs.getString("id");
		System.out.println("3");
		String category=rs.getString("category");
		System.out.println("4");
		String regdate=rs.getString("regdate");
		regdate=regdate.substring(0,16);
		System.out.println("5");
		int viewCnt=rs.getInt("viewCnt");//받지 않음
		System.out.println("6");
		int empathCnt=rs.getInt("empathize_cnt");//받지 않음
		System.out.println("7");
		int mm_id=rs.getInt("mm_id");// mm_id
		System.out.println("8");
		Post_Contents post_contents=new Post_Contents(rs.getString("real_filename"));
		
		DTO dto=new Post_DTO(post_id, title, mm_id, category, regdate,
				post_contents, nickname, id, viewCnt, empathCnt);
		return dto;
	}//end mkDTO
	
	
	
	// ResultSet => DTOs
	@Override
	public DTO[] mkDTOs(ResultSet rs) throws SQLException {
		DTO[] arr=null;
		ArrayList<DTO> list=new ArrayList<DTO>();
		
		try {
			while(rs.next()) {
				list.add(mkDTO(rs));
			}
			int size=list.size();
			if(size==0)return null;
			arr=new DTO[size];
			list.toArray(arr);
		}catch(SQLException e){
			if(arr.length==0)
				throw new SQLException(); //하나도 안담겼으면 에러 반환해주자
			return arr; //갯수 부족일땐 잘 출력해주자
		}
		return arr;
	}//end mkDTOs()
	
	
	
	//sql문으로 가져오기
	@Override
	public DTO[] selectBySQL(String sql) throws SQLException {
		DTO [] arr=null;
		try {
			System.out.println("a");
			pstmt=conn.prepareStatement(sql);
			System.out.println("b");
			rs=pstmt.executeQuery();
			System.out.println("c");
			arr=mkDTOs(rs);
			System.out.println("d");
			for(DTO dto : arr) {
				System.out.println(((Post_DTO)dto).getNickname());
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return arr;
	}//end - sql문으로 가져오기
	
	
	
	//String 매개변수를 받는 sql문으로 가져오기
	@Override
	public DTO[] selectBySQL(String sql, String stringParamForPstmt) throws SQLException {
		DTO [] arr=null;
		try {
			pstmt=conn.prepareStatement(sql);
			System.out.println(stringParamForPstmt);
			pstmt.setString(1, stringParamForPstmt);
			rs=pstmt.executeQuery();
			System.out.println("시벌");
			arr=mkDTOs(rs);
			for(DTO dto:arr) {
				System.out.println("아"+dto);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return arr;
	}//end - String 매개변수를 받는 sql문으로 가져오기	
	
	//String 매개변수를 받는 sql문으로 가져오기
	@Override
	public DTO[] selectBySQL(String sql, String ...stringParamForPstmt) throws SQLException {
		DTO [] arr=null;
		try {
			pstmt=conn.prepareStatement(sql);
			
			for(int i=0;i<stringParamForPstmt.length;i++)
				pstmt.setString(i+1, stringParamForPstmt[i]);
			
			rs=pstmt.executeQuery();
			arr=mkDTOs(rs);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return arr;
	}//end - String 매개변수를 받는 sql문으로 가져오기


	@Override
	public DTO[] selectBySQL(String sql, int integerParamForPstmt) throws SQLException {
		return null;
	}


	@Override
	public DTO[] selectBySQL(String sql, int... integerParamForPstmt) throws SQLException {
		return null;
	}


	@Override
	public DTO mkDTO(ResultSet rs, int signal) throws SQLException {
		return null;
	}


	@Override
	public DTO[] mkDTOs(ResultSet rs, int signal) throws SQLException {
		return null;
	}


	@Override
	public DTO[] selectBySQL_withSignal(String sql, int signal) throws SQLException {
		return null;
	}


	@Override
	public DTO[] selectBySQL_withSignal(String sql, int signal, int integerParamForPstmt) throws SQLException {
		return null;
	}


	@Override
	public DTO[] selectBySQL_withSignal(String sql, int signal, int... integerParamForPstmt) throws SQLException {
		return null;
	}


	@Override
	public DTO[] selectBySQL_withSignal(String sql, int signal, String stringParamForPstmt) throws SQLException {
		return null;
	}


	@Override
	public DTO[] selectBySQL_withSignal(String sql, int signal, String... stringParamForPstmt) throws SQLException {
		return null;
	}


	@Override
	public DTO[] withSignal(DTO[] _arr, int signal) throws SQLException {
		return null;
	}


	@Override
	public int insertBySQL_withDTO(String sql, DTO dto) throws SQLException {
		// TODO Auto-generated method stub
		return 0;
	}


	@Override
	public int insertBySQL_withDTO(String sql, DTO... dtos) throws SQLException {
		// TODO Auto-generated method stub
		return 0;
	}
	
}
