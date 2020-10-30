package main.java.com.model.board;

public class BoardListDAO {
	
	public String getContent () {
		StringBuffer result = new StringBuffer();
		
		
		
		return result.toString();
	}
	
	public BoardListDTO[] getFreeList(String postId) {
		try {
			int id = Integer.parseInt(postId);			
		} catch(Exception e) {
			// 아이디를 숫자로 변경됨에 따른 에러 처리
			e.printStackTrace();
		}
		BoardListDTO[] result = null;
		
		// 1. post table 정보 추출
		
		// 2. post table 의 contentId 로 파일 테이블에서 content get
		
		// 3. 게시글 아이디로 empath 테이블에서 추천 갯수 새오기
		
		return result;
	}

}
