package main.java.com.model.mainpage;

import java.sql.Timestamp;

import main.java.com.model.DTO;

public class Post_DTO implements DTO {
	private int post_id; //게시글 테이블 고유 넘버(기본키)
	private String title; //제목
	private int writer; //작성자 mm_id(외래키)
	private String category;  //카테고리
	private String regdate;  //작성일
	private int post_contents;  //글 내용 file_id(외래키)
	private int viewCnt;  //조회수
	
	private String id; //writer 로 가져온 회원 id
	
	
	
	
	public int getPost_id() {
		return post_id;
	}
	public void setPost_id(int post_id) {
		this.post_id = post_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getWriter() {
		return writer;
	}
	public void setWriter(int writer) {
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
	public int getPost_contents() {
		return post_contents;
	}
	public void setPost_contents(int post_contents) {
		this.post_contents = post_contents;
	}
	public int getViewCnt() {
		return viewCnt;
	}
	public void setViewCnt(int viewCnt) {
		this.viewCnt = viewCnt;
	}
}
