
/* Drop Triggers */

DROP TRIGGER TRI_book_board_post_id;
DROP TRIGGER TRI_commenttable_comment_id;
DROP TRIGGER TRI_comment_comment_id;
DROP TRIGGER TRI_comment_table_comment_id;
DROP TRIGGER TRI_filetable_file_id;
DROP TRIGGER TRI_file_file_id;
DROP TRIGGER TRI_file_table_file_id;
DROP TRIGGER TRI_game_board_post_id;
DROP TRIGGER TRI_membermanagement_mm_id;
DROP TRIGGER TRI_member_mem_id;
DROP TRIGGER TRI_mmtable_mm_id;
DROP TRIGGER TRI_mm_table_mm_id;
DROP TRIGGER TRI_movie_board_post_id;
DROP TRIGGER TRI_notice_board_post_id;
DROP TRIGGER TRI_posttable_post_id;
DROP TRIGGER TRI_post_post_id;
DROP TRIGGER TRI_post_table_post_id;
DROP TRIGGER TRI_sports_board_post_id;



/* Drop Tables */

DROP TABLE comment_table CASCADE CONSTRAINTS;
DROP TABLE empathize_table CASCADE CONSTRAINTS;
DROP TABLE file_table CASCADE CONSTRAINTS;
DROP TABLE post_table CASCADE CONSTRAINTS;
DROP TABLE mm_table CASCADE CONSTRAINTS;



/* Drop Sequences */

DROP SEQUENCE SEQ_book_board_post_id;
DROP SEQUENCE SEQ_commenttable_comment_id;
DROP SEQUENCE SEQ_comment_comment_id;
DROP SEQUENCE SEQ_comment_table_comment_id;
DROP SEQUENCE SEQ_filetable_file_id;
DROP SEQUENCE SEQ_file_file_id;
DROP SEQUENCE SEQ_file_table_file_id;
DROP SEQUENCE SEQ_game_board_post_id;
DROP SEQUENCE SEQ_membermanagement_mm_id;
DROP SEQUENCE SEQ_member_mem_id;
DROP SEQUENCE SEQ_mmtable_mm_id;
DROP SEQUENCE SEQ_mm_table_mm_id;
DROP SEQUENCE SEQ_movie_board_post_id;
DROP SEQUENCE SEQ_notice_board_post_id;
DROP SEQUENCE SEQ_posttable_post_id;
DROP SEQUENCE SEQ_post_post_id;
DROP SEQUENCE SEQ_post_table_post_id;
DROP SEQUENCE SEQ_sports_board_post_id;




/* Create Sequences */

CREATE SEQUENCE SEQ_book_board_post_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_commenttable_comment_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_comment_comment_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_comment_table_comment_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_filetable_file_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_file_file_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_file_table_file_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_game_board_post_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_membermanagement_mm_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_member_mem_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_mmtable_mm_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_mm_table_mm_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_movie_board_post_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_notice_board_post_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_posttable_post_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_post_post_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_post_table_post_id INCREMENT BY 1 START WITH 1;
CREATE SEQUENCE SEQ_sports_board_post_id INCREMENT BY 1 START WITH 1;




/* Create Domains */
-- 회원 등급
CREATE DOMAIN _GRADE VARCHAR2(32)
	CONSTRAINT valid-grade CHECK (VALUE IN ('admin','member'));


-- 게시판 카테고리
CREATE DOMAIN _CATEGORY VARCHAR2(32)
	CONSTRAINT valid-category CHECK (VALUE IN ('notice','movie','book','sports','game'));


-- 파일 분류
CREATE DOMAIN _FILEKIND VARCHAR2(32)
	CONSTRAINT valid-filekind CHECK (VALUE IN ('file','image','postcontents'));




/* Create Tables */

-- 댓글
CREATE TABLE comment_table
(
	-- 댓글 고유번호
	comment_id number NOT NULL,
	-- 내용
	comment_contents varchar2(1024) NOT NULL,
	-- 작성자
	writer number NOT NULL,
	-- 게시글 고유번호
	post_id number NOT NULL,
	-- 작성일
	regdate timestamp NOT NULL,
	PRIMARY KEY (comment_id)
);


-- 공감 테이블
CREATE TABLE empathize_table
(
	-- 게시글 고유번호
	post_id number NOT NULL,
	-- 회원고유번호
	mm_id number NOT NULL,
	CONSTRAINT empath UNIQUE (post_id, mm_id)
);


-- 파일 테이블
CREATE TABLE file_table
(
	-- 파일 고유번호
	file_id number NOT NULL,
	-- 게시글 고유번호
	post_id number NOT NULL,
	-- 분류 : _FILEKIND 도메인을 사용
	filekind _FILEKIND NOT NULL,
	-- 실제파일명
	real_filename varchar2(256) NOT NULL,
	-- 업로드 파일명
	filename varchar2(256) NOT NULL,
	PRIMARY KEY (file_id)
);


-- 회원
CREATE TABLE mm_table
(
	-- 회원고유번호
	mm_id number NOT NULL UNIQUE,
	-- 회원id : 영문 대소문자 숫자 조합
	id varchar2(20) NOT NULL UNIQUE,
	-- 비밀번호 : 특수문자 영문 숫자 8~25
	password varchar2(50) NOT NULL,
	-- 닉네임
	nickname varchar2(20) NOT NULL UNIQUE,
	-- 이메일 : 이메일 형식 @ 검사
	email varchar2(100) NOT NULL UNIQUE,
	-- 등급 : 도메인 grade 사용
	grade  _GRADE NOT NULL,
	PRIMARY KEY (mm_id)
);


-- 게시글
CREATE TABLE post_table
(
	-- 게시글 고유번호
	post_id number NOT NULL,
	-- 제목
	title varchar2(100) NOT NULL,
	-- 작성자 : member 테이블의 mem_id 외래키
	writer number NOT NULL,
	-- 카테고리 : _CATEGORY  도메인을 따름
	category _CATEGORY NOT NULL,
	-- 작성일
	regdate timestamp NOT NULL,
	-- 조회수
	viewCnt number DEFAULT 0 NOT NULL,
	PRIMARY KEY (post_id)
);



/* Create Foreign Keys */

ALTER TABLE comment_table
	ADD FOREIGN KEY (writer)
	REFERENCES mm_table (mm_id)
		ON DELETE CASCADE
;


ALTER TABLE empathize_table
	ADD FOREIGN KEY (mm_id)
	REFERENCES mm_table (mm_id)
		ON DELETE CASCADE
;


ALTER TABLE post_table
	ADD FOREIGN KEY (writer)
	REFERENCES mm_table (mm_id)
		ON DELETE CASCADE
;


ALTER TABLE comment_table
	ADD FOREIGN KEY (post_id)
	REFERENCES post_table (post_id)
		ON DELETE CASCADE
;


ALTER TABLE empathize_table
	ADD FOREIGN KEY (post_id)
	REFERENCES post_table (post_id)
		ON DELETE CASCADE
;


ALTER TABLE file_table
	ADD FOREIGN KEY (post_id)
	REFERENCES post_table (post_id)
		ON DELETE CASCADE
;



/* Create Triggers */

CREATE OR REPLACE TRIGGER TRI_book_board_post_id BEFORE INSERT ON book_board
FOR EACH ROW
BEGIN
	SELECT SEQ_book_board_post_id.nextval
	INTO :new.post_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_commenttable_comment_id BEFORE INSERT ON commenttable
FOR EACH ROW
BEGIN
	SELECT SEQ_commenttable_comment_id.nextval
	INTO :new.comment_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_comment_comment_id BEFORE INSERT ON comment
FOR EACH ROW
BEGIN
	SELECT SEQ_comment_comment_id.nextval
	INTO :new.comment_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_comment_table_comment_id BEFORE INSERT ON comment_table
FOR EACH ROW
BEGIN
	SELECT SEQ_comment_table_comment_id.nextval
	INTO :new.comment_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_filetable_file_id BEFORE INSERT ON filetable
FOR EACH ROW
BEGIN
	SELECT SEQ_filetable_file_id.nextval
	INTO :new.file_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_file_file_id BEFORE INSERT ON file
FOR EACH ROW
BEGIN
	SELECT SEQ_file_file_id.nextval
	INTO :new.file_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_file_table_file_id BEFORE INSERT ON file_table
FOR EACH ROW
BEGIN
	SELECT SEQ_file_table_file_id.nextval
	INTO :new.file_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_game_board_post_id BEFORE INSERT ON game_board
FOR EACH ROW
BEGIN
	SELECT SEQ_game_board_post_id.nextval
	INTO :new.post_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_membermanagement_mm_id BEFORE INSERT ON membermanagement
FOR EACH ROW
BEGIN
	SELECT SEQ_membermanagement_mm_id.nextval
	INTO :new.mm_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_member_mem_id BEFORE INSERT ON member
FOR EACH ROW
BEGIN
	SELECT SEQ_member_mem_id.nextval
	INTO :new.mem_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_mmtable_mm_id BEFORE INSERT ON mmtable
FOR EACH ROW
BEGIN
	SELECT SEQ_mmtable_mm_id.nextval
	INTO :new.mm_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_mm_table_mm_id BEFORE INSERT ON mm_table
FOR EACH ROW
BEGIN
	SELECT SEQ_mm_table_mm_id.nextval
	INTO :new.mm_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_movie_board_post_id BEFORE INSERT ON movie_board
FOR EACH ROW
BEGIN
	SELECT SEQ_movie_board_post_id.nextval
	INTO :new.post_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_notice_board_post_id BEFORE INSERT ON notice_board
FOR EACH ROW
BEGIN
	SELECT SEQ_notice_board_post_id.nextval
	INTO :new.post_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_posttable_post_id BEFORE INSERT ON posttable
FOR EACH ROW
BEGIN
	SELECT SEQ_posttable_post_id.nextval
	INTO :new.post_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_post_post_id BEFORE INSERT ON post
FOR EACH ROW
BEGIN
	SELECT SEQ_post_post_id.nextval
	INTO :new.post_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_post_table_post_id BEFORE INSERT ON post_table
FOR EACH ROW
BEGIN
	SELECT SEQ_post_table_post_id.nextval
	INTO :new.post_id
	FROM dual;
END;

/

CREATE OR REPLACE TRIGGER TRI_sports_board_post_id BEFORE INSERT ON sports_board
FOR EACH ROW
BEGIN
	SELECT SEQ_sports_board_post_id.nextval
	INTO :new.post_id
	FROM dual;
END;

/




/* Comments */

COMMENT ON TABLE comment_table IS '댓글';
COMMENT ON COLUMN comment_table.comment_id IS '댓글 고유번호';
COMMENT ON COLUMN comment_table.comment_contents IS '내용';
COMMENT ON COLUMN comment_table.writer IS '작성자';
COMMENT ON COLUMN comment_table.post_id IS '게시글 고유번호';
COMMENT ON COLUMN comment_table.regdate IS '작성일';
COMMENT ON TABLE empathize_table IS '공감 테이블';
COMMENT ON COLUMN empathize_table.post_id IS '게시글 고유번호';
COMMENT ON COLUMN empathize_table.mm_id IS '회원고유번호';
COMMENT ON TABLE file_table IS '파일 테이블';
COMMENT ON COLUMN file_table.file_id IS '파일 고유번호';
COMMENT ON COLUMN file_table.post_id IS '게시글 고유번호';
COMMENT ON COLUMN file_table.filekind IS '분류 : _FILEKIND 도메인을 사용';
COMMENT ON COLUMN file_table.real_filename IS '실제파일명';
COMMENT ON COLUMN file_table.filename IS '업로드 파일명';
COMMENT ON TABLE mm_table IS '회원';
COMMENT ON COLUMN mm_table.mm_id IS '회원고유번호';
COMMENT ON COLUMN mm_table.id IS '회원id : 영문 대소문자 숫자 조합';
COMMENT ON COLUMN mm_table.password IS '비밀번호 : 특수문자 영문 숫자 8~25';
COMMENT ON COLUMN mm_table.nickname IS '닉네임';
COMMENT ON COLUMN mm_table.email IS '이메일 : 이메일 형식 @ 검사';
COMMENT ON COLUMN mm_table.grade IS '등급 : 도메인 grade 사용';
COMMENT ON TABLE post_table IS '게시글';
COMMENT ON COLUMN post_table.post_id IS '게시글 고유번호';
COMMENT ON COLUMN post_table.title IS '제목';
COMMENT ON COLUMN post_table.writer IS '작성자 : member 테이블의 mem_id 외래키';
COMMENT ON COLUMN post_table.category IS '카테고리 : _CATEGORY  도메인을 따름';
COMMENT ON COLUMN post_table.regdate IS '작성일';
COMMENT ON COLUMN post_table.viewCnt IS '조회수';




/* Create Views*/

--총 게시글
CREATE VIEW tot_post_view (post_id,regdate,empathize_cnt,view_cnt,category)
AS SELECT P.post_id, P.regdate, E.empathCnt, P.viewCnt, P.category
FROM post_table P LEFT OUTER JOIN (
									SELECT post_id, COUNT(*) AS empathCnt
									FROM empathize_table
									GROUP BY post_id
									) E 
ON P.post_id=E.post_id 
;