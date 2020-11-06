package main.java.com.model;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.nio.file.Paths;



public class Post_Contents {
	private String title; //글 제목
	private String contentsText; //글 내용 text만
	private String thumbnailPath; //글 사진주소
	
	
	public Post_Contents(String filePath){
		
		File file=new File(filePath);
		System.out.println(file.getAbsolutePath());
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
						thumbnailPath=beforeStr.substring(beforeStr.indexOf("src=")+5);//첫번째 이미지 경로
						System.out.println("썸네일:"+thumbnailPath);//맞을까..
						br.readLine();
						br.readLine();
						br.readLine();
						thumbnail_index++;
					}
				}
				//replaceAll("<img.*","").replaceAll("\" title=.*\">","") 이미지 태그 제거용
				afterStr=beforeStr.replaceAll("<img.*","").replaceAll(" title=.*\"clear:both;\">","").replaceAll("<br.*>", " ").replaceAll("<[^>]*>", "").replaceAll("&nbsp;"," ");
				_contentsText.append(afterStr);
			}//end while
			br.close();
		}catch(FileNotFoundException e) {
			e.printStackTrace();
		}catch (IOException e) {
			e.printStackTrace();
		}finally {
			contentsText=_contentsText.toString();
			System.out.println(contentsText);
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
