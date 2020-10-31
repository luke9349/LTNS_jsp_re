package sungs.temp.지울꺼얌;

public class 수련장소 {

	// query

	// 1. data get => category 별 ... => page에 맞는 data 반환
	// + 검색어가 있다면 검색어에 맞는 데이타 반환

	// 2. 위의 과정에서 file table 에 있는 content 가 필요
	// content 는 text 파일 형태로서 읽어들여 와야함
	// + 검색어가 있다면 검색어에 맞는 데이타 반환

	// 3. 2의 과정이 끝나면 1로 돌아와 반환된 2의 데이타를 통합자료에 셋팅

	// 4. 추천테이블로가 해당 게시글 번호에 대한 추천 갯수 빼오기 count()

	// 5. 4의 과정이 끝나면 1로 돌아와 반환된 4의 데이타를 통합자료에 셋팅

	// 6. 프론엔드에서 search.ajax 로 요청을 보냄
	// 이때 프론엔드에서 실행되는 ajax 는 막아야 됨...
	// 아마도 파라미터에 serch 라는 것이 존재하면 return 하는 식으로 막아야 할 것 같음...
	// 요청을 보내고 반환된 데이터를 js 로 뽑아냄

	// 카테고리 별 데이타 추출
	// 여기서 카테고리는 request에 실려 있겟지 ? 아마도 ... ? 그렇게 해야지 (어떻개?)
	// form 에 히든 값으로 주겟지 ?
	String a = "SELECT * FROM (SELECT ROWNUM AS NO, t.* FROM POST_TABLE t WHERE CATEGORY = ? ORDER BY REGDATE DESC) WHERE NO >= ?(1) AND NO <= ?(10);";
	// 여기서 rs에서 데이타를 뽑아내는 과정에서 id를 넘겨서 file 테이블에 또다 psmt 를 쓸때
	// psmt 를 close 시키고 갓다와야하는데 rs는 살아 있을까 ?

	// 안살아 있다면 id 값만 가진 배열을 또다시 만들어야 하겟지 ?
	// id 값만 담은 배열을 in 함수를 사용해 데이터를 get 하겟지 ?

	// 2번 query
	String b = "SELECT * FROM FILE_TABLE WHERE POST_ID = ?"; // 를 열번 반복하거나
	String b_a = "SELECT * FROM FILE_TABLE WHERE POST_ID IN (?, ?)"; // 이때는 stmt 과 buffer를
	// 사용하여 문자열 조합을 끝내고 가야 겟지 ?

	// 뽑은 데이타로 content 파일에 접근하여 문자열 형태로 변환 시켜 주어야 겟지 ? asdasdasd.java 참조

	// 4번 query (추천 갯수 get)
	String c = "SELECT COUNT(*) FROM EMPATHIZE_TABLE WHERE POST_ID = ?"; // 또는 위와 같이 in 사용
	String c_a = "SELECT COUNT(*) FROM EMPATHIZE_TABLE WHERE POST_ID IN (?, ? ...)";

	///////////////////////////////////////////////////////////////////////////////////
	// 조회수 쿼리
	String viewcnt = "SELECT * FROM (SELECT ROWNUM AS NO, t.* FROM POST_TABLE t ORDER BY REGDATE DESC) WHERE NO >= ?(1) AND NO <= ?(10) ORDER BY VIEWCNT DESC;";
	// 위의 자료를 배열로 만들어 순서를 보장 받을 수 있도록 함
	// 컨텐츠를 따로 또 뺴오고 ㅆㅃ 추천수도 또 따로 뺴와야 하네 ㅆㅃ
	
	////////////////////////////////////////////////////////////////////////////////////
	// 추천수 쿼리
	String hit = "SELECT * FROM (SELECT ROWNUM AS NO, t.* FROM POST_TABLE t ORDER BY REGDATE DESC) WHERE NO >= ?(1) AND NO <= ?(10)";
	// 위의 자료를 배열로 만들어 순서를 보장 받을 수 있도록 함
	// 해당 컨텐츠 와 추천수를 빼와서 셋팅하는 과정에서 set을 사용 하여 추천수대로 정렬 할 수 있도록 하고
	// 그 set을 array로 배꿀수 있나 ?
	// 바꾼다음에 순서가 보장이 되어 있나 ? 
	// 전송
	
	
}
