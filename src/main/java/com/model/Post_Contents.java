package main.java.com.model;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;


public class Post_Contents {
	private String title;
	private String contentsText;
	private String thumbnailPath;
	
	private String contents;
	Post_Contents(){
	}
	
	Post_Contents(String filePath){
		File file=new File(filePath);
		StringBuffer _contentsText = null;
		try {
			BufferedReader br=new BufferedReader(new InputStreamReader(new FileInputStream(file)));
			_contentsText=new StringBuffer();
			
			//제목
			int title_index=0;
			int thumbnail_index=0;
			while(br.read()!=-1) {
				String beforeStr=br.readLine();
				String afterStr=null;
				if(title_index==0) {
					title=beforeStr.replaceAll("title","");
					title_index++;
					continue;
				}//end title if
				if(thumbnail_index==0) {
					if(beforeStr.contains("<img")) {
						thumbnailPath=beforeStr.substring(beforeStr.indexOf("src="));
					}
				}
				afterStr=beforeStr.replaceAll("<br.*>", "\n").replaceAll("<.*>", "").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&nbsp;"," ");
				_contentsText.append(afterStr);
			}//end while
			br.close();
		}catch(FileNotFoundException e) {
			e.printStackTrace();
		}catch (IOException e) {
			e.printStackTrace();
		}
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
	public String getThumbnailPath() {
		return thumbnailPath;
	}
	public void setThumbnailPath(String thumbnailPath) {
		this.thumbnailPath = thumbnailPath;
	}
	
	
}
