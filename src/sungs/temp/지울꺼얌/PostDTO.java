package sungs.temp.지울꺼얌;

public class PostDTO {

	private long postId; // 게시글 고유 번호
	private String title; // 게시글 제목
	private String writer; // 작성자
	private String category; // 카테고리
	private String regdate; // 작성일
	private int postContent; // 내용 => 파일 테이블 참조 번호
	private int viewcnt; // 조회수

	public long getPostId() {
		return postId;
	}

	public void setPostId(long postId) {
		this.postId = postId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getRegdate() {
		return regdate;
	}

	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}

	public int getPostContent() {
		return postContent;
	}

	public void setPostContent(int postContent) {
		this.postContent = postContent;
	}

	public int getViewcnt() {
		return viewcnt;
	}

	public void setViewcnt(int viewcnt) {
		this.viewcnt = viewcnt;
	}

	@Override
	public String toString() {
		return "PostDTO [postId=" + postId + ", title=" + title + ", writer=" + writer + ", category=" + category
				+ ", regdate=" + regdate + ", postContent=" + postContent + ", viewcnt=" + viewcnt + "]";
	}

}
