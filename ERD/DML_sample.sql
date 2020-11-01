/*회원관리-----------------------------------------------------------------------------*/
/*
 * grade : ADMIN : 관리자
 * 		 : MEMBER : 일반 회원
 * */
/*insert sample MEMBER*/
INSERT INTO mm_table(mm_id,id,password,nickname,email,grade)
VALUES (1,'sampleid','sample_pwd1','샘플닉네임','sampleemail@sample.com','MEMBER');

--AI 활용
INSERT INTO mm_table(mm_id,id,password,nickname,email,grade)
VALUES (SEQ_mm_table_mm_id.NEXTVAL,'sampleid23','sample_pwd1','샘플닉네임23','sample23email@sample.com','MEMBER');

--최신 AI 값
SELECT SEQ_mm_table_mm_id.CURRVAL FROM DUAL;

/*확인*/
SELECT * FROM mm_table;


DELETE FROM mm_table;


--시퀀스 테이블 확인
SELECT * FROM USER_SEQUENCES;


/*파일-----------------------------------------------------------------------------*/
/*insert sample file */
/*
 * filekind : POST : html 포스트 문서
 * 			 : IMAGE : 이미지
 * 			 : ELSE : 기타
 * */
INSERT INTO file_table(file_id,filekind,real_filename,filename)
VALUES (1,'POST','?','?');

--AI 활용 DOC 게시글 문서 집어넣기
INSERT INTO file_table(file_id,filekind,real_filename,filename)
VALUES (SEQ_FILE_TABLE_FILE_ID.NEXTVAL,'POST','?','?');

--최신 AI 값
SELECT SEQ_file_table_file_id.CURRVAL FROM DUAL;

/*확인*/
SELECT * FROM file_table;
DELETE FROM file_table;




/*게시글-----------------------------------------------------------------------------*/
/*insert sample post*/
/*
 * category : NOTICE : 공지사항
 * 			: MOVIE : 영화
 * 			: BOOK : 도서
 * 			: SPORTS : 운동
 * 			: GAME : 게임
 * 
 * 문제는!
 * 파일은 무적임.. cascade로 연결되지가 못해.. 반듯반듯반드시 게시글 지울때 찾아가서 지워줘야함..
 * */
--AI 활용
INSERT INTO post_table(post_id,title,writer,category,regdate,post_contents,viewCnt)
VALUES (SEQ_post_table_post_id.NEXTVAL,'샘플 글입니다',회원id(mm_id)를입력하세요,'NOTICE',SYSTIMESTAMP,파일id(file_id)를입력하세요,0);

INSERT INTO post_table(post_id,title,writer,category,regdate,post_contents,viewCnt)
VALUES (SEQ_post_table_post_id.NEXTVAL,'샘플 글입니다',3,'NOTICE',SYSTIMESTAMP,4,0);

--최신 AI 값
SELECT SEQ_post_table_post_id.CURRVAL FROM DUAL;

/*조회수 늘리기*/
UPDATE post_table SET viewCnt=viewCnt+1 WHERE post_id='포스트아이디를 입력해주세요';

/*확인*/
SELECT * FROM post_table;
DELETE FROM file_table;


/*댓글-----------------------------------------------------------------------------*/
/*insert sample comment*/
INSERT INTO comment_table(comment_id,comment_contents,writer,post_id,regdate)
VALUES (1,'샘플댓글입니다샘플댓글입니다샘플댓글이라구샘플댓글입니다샘플댓글입니다',2,3,SYSTIMESTAMP);

--AI 활용
INSERT INTO comment_table(comment_id,comment_contents,writer,post_id,regdate)
VALUES (SEQ_comment_table_comment_id.NEXTVAL,'샘플댓글입니다샘퓨ㅡㄽㅁ니아럼니아험ㄴ이ㅏ',2,3,SYSTIMESTAMP);


--최신 AI 값
SELECT SEQ_comment_table_comment_id.CURRVAL FROM DUAL;

/*확인*/
SELECT * FROM comment_table;
DELETE FROM comment_table;



/*공감-----------------------------------------------------------------------------*/
/*insert sample empathize*/
INSERT INTO empathize_table(post_id,mm_id)
VALUES (post_id를넣어주세요, mm_id를넣어주세요);




/*-----------------------------------메인페이지 관련-----------------------------------*/
/*--공감수 순으로 뷰를 정렬하여,포스트 6개  가져오기--*/
SELECT A.post_id, B.title, B.writer, B.category, B.regdate, B.post_contents
FROM tot_post_view A LEFT OUTER JOIN (--post table과 mm table을 이용한 id 가져오기
										SELECT post_table.post_id AS post_id, post_table.title AS title, mm_table.id AS writer, post_table.category AS category, post_table.regdate AS regdate, post_table.post_contents AS post_contents
										FROM post_table LEFT OUTER JOIN mm_table
										ON post_table.writer = mm_table.mm_id 
					 															) B
ON A.post_id=B.post_id
WHERE rownum <= 6
ORDER BY A.empathize_cnt DESC
;

/*--조회수 순으로 뷰를 정렬하여,포스트 3개  가져오기--*/
SELECT post_table.post_id AS post_id, post_table.title AS title, mm_table.id AS writer, post_table.category AS category, post_table.regdate AS regdate, post_table.post_contents AS post_contents
FROM post_table LEFT OUTER JOIN mm_table
ON post_table.writer = mm_table.mm_id
WHERE rownum <=3
ORDER BY post_table.viewCnt DESC
;				

/*--최신 순으로 포스트 5개 가져오기--*/
SELECT post_table.post_id AS post_id, post_table.title AS title, mm_table.id AS writer, post_table.category AS category, post_table.regdate AS regdate, post_table.post_contents AS post_contents
FROM post_table LEFT OUTER JOIN mm_table
ON post_table.writer = mm_table.mm_id
WHERE rownum <=5
ORDER BY post_table.regdate DESC
;	

/*--최신 순으로, n번째 이후, 다음 포스트 3개 가져오기 매개변수로 regdate 받을것!--*/
SELECT post_table.post_id AS post_id, post_table.title AS title, mm_table.id AS writer, post_table.category AS category, post_table.regdate AS regdate, post_table.post_contents AS post_contents
FROM post_table LEFT OUTER JOIN mm_table
ON post_table.writer = mm_table.mm_id
WHERE post_table.regdate<'2020-11-02 2:00:00' AND rownum <=5
ORDER BY post_table.regdate DESC
;