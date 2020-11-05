package test.maker;

import java.util.ArrayList;
import java.util.HashSet;

import main.java.com.model.membermanage.MM_DAO;

public class SampleMember_Maker {
	
	//id를 만들어준다
	String idmaker() {
		String result="";
		int whilelimit=(int)(Math.random()*8)+4;
		
		for(int i=0;i<whilelimit;i++) {
			char[] asciiiii= {'a','0'};
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
	
	//원하는 갯수만큼 중복되지 않게 아이디를 만들어준다
	HashSet<String> idsMaker(int i){
		HashSet<String> idSet=new HashSet<String>();
		while(idSet.size()<i) {
			idSet.add(idmaker());
		}
		return idSet;
	}
	
	HashSet<String> emailsMaker(int i){
		HashSet<String> emailSet=new HashSet<String>();
		String [] emaildotcom= {"@gmail.com","@naver.com","@daum.com"};
		while(emailSet.size()<i) {
			emailSet.add(idmaker()+emaildotcom[(int)(Math.random()*3)]);
			System.out.println(idmaker()+emaildotcom[(int)(Math.random()*3)]);
		}
		return emailSet;
	}
	
	String[] passwordMaker(int i) {
		String[] passwordArr=new String[i];
		for(int j=0;j<i;j++) {
			passwordArr[j]=idmaker();
		}
		
		return passwordArr;
	}
	
	public static void main(String[] args) {
		HashSet<String> idSet;
		HashSet<String> nicknameSet;
		HashSet<String> emailSet;
		String[] passwordArr;
		
		//만들 샘플 멤버 갯수
		int memCnt=100;

		SampleMember_Maker m = new SampleMember_Maker();
		
		idSet=m.idsMaker(memCnt);
		nicknameSet=m.idsMaker(memCnt);
		emailSet=m.emailsMaker(memCnt);
		passwordArr=m.passwordMaker(memCnt);
		
		String[] idArr=new String[memCnt];
		new ArrayList<String>(idSet).toArray(idArr);
		
		String[] nicknameArr=new String[memCnt];
		new ArrayList<String>(nicknameSet).toArray(nicknameArr);
		
		String[] emailArr=new String[memCnt];
		new ArrayList<String>(emailSet).toArray(emailArr);
		
		for(int i=0;i<memCnt;i++) {
			//dao로 샘플멤버 집어넣기 해야함!
			new MM_DAO().insertBySQL_withDTO(sql, dto)
		}
		
	}
}
