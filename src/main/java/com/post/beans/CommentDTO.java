package main.java.com.post.beans;

public class CommentDTO {

	
	
	public int comment_id;
	public String comment_contents;
	public int writer ;
	public int post_id;
	public String regdate;
	
	public CommentDTO() {
		// TODO Auto-generated constructor stub
	}

	public CommentDTO(int comment_id, String comment_contents, int writer, int post_id) {
		super();
		this.comment_id = comment_id;
		this.comment_contents = comment_contents;
		this.writer = writer;
		this.post_id = post_id;
	}

	public int getComment_id() {
		return comment_id;
	}

	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
	}

	public String getComment_contents() {
		return comment_contents;
	}

	public void setComment_contents(String comment_contents) {
		this.comment_contents = comment_contents;
	}

	public int getWriter() {
		return writer;
	}

	public void setWriter(int writer) {
		this.writer = writer;
	}

	public int getPost_id() {
		return post_id;
	}

	public void setPost_id(int post_id) {
		this.post_id = post_id;
	}
	
	public String getRegDate() {
		//System.out.println("getRegdate() 호출");
		return regdate;
	}

	public void setRegDate(String regdate) {
		this.regdate = regdate;
	}

	@Override
	public String toString() {
		return "CommentDTO [comment_id=" + comment_id + ", comment_contents=" + comment_contents + ", writer=" + writer
				+ ", post_id=" + post_id + ", regdate=" + regdate + "]";
	}
	
	
	
	
	
	
	
}
