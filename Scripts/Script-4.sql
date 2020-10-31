INSERT INTO POST_TABLE
(post_id, title, writer, category, regdate, post_contents, viewCnt) 
VALUES
(SEQ_post_table_post_id.nextval, 'test', 1, 'tessss', sysdate,0,0)

SELECT * FROM POST_TABLE pt;