package main.java.com.post.beans;


public class WriteDTO {

	//회원
		public int mm_id ;	//회원아이디
		public String nickname ;	//회원 닉네임 
		
		// 게시글 
		public int post_id ; // 게시글 고유번호 
		public String title ; //제목 
		public String category ; // 카테고리 
		
		public  String regdate ; // 날짜 
		public int viewCnt_contents ; // 조회수 
		
		
		public WriteDTO() {
			// TODO Auto-generated constructor stub
		}
		
		
		
		
		public WriteDTO(int mm_id, String nickname, int post_id, String title, String category, int viewCnt_contents) {
			super();
			this.mm_id = mm_id;
			this.nickname = nickname;
			this.post_id = post_id;
			this.title = title;
			this.category = category;
			this.viewCnt_contents = viewCnt_contents;
		}




		public int getMm_id() {
			return mm_id;
		}
		public void setMm_id(int mm_id) {
			this.mm_id = mm_id;
		}
		public String getNickname() {
			return nickname;
		}
		public void setNickname(String nickname) {
			this.nickname = nickname;
		}
		public int getPost_id() {
			return post_id;
		}
		public void setPost_id(int post_id) {
			this.post_id = post_id;
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
		public int getViewCnt_contents() {
			return viewCnt_contents;
		}
		public void setViewCnt_contents(int viewCnt_contents) {
			this.viewCnt_contents = viewCnt_contents;
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
			return String.format("WriteDTO [mm_id=" + mm_id + ", nickname=" + nickname + ", post_id=" + post_id + ", title=" + title
					+ ", category=" + category + ", regdate=" + regdate + ", viewCnt_contents=" + viewCnt_contents
					+ "]");
		}
		
		
		
		
		
		
		
	
}
