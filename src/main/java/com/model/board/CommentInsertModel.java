package main.java.com.model.board;

public class CommentInsertModel {
	private String content;
	private String userId;
	private String postId;
	private String page;

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPostId() {
		return postId;
	}

	public void setPostId(String postId) {
		this.postId = postId;
	}

	public String getPage() {
		return page;
	}

	public void setPage(String page) {
		this.page = page;
	}

	@Override
	public String toString() {
		return "CommentInsertModel [content=" + content + ", userId=" + userId + ", postId=" + postId + ", page=" + page
				+ "]";
	}

}
