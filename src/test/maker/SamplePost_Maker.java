package test.maker;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import main.java.com.model.DTO;
import main.java.com.model.mainpage.File_DTO;
import main.java.com.model.mainpage.Post_DTO;
import main.java.com.model.membermanage.MM_DTO;

public class SamplePost_Maker {

	String mkRandomString() {
		String result="";
		int whilelimit=(int)(Math.random()*8)+4;
		
		for(int i=0;i<whilelimit;i++) {
			char[] asciiiii= {'a','A'};
			//1: 아스키코드 이용 a~z
			//2: 0~9
			char randomchar=asciiiii[(int)(Math.random()*2)];
			if(randomchar>61)
				randomchar+=(int)(Math.random()*26);
			else
				randomchar+=(int)(Math.random()*10);
			result+=randomchar;
		}
		System.out.println(result);
		return result;
	}
	
	String returnImgTag() {
		String[] imgTagArr= {"","",""};
		return imgTagArr[(int)(Math.random()*3)];
	}
	
	String mkStringOrTagOrImg(int i) {
		String result;
		switch(i) {
		case 1:
			result="&lt";
			break;
		case 2:
			result=returnImgTag();
			break;
		case 3:
			result="&nbsp";
			break;
		case 4:
			result="<"+mkRandomString()+">"+mkRandomString()+"</"+mkRandomString()+">";
			break;
		case 5:
			result="&gt";
			break;
		default:
			result=mkRandomString();
			break;
		}
		
		return result;
	}
	
	String mkLongString() {
		String longlongstr="";
		for(int i=0;i<(int)(Math.random()*100);i++) {
			longlongstr+=mkStringOrTagOrImg((int)(Math.random()*7));
		}
		return longlongstr;
	}
	
	//1. 물리 파일 생성
	DTO mkRealFile() {
		String filePath="";
		String title=mkRandomString();
		String content=mkLongString();
		
		Date d = new Date();
		SimpleDateFormat sm = new SimpleDateFormat("yyyyMMddHHmmss");

		String fName = sm.format(d) + "_sample.txt";
		PrintWriter pw=null;
		//
		String saveDirectory ="WebContent/data";
		File file = new File(saveDirectory);
		try {
			if (!file.exists()) { // 디렉토리가 없으면 만들어줌
				file.mkdirs();
			}
			filePath = saveDirectory + File.separator + fName; // 파일경로

			// 내용저장객체 생성
			pw = new PrintWriter(filePath);
			pw.println("title" + title);
			pw.println(content);
			System.out.println(filePath);
			System.out.println("저장성공!\nfilePath : "+file.getAbsolutePath());
		} catch (Exception e) {
			
			System.out.println("저장 실패 : 파일에 데이터를 쓸 수 없습니다.");
		} finally {
			try {
				pw.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return new File_DTO(0, "POST", title, file.getAbsolutePath());
	}
	
	//2. 파일 테이블 삽입
	int insertFileToDB(DTO dto) {
		int file_id=0;
		try {
			file_id=new File_DAO_tester().insertBySQL_withDTO(File_DAO_tester.INSERT_NEW_FILE, dto);
		} catch (SQLException e) {
			System.out.println("파일 테이블에 집어넣지 못함!");
			e.printStackTrace();
		}
		if(file_id==0)
			System.out.println("뭔가 잘못됐어..!!");
		
		return file_id;
	}
	
	//3. 포스트 테이블 삽입
	void insertPostToDB(DTO[] dtos) throws SQLException {
		new Post_DAO_tester().insertBySQL_withDTO(Post_DAO_tester.INSERT_NEW_POST, dtos);
	}

	public void mkPosts(int memCnt) {
		SamplePost_Maker spm=new SamplePost_Maker();
		ArrayList<DTO> dtoList=new ArrayList<DTO>();
		//만들 샘플 포스트 갯수
		
		
		try {
			for(int i=0;i<memCnt;i++) {
				DTO dto=spm.mkRealFile();
	
				Thread.sleep(10); //파일 생성 기다려주기
				
				int file_id=spm.insertFileToDB(dto);
				
				Thread.sleep(10); //DB 기다려주기
				
				//회원 dto array를 이용해서 mm_id를 랜덤하게 뿌려줌 dtoarr[(int)(Math.random()*(dtoarr.length))]
				DTO[] mmarr=new MM_DAO_tester().selectBySQL(MM_DAO_tester.SELECT_ALL_MM_ID);
				String[] categoryArr= {"NOTICE","MOVIE","BOOK","SPORTS","GAME"};
				
				dto=new Post_DTO("몰랑파일열어서확인해랑이건샘플이당", ((MM_DTO)mmarr[(int)(Math.random()*(mmarr.length))]).getMm_id(), categoryArr[(int)(Math.random()*5)], file_id);
				dtoList.add(dto);
				
				Thread.sleep(10); //DB 기다려주기
				System.out.println("post"+(i+1)+"번째 생성 완료!");
				Thread.sleep(50); //1초 채우기 해야돼???????????...현주놔........초다뉘라뉘..
			}
			DTO[] dtoArr=new Post_DTO[memCnt];
			dtoList.toArray(dtoArr);
			spm.insertPostToDB(dtoArr);

		} catch (InterruptedException e) {
			System.out.println("쓰레드 문제");
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("sql 문제");			
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {

		new SamplePost_Maker().mkStringOrTagOrImg(100);
		
	}

}
