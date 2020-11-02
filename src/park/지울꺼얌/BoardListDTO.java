package park.지울꺼얌;

public class BoardListDTO {
	private long postId; // 게시글 고유 번호
	private String title; // 게시글 제목
	private String writer; // 작성자
	private String category; // 카테고리
	private String regdate; // 작성일
	private String postContent; // 내용
	private long empathizeCnt; // 공감
	private long viewcnt; // 조회수

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

	public String getPostContent() {
		return postContent;
	}

	public void setPostContent(String postContent) {
		this.postContent = postContent;
	}

	public long getEmpath() {
		return empathizeCnt;
	}

	public void setEmpath(long empathizeCnt) {
		this.empathizeCnt = empathizeCnt;
	}

	public long getViewcnt() {
		return viewcnt;
	}

	public void setViewcnt(long viewcnt) {
		this.viewcnt = viewcnt;
	}

	@Override
	public String toString() {
		return "BoardListDTO [postId=" + postId + ", title=" + title + ", writer=" + writer + ", category=" + category
				+ ", regdate=" + regdate + ", postContent=" + postContent + ", empathizeCnt=" + empathizeCnt
				+ ", viewcnt=" + viewcnt + "]";
	}

}
