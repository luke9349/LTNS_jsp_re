package main.java.com.model.board;

import java.sql.Date;

public class BoardListDTO {
	private long postId; // 게시글 고유 번호
	private String title; // 게시글 제목
	private String writer; // 작성자
	private String category; // 카테고리
	private Date regdate; // 작성일
	private int postContent; // 내용 => 파일 테이블 참조 번호
	private int viewcnt; // 조회수
	
}
