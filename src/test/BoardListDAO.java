package test;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import main.java.com.util.DataUtil;
import main.java.com.util.LogUtil;

public class BoardListDAO {

	public final static String SELECT_POST_BY_CATEGORY_PAGE = "SELECT * FROM " + "(SELECT ROWNUM AS NO, t.* FROM "
			+ "(SELECT * FROM " + "(SELECT t.*, NVL(t.HIT, 0) AS EMPATHIZE_CNT FROM " + "(SELECT t1.*, t2.HIT FROM "
			+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM " + "(SELECT * FROM "
			+ "(SELECT *  FROM (SELECT * FROM POST_TABLE WHERE CATEGORY = ?), "
			+ "(SELECT COUNT(*) AS DATALENGTH FROM POST_TABLE WHERE CATEGORY = ?)) t1, "
			+ "MM_TABLE t2 WHERE t1.WRITER = t2.MM_ID) t1, " + "FILE_TABLE t2 WHERE t1.POST_CONTENTS = t2.FILE_ID) t1, "
			+ "(SELECT COUNT(*) AS HIT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2 "
			+ "WHERE t1.POST_ID = t2.POST_ID(+)) t) "
			+ "ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC) t) "
			+ "WHERE NO >= ? AND NO <= ?";

	public final static String SELECT_POST_BY_VIEWCNT_PAGE = "SELECT * FROM " + "(SELECT ROWNUM AS NO, t.* FROM "
			+ "(SELECT * FROM " + "(SELECT t.*, NVL(t.HIT, 0) AS EMPATHIZE_CNT FROM " + "(SELECT t1.*, t2.HIT FROM "
			+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM " + "(SELECT * FROM "
			+ "(SELECT *  FROM (SELECT * FROM POST_TABLE), " + "(SELECT COUNT(*) AS DATALENGTH FROM POST_TABLE)) t1, "
			+ "MM_TABLE t2 WHERE t1.WRITER = t2.MM_ID) t1, " + "FILE_TABLE t2 WHERE t1.POST_CONTENTS = t2.FILE_ID) t1, "
			+ "(SELECT COUNT(*) AS HIT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2 "
			+ "WHERE t1.POST_ID = t2.POST_ID(+)) t) "
			+ "ORDER BY VIEWCNT DESC, REGDATE DESC, EMPATHIZE_CNT DESC, POST_ID DESC) t) "
			+ "WHERE NO >= ? AND NO <= ?";

	public final static String SELECT_POST_BY_EMPATHIZE_PAGE = "SELECT * FROM " + "(SELECT ROWNUM AS NO, t.* FROM "
			+ "(SELECT * FROM " + "(SELECT t.*, NVL(t.HIT, 0) AS EMPATHIZE_CNT FROM " + "(SELECT t1.*, t2.HIT FROM "
			+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM " + "(SELECT * FROM "
			+ "(SELECT *  FROM (SELECT * FROM POST_TABLE), " + "(SELECT COUNT(*) AS DATALENGTH FROM POST_TABLE)) t1, "
			+ "MM_TABLE t2 WHERE t1.WRITER = t2.MM_ID) t1, " + "FILE_TABLE t2 WHERE t1.POST_CONTENTS = t2.FILE_ID) t1, "
			+ "(SELECT COUNT(*) AS HIT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2 "
			+ "WHERE t1.POST_ID = t2.POST_ID(+)) t) "
			+ "ORDER BY EMPATHIZE_CNT DESC, REGDATE DESC, VIEWCNT DESC, POST_ID DESC) t) "
			+ "WHERE NO >= ? AND NO <= ?";

	public final static String SELECT_POST_BY_CATEGORY_ALL = "SELECT * FROM " + "(SELECT * FROM "
			+ "(SELECT t.*, NVL(t.HIT, 0) AS EMPATHIZE_CNT FROM " + "(SELECT t1.*, t2.HIT FROM "
			+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM " + "(SELECT * FROM "
			+ "(SELECT *  FROM (SELECT * FROM POST_TABLE WHERE CATEGORY = ?), "
			+ "(SELECT COUNT(*) AS DATALENGTH FROM POST_TABLE WHERE CATEGORY = ?)) t1, "
			+ "MM_TABLE t2 WHERE t1.WRITER = t2.MM_ID) t1, " + "FILE_TABLE t2 WHERE t1.POST_CONTENTS = t2.FILE_ID) t1, "
			+ "(SELECT COUNT(*) AS HIT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2 "
			+ "WHERE t1.POST_ID = t2.POST_ID(+)) t) "
			+ "ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC)";

	public final static String SELECT_POST_BY_VIEWCNT_ALL = "SELECT * FROM " + "(SELECT * FROM "
			+ "(SELECT t.*, NVL(t.HIT, 0) AS EMPATHIZE_CNT FROM " + "(SELECT t1.*, t2.HIT FROM "
			+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM " + "(SELECT * FROM "
			+ "(SELECT *  FROM (SELECT * FROM POST_TABLE), " + "(SELECT COUNT(*) AS DATALENGTH FROM POST_TABLE)) t1, "
			+ "MM_TABLE t2 WHERE t1.WRITER = t2.MM_ID) t1, " + "FILE_TABLE t2 WHERE t1.POST_CONTENTS = t2.FILE_ID) t1, "
			+ "(SELECT COUNT(*) AS HIT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2 "
			+ "WHERE t1.POST_ID = t2.POST_ID(+)) t) "
			+ "ORDER BY VIEWCNT DESC, REGDATE DESC, EMPATHIZE_CNT DESC, POST_ID DESC)";

	public final static String SELECT_POST_BY_EMPATHIZE_ALL = "SELECT * FROM " + "(SELECT * FROM "
			+ "(SELECT t.*, NVL(t.HIT, 0) AS EMPATHIZE_CNT FROM " + "(SELECT t1.*, t2.HIT FROM "
			+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM " + "(SELECT * FROM "
			+ "(SELECT *  FROM (SELECT * FROM POST_TABLE), " + "(SELECT COUNT(*) AS DATALENGTH FROM POST_TABLE)) t1, "
			+ "MM_TABLE t2 WHERE t1.WRITER = t2.MM_ID) t1, " + "FILE_TABLE t2 WHERE t1.POST_CONTENTS = t2.FILE_ID) t1, "
			+ "(SELECT COUNT(*) AS HIT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2 "
			+ "WHERE t1.POST_ID = t2.POST_ID(+)) t) "
			+ "ORDER BY EMPATHIZE_CNT DESC, REGDATE DESC, VIEWCNT DESC, POST_ID DESC)";

	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	String contextPath = null;

	public ArrayList<BoardListDTO> getCategoryList(String category, String type, int page) {
		int startNo = 1;
		int endNo = 1;

		if (type.equals("list")) {
			startNo = (page - 1) * 10 + 1;
			endNo = page * 10;
		} else {
			startNo = (page - 1) * 8 + 1;
			endNo = page * 8;
		}

		ArrayList<BoardListDTO> list = null;

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(SELECT_POST_BY_CATEGORY_PAGE);
			psmt.setString(1, category);
			psmt.setString(2, category);
			psmt.setInt(3, startNo);
			psmt.setInt(4, endNo);
			rs = psmt.executeQuery();
			list = createList(rs);

		} catch (Exception e) {
			e.printStackTrace();
			LogUtil.error("[BoardListDAO] [getCategoryList] " + e.getMessage());
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getCategoryList()

	public ArrayList<BoardListDTO> getCategoryAllList(String category) {

		ArrayList<BoardListDTO> list = null;

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(SELECT_POST_BY_CATEGORY_ALL);
			psmt.setString(1, category);
			psmt.setString(2, category);
			rs = psmt.executeQuery();
			list = createList(rs);

		} catch (Exception e) {
			e.printStackTrace();
			LogUtil.error("[BoardListDAO] [getCategoryAllList] " + e.getMessage());
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getCategoryAllList()

	public ArrayList<BoardListDTO> getList(String category, String type, int page) {
		String SQL = null;
		if (category.toLowerCase().equals("viewcnt"))
			SQL = SELECT_POST_BY_VIEWCNT_PAGE;
		else
			SQL = SELECT_POST_BY_EMPATHIZE_PAGE;
		
		int startNo = 1;
		int endNo = 1;
		if (type.equals("list")) {
			startNo = (page - 1) * 10 + 1;
			endNo = page * 10;
		} else {
			startNo = (page - 1) * 8 + 1;
			endNo = page * 8;
		}

		ArrayList<BoardListDTO> list = null;

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(SQL);
			psmt.setInt(1, startNo);
			psmt.setInt(2, endNo);
			rs = psmt.executeQuery();
			list = createList(rs);

		} catch (Exception e) {
			e.printStackTrace();
			LogUtil.error("[BoardListDAO] [getList] " + e.getMessage());
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getList()

	public ArrayList<BoardListDTO> getAllList(String category) {

		ArrayList<BoardListDTO> list = null;

		String SQL = null;
		if (category.toLowerCase().equals("viewcnt"))
			SQL = SELECT_POST_BY_VIEWCNT_ALL;
		else
			SQL = SELECT_POST_BY_EMPATHIZE_ALL;

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(SQL);
			rs = psmt.executeQuery();
			list = createList(rs);

		} catch (Exception e) {
			e.printStackTrace();
			LogUtil.error("[BoardListDAO] [getAllList] " + e.getMessage());
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getAllList()

	public ArrayList<BoardListDTO> createList(ResultSet rs) {
		ArrayList<BoardListDTO> list = new ArrayList<BoardListDTO>();

		try {
			while (rs.next()) {
				BoardListDTO dto = new BoardListDTO();

				dto.setPostId(rs.getLong("POST_ID"));
				dto.setTitle(rs.getString("TITLE"));
				dto.setWriter(rs.getString("ID"));
				dto.setNickName(rs.getString("NICKNAME"));
				dto.setCategory(rs.getString("CATEGORY"));

				Date date = rs.getDate("REGDATE");
				Time time = rs.getTime("REGDATE");

				String strDate = new SimpleDateFormat("yyyy-MM-dd").format(date);
				String strTime = new SimpleDateFormat("HH:mm").format(time);

				String meridiem = "오전";
				int integerTime = Integer.parseInt(strTime.substring(0, 2));
				if (integerTime > 12) {
					meridiem = "오후";
					integerTime -= 12;
				} // end if
				String regDate = strDate + " (" + meridiem + ")" + integerTime + strTime.substring(2);
				dto.setRegdate(regDate);

				dto.setRealFilePath(rs.getString("REAL_FILENAME"));
				dto.setEmpathizeCnt(rs.getLong("EMPATHIZE_CNT"));
				dto.setViewcnt(rs.getLong("VIEWCNT"));
				dto.setDataLength(rs.getLong("DATALENGTH"));

				list.add(dto);
			} // end while
		} catch (SQLException e) {
			e.printStackTrace();
			LogUtil.error("[BoardListDAO] [createList] " + e.getMessage());
		} // end try

		return list;
	} // end createList

}
