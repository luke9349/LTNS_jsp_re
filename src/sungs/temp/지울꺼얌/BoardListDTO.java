package sungs.temp.지울꺼얌;

public class BoardListDTO {
	private long postId; // 게시글 고유 번호
	private String title; // 게시글 제목
	private String writer; // 작성자
	private String category; // 카테고리
	private String regdate; // 작성일
	private String postContent; // 내용
	private int empath; // 공감 => post id 로 공감테이블 참조
	private int viewcnt; // 조회수

}
