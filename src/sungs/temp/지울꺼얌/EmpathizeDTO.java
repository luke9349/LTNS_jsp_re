package sungs.temp.지울꺼얌;

public class EmpathizeDTO {

	private long postId; // 게시글 번호
	private long mmId; // 유저 고유 번호

	public long getPostId() {
		return postId;
	}

	public void setPostId(long postId) {
		this.postId = postId;
	}

	public long getMmId() {
		return mmId;
	}

	public void setMmId(long mmId) {
		this.mmId = mmId;
	}

	@Override
	public String toString() {
		return "EmpathizeDTO [postId=" + postId + ", mmId=" + mmId + "]";
	}

}
