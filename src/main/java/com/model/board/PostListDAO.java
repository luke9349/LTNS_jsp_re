package main.java.com.model.board;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;


public class PostListDAO {

	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;

	public String getContent() { // 파일테이블에서 컨텐츠 가져오기
		StringBuffer result = new StringBuffer();
		에러는 일부러 내는 중 나중에 빨리 찾아 볼라고 ^ㅡ^ 👀
		여기도 여기 DTO 를 따로 만드는 것이 좋겠움 !!
		그리고 이 메서든 FileDAO 로 운영하는게 맞는 듯 FILE 테이블 이므로 ..
	FROM FILE_TABLE WHERE FILE_ID IN (POST_CONTENTS, POST_CONTENTS, POST_CONTENTS, ...)
		return result.toString();
	} // end getContent()

	public int getEmpath() { // 추천 테이블에서 갯수 세서 가져오기
		int result = 0;

		에러는 일부러 내는 중 나중에 빨리 찾아 볼라고 ^ㅡ^ 👀
		여기도 여기 DTO 를 따로 만드는 것이 좋겠움 !!
		그리고 이 메서든 EMPATHIZE 로 운영하는게 맞는 듯 EMPATHIZE 테이블 이므로 ..
	FROM EMPATHIZE_TABLE WHERE POST_ID IN (POST_ID, POST_ID, POST_ID, ...)
		
		return result;
	} // end getEmpath()

	public PostDTO[] getPosts(ResultSet rs) {
		PostDTO[] result = null;

		try {
			List<PostDTO> list = new ArrayList<PostDTO>(); 
			while (rs.next()) {
				PostDTO dto = new PostDTO();
				dto.setPostId(rs.getInt("POST_ID"));
				dto.setTitle(rs.getString("TITLE"));
				dto.setWriter(rs.getString("WRITER"));
				dto.setCategory(rs.getString("CATEGORY"));

				Date date = rs.getDate("REGDATE");
				Time time = rs.getTime("REGDATE");

				String strDate = new SimpleDateFormat("yyyy-mm-dd").format(date);
				String strTime = new SimpleDateFormat("HH-mm-ss").format(time);

				System.out.println("여기서 time이 어떻게 뽑히는지 한번 보고 가야함: " + strTime);

				String meridiem = "오전";
				int integerTime = Integer.parseInt(strTime.substring(0, 2));
				if (integerTime > 12) {
					meridiem = "오후";
					integerTime -= 12;
				} // end if
				String dateResult = strDate + " (" + meridiem + ")" + integerTime + strTime.substring(2);
				dto.setRegdate(dateResult);
				
				dto.setPostContent(rs.getInt("POST_CONTENTS"));
				dto.setViewcnt(rs.getInt("VIEWCNT"));
				
				list.add(dto);
			} // end while
			
			result = new PostDTO[list.size()];
			list.toArray(result); 
			
			System.out.println("PostListDAO getPosts메서드 결과물 확인: " + result);
		} catch (SQLException e) {
			e.printStackTrace();
		} // end try

		return result;
	} // end getPosts()

	public PostListDTO[] getFreeList(String pageNum) {
		PostListDTO[] result = null;
		try {
			int page = Integer.parseInt(pageNum);
			int startPage = (page - 1) * 10 + 1;
			int endPage = ((startPage - 1) / 10 + 1) * 10;

			// 정렬기준
			// 카테고리로 걸러내고, 
			// 페이지 순대로 짜르고, 
			// 날짜 (regdate) - 최신순
			
			String sql = "SELECT * FROM POST_TABLE WHERE (로우넘) (로우넘)";
			String[] cols = {"POST_ID", "POST_CONTENTS"};
			psmt = conn.prepareStatement(sql, cols);
			// psmt.set // => argument 셋팅
			rs = psmt.executeQuery();
			PostDTO[] posts = getPosts(rs);
			
			// 파일 업다운 로드 writedao 참조 아직 잘모름
			rs = psmt.getGeneratedKeys(); // rs가 두번 사용 되는지도 의문!! 
			// 예제에서는 insert 문을 날리면서 참조 시켯는데 지금은 select 문으로 참조 시킴
		} catch (Exception e) {
			e.printStackTrace();
		} // end try

		// 1. post table 정보 추출

		// 2. post table 의 contentId 로 파일 테이블에서 content get
		// 위의 rs = psmt.getGeneratedKeys(); 에서 참조

		// 3. 게시글 아이디로 empath 테이블에서 추천 갯수 새오기
		// 위의 rs = psmt.getGeneratedKeys(); 에서 참조

		return result;
	} // end getFreeList()

}
