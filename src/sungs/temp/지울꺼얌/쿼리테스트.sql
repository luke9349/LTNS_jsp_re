-- category list
SELECT * FROM
(SELECT ROWNUM AS NO, t.* FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2
WHERE t1.POST_ID = t2.POST_ID(+))
WHERE CATEGORY = 'movie'
ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC)t)
WHERE NO >= 1 AND NO <= 10;

-- 조회수
SELECT * FROM
(SELECT ROWNUM AS NO, t.* FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2
WHERE t1.POST_ID = t2.POST_ID(+))
ORDER BY VIEWCNT DESC, REGDATE DESC, EMPATHIZE_CNT DESC, POST_ID DESC)t)
WHERE NO >= 1 AND NO <= 10;

-- 공감수
SELECT * FROM
(SELECT ROWNUM AS NO, t.* FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2
WHERE t1.POST_ID = t2.POST_ID(+))
ORDER BY EMPATHIZE_CNT DESC, REGDATE DESC, VIEWCNT DESC, POST_ID DESC)t)
WHERE NO >= 1 AND NO <= 10;

-- category search list
SELECT * FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2
WHERE t1.POST_ID = t2.POST_ID(+))
WHERE CATEGORY = 'movie'
ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC);

-- 조회수 검색
SELECT * FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2
WHERE t1.POST_ID = t2.POST_ID(+))
ORDER BY VIEWCNT DESC, REGDATE DESC, EMPATHIZE_CNT DESC, POST_ID DESC);

-- 공감수 검색
SELECT * FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2
WHERE t1.POST_ID = t2.POST_ID(+))
ORDER BY EMPATHIZE_CNT DESC, REGDATE DESC, VIEWCNT DESC, POST_ID DESC);



----------------------------------------------------------------------------------------------

-- category list
SELECT * FROM
(SELECT ROWNUM AS NO, t.* FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT * FROM TOT_POST_VIEW) t2
WHERE t1.POST_ID = t2.POST_ID)
WHERE CATEGORY = 'movie'
ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC)t)
WHERE NO >= 1 AND NO <= 10;

-- 조회수
SELECT * FROM
(SELECT ROWNUM AS NO, t.* FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT * FROM TOT_POST_VIEW) t2
WHERE t1.POST_ID = t2.POST_ID)
ORDER BY VIEWCNT DESC, REGDATE DESC, EMPATHIZE_CNT DESC, POST_ID DESC)t)
WHERE NO >= 1 AND NO <= 10;

-- 공감수
SELECT * FROM
(SELECT ROWNUM AS NO, t.* FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT * FROM TOT_POST_VIEW) t2
WHERE t1.POST_ID = t2.POST_ID)
ORDER BY EMPATHIZE_CNT DESC, REGDATE DESC, VIEWCNT DESC, POST_ID DESC)t)
WHERE NO >= 1 AND NO <= 10;

-- category search list
SELECT * FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT * FROM TOT_POST_VIEW) t2
WHERE t1.POST_ID = t2.POST_ID)
WHERE CATEGORY = 'movie'
ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC);

-- 조회수 검색
SELECT * FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT * FROM TOT_POST_VIEW) t2
WHERE t1.POST_ID = t2.POST_ID)
ORDER BY VIEWCNT DESC, REGDATE DESC, EMPATHIZE_CNT DESC, POST_ID DESC);

-- 공감수 검색
SELECT * FROM
(SELECT * FROM
(SELECT t1.*, t2.EMPATHIZE_CNT FROM
(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM
(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2
WHERE t1.WRITER = t2.MM_ID) t1,
(SELECT * FROM FILE_TABLE) t2
WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,
(SELECT * FROM TOT_POST_VIEW) t2
WHERE t1.POST_ID = t2.POST_ID)
ORDER BY EMPATHIZE_CNT DESC, REGDATE DESC, VIEWCNT DESC, POST_ID DESC);


SELECT * FROM POST_TABLE;
SELECT * FROM MM_TABLE;
SELECT * FROM FILE_TABLE;
SELECT * FROM EMPATHIZE_TABLE;


SELECT * FROM(SELECT ROWNUM AS NO, t.* FROM(SELECT * FROM(SELECT t1.*, t2.EMPATHIZE_CNT FROM(SELECT * FROM(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2 WHERE t1.WRITER = t2.MM_ID) t1,(SELECT * FROM FILE_TABLE) t2 WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2 WHERE t1.POST_ID = t2.POST_ID)WHERE CATEGORY = 'movie'ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC)t)WHERE NO >= 1 AND NO <= 10;
SELECT * FROM(SELECT * FROM(SELECT t1.*, t2.EMPATHIZE_CNT FROM(SELECT * FROM(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2 WHERE t1.WRITER = t2.MM_ID) t1,(SELECT * FROM FILE_TABLE) t2 WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2WHERE t1.POST_ID = t2.POST_ID) WHERE CATEGORY = ?ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC);