package main.java.com.model;

import java.io.File;


public class Post_Contents {
	private String title;
	private String contentsText;
	private Post_picture thumbnail;
	
	Post_Contents(){
	}
	
	Post_Contents(String filePath){
		File file=new File(filePath);
		
	}
	
	public String getContentsText() {
		return contentsText;
	}
	public void setContentsText(String contentsText) {
		this.contentsText = contentsText;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Post_picture getThumbnail() {
		return thumbnail;
	}
	//썸네일 변경
	public void setThumbnail(Post_picture thumbnail) {
		this.thumbnail = thumbnail;
	}
	

	static class Maker{
		static public Post_Contents makePost_Contents() {
			Post_Contents post_contents= new Post_Contents();
			return post_contents;
		}
	}
	
	
}
