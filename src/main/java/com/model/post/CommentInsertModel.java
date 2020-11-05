package main.java.com.model.post;

public class CommentInsertModel {
	private String content;
	private String userId;
	private String postId;

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

	@Override
	public String toString() {
		return "CommentInsertModel [content=" + content + ", userId=" + userId + ", postId=" + postId + "]";
	}

}
