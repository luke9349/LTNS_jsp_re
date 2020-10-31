package main.java.com.post.beans;


public class WriteDTO {

/*		//회원
		public int mm_id ;	//회원아이디
		public String nickname ;	//회원 닉네임 
	*/
	
		// 게시글 
		public int post_id ; // 게시글 고유번호 
		public String title ; //제목 
		public String writer;
		public String category ; // 카테고리 
		public String regdate ; // 날짜
		public String post_contents;
		public int viewCnt ; // 조회수 
		
	
		
		
		
		
		
		public WriteDTO() {
		}
		
		
		public WriteDTO(int post_id, String title, String writer, String category, String post_contents,
				int viewCnt) {
			super();
			this.post_id = post_id;
			this.title = title;
			this.writer = writer;
			this.category = category;
			this.post_contents = post_contents;
			this.viewCnt = viewCnt;
		}
		




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


		public String getPost_contents() {
			return post_contents;
		}


		public void setPost_contents(String post_contents) {
			this.post_contents = post_contents;
		}


		public int getViewCnt() {
			return viewCnt;
		}


		public void setViewCnt(int viewCnt) {
			this.viewCnt = viewCnt;
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
			return "WriteDTO [post_id=" + post_id + ", title=" + title + ", writer=" + writer + ", category=" + category
					+ ", regdate=" + regdate + ", post_contents=" + post_contents + ", viewCnt=" + viewCnt + "]";
		}




	




		
		
		
		
		
		
		
	
}
