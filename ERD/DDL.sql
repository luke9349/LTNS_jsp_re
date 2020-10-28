
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
-- ȸ�� ���
CREATE DOMAIN _GRADE VARCHAR2(32)
	CONSTRAINT valid-grade CHECK (VALUE IN ('admin','member'));


-- �Խ��� ī�װ�
CREATE DOMAIN _CATEGORY VARCHAR2(32)
	CONSTRAINT valid-category CHECK (VALUE IN ('notice','movie','book','sports','game'));


-- ���� �з�
CREATE DOMAIN _FILEKIND VARCHAR2(32)
	CONSTRAINT valid-filekind CHECK (VALUE IN ('file','image','postcontents'));




/* Create Tables */

-- ���
CREATE TABLE comment_table
(
	-- ��� ������ȣ
	comment_id number NOT NULL,
	-- ����
	comment_contents varchar2(1024) NOT NULL,
	-- �ۼ���
	writer number NOT NULL,
	-- �Խñ� ������ȣ
	post_id number NOT NULL,
	-- �ۼ���
	regdate timestamp NOT NULL,
	PRIMARY KEY (comment_id)
);


-- ���� ���̺�
CREATE TABLE empathize_table
(
	-- �Խñ� ������ȣ
	post_id number NOT NULL,
	-- ȸ��������ȣ
	mm_id number NOT NULL,
	CONSTRAINT empath UNIQUE (post_id, mm_id)
);


-- ���� ���̺�
CREATE TABLE file_table
(
	-- ���� ������ȣ
	file_id number NOT NULL,
	-- �Խñ� ������ȣ
	post_id number NOT NULL,
	-- �з� : _FILEKIND �������� ���
	filekind _FILEKIND NOT NULL,
	-- �������ϸ�
	real_filename varchar2(256) NOT NULL,
	-- ���ε� ���ϸ�
	filename varchar2(256) NOT NULL,
	PRIMARY KEY (file_id)
);


-- ȸ��
CREATE TABLE mm_table
(
	-- ȸ��������ȣ
	mm_id number NOT NULL UNIQUE,
	-- ȸ��id : ���� ��ҹ��� ���� ����
	id varchar2(20) NOT NULL UNIQUE,
	-- ��й�ȣ : Ư������ ���� ���� 8~25
	password varchar2(50) NOT NULL,
	-- �г���
	nickname varchar2(20) NOT NULL UNIQUE,
	-- �̸��� : �̸��� ���� @ �˻�
	email varchar2(100) NOT NULL UNIQUE,
	-- ��� : ������ grade ���
	grade  _GRADE NOT NULL,
	PRIMARY KEY (mm_id)
);


-- �Խñ�
CREATE TABLE post_table
(
	-- �Խñ� ������ȣ
	post_id number NOT NULL,
	-- ����
	title varchar2(100) NOT NULL,
	-- �ۼ��� : member ���̺��� mem_id �ܷ�Ű
	writer number NOT NULL,
	-- ī�װ� : _CATEGORY  �������� ����
	category _CATEGORY NOT NULL,
	-- �ۼ���
	regdate timestamp NOT NULL,
	-- ��ȸ��
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

COMMENT ON TABLE comment_table IS '���';
COMMENT ON COLUMN comment_table.comment_id IS '��� ������ȣ';
COMMENT ON COLUMN comment_table.comment_contents IS '����';
COMMENT ON COLUMN comment_table.writer IS '�ۼ���';
COMMENT ON COLUMN comment_table.post_id IS '�Խñ� ������ȣ';
COMMENT ON COLUMN comment_table.regdate IS '�ۼ���';
COMMENT ON TABLE empathize_table IS '���� ���̺�';
COMMENT ON COLUMN empathize_table.post_id IS '�Խñ� ������ȣ';
COMMENT ON COLUMN empathize_table.mm_id IS 'ȸ��������ȣ';
COMMENT ON TABLE file_table IS '���� ���̺�';
COMMENT ON COLUMN file_table.file_id IS '���� ������ȣ';
COMMENT ON COLUMN file_table.post_id IS '�Խñ� ������ȣ';
COMMENT ON COLUMN file_table.filekind IS '�з� : _FILEKIND �������� ���';
COMMENT ON COLUMN file_table.real_filename IS '�������ϸ�';
COMMENT ON COLUMN file_table.filename IS '���ε� ���ϸ�';
COMMENT ON TABLE mm_table IS 'ȸ��';
COMMENT ON COLUMN mm_table.mm_id IS 'ȸ��������ȣ';
COMMENT ON COLUMN mm_table.id IS 'ȸ��id : ���� ��ҹ��� ���� ����';
COMMENT ON COLUMN mm_table.password IS '��й�ȣ : Ư������ ���� ���� 8~25';
COMMENT ON COLUMN mm_table.nickname IS '�г���';
COMMENT ON COLUMN mm_table.email IS '�̸��� : �̸��� ���� @ �˻�';
COMMENT ON COLUMN mm_table.grade IS '��� : ������ grade ���';
COMMENT ON TABLE post_table IS '�Խñ�';
COMMENT ON COLUMN post_table.post_id IS '�Խñ� ������ȣ';
COMMENT ON COLUMN post_table.title IS '����';
COMMENT ON COLUMN post_table.writer IS '�ۼ��� : member ���̺��� mem_id �ܷ�Ű';
COMMENT ON COLUMN post_table.category IS 'ī�װ� : _CATEGORY  �������� ����';
COMMENT ON COLUMN post_table.regdate IS '�ۼ���';
COMMENT ON COLUMN post_table.viewCnt IS '��ȸ��';




/* Create Views*/

--�� �Խñ�
CREATE VIEW tot_post_view (post_id,regdate,empathize_cnt,view_cnt,category)
AS SELECT P.post_id, P.regdate, E.empathCnt, P.viewCnt, P.category
FROM post_table P LEFT OUTER JOIN (
									SELECT post_id, COUNT(*) AS empathCnt
									FROM empathize_table
									GROUP BY post_id
									) E 
ON P.post_id=E.post_id 
;