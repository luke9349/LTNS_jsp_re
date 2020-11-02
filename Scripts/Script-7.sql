INSERT INTO file_table(file_id,filekind,real_filename,filename)
VALUES (1,'POST','?','?');

--AI 활용 DOC 게시글 문서 집어넣기
INSERT INTO file_table(file_id,filekind,real_filename,filename)
VALUES (SEQ_FILE_TABLE_FILE_ID.NEXTVAL,'POST','?','?');

--최신 AI 값
SELECT SEQ_file_table_file_id.CURRVAL FROM DUAL;

/*확인*/
SELECT * FROM file_table;


INSERT INTO file_table(file_id,filekind,real_filename,filename) VALUES
(SEQ_FILE_TABLE_FILE_ID.NEXTVAL,'test','sdfasdf','tsets');

SELECT SEQ_file_table_file_id.CURRVAL FROM DUAL;






SELECT * FROM FILE_TABLE ft ;

SELECT SEQ_file_table_file_id.CURRVAL FROM DUAL;


INSERT INTO post_table
(post_id,title,writer,category,regdate,post_contents,viewCnt) 
VALUES
(SEQ_post_table_post_id.NEXTVAL,'sadasd',2,'asdasd',SYSDATE,254, 02);


INSERT INTO post_table(post_id,title,writer,category,regdate,post_contents,viewCnt)
VALUES (SEQ_post_table_post_id.NEXTVAL,'샘플 글입니다',2,'NOTICE',SYSTIMESTAMP,SEQ_file_table_file_id.CURRVAL,0);


SELECT * FROM FILE_TABLE ft  ;

SELECT SEQ_post_table_post_id.CURRVAL FROM DUAL;


INSERT INTO post_table(post_id,title,writer,category,regdate,post_contents,viewCnt)
VALUES (SEQ_post_table_post_id.NEXTVAL,'샘플 글입니다',2,'NOTICE',SYSTIMESTAMP,SEQ_file_table_file_id.CURRVAL,0);



INSERT INTO file_table(file_id,filekind,real_filename,filename) VALUES
 (SEQ_FILE_TABLE_FILE_ID.NEXTVAL,'st','st','st');

SELECT * FROM FILE_TABLE ft ;



INSERT INTO file_table(file_id,filekind,real_filename,filename) VALUES
 (SEQ_FILE_TABLE_FILE_ID.NEXTVAL,'st','st','st');

SELECT SEQ_file_table_file_id.CURRVAL FROM DUAL;


INSERT INTO post_table
(post_id,title,writer,category,regdate,post_contents,viewCnt) 
VALUES
(SEQ_post_table_post_id.NEXTVAL,'qweqw',2,'qweqwe',SYSTIMESTAMP,SEQ_file_table_file_id.CURRVAL,0);

SELECT * FROM POST_TABLE pt ;

