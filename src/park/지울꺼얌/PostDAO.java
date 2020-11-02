package park.지울꺼얌;

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

public class PostDAO {
	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	String contextPath = null;

	public ArrayList<BoardListDTO> getCategoryList(String category, int page) {
		int startNo = (page - 1) * 10 + 1;
		int endNo = page * 10;

		ArrayList<BoardListDTO> list = null;

		final String SQL = "SELECT * FROM" + "(SELECT ROWNUM AS NO, t.* FROM" + "(SELECT * FROM"
				+ "(SELECT t1.*, t2.EMPATHIZE_CNT FROM"
				+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM"
				+ "(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2" + " WHERE t1.WRITER = t2.MM_ID) t1,"
				+ "(SELECT * FROM FILE_TABLE) t2" + " WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,"
				+ "(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2"
				+ " WHERE t1.POST_ID = t2.POST_ID(+))" + " WHERE CATEGORY = ?"
				+ "ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC)t)"
				+ " WHERE NO >= ? AND NO <= ?";

		System.out.println(SQL);

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(SQL);
			psmt.setString(1, category);
			psmt.setInt(2, startNo);
			psmt.setInt(3, endNo);
			rs = psmt.executeQuery();
			list = createList(rs);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getCategoryList()

	public ArrayList<BoardListDTO> getList(String SQL, int page) {
		int startNo = (page - 1) * 10 + 1;
		int endNo = page * 10;

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
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getList()

	public ArrayList<BoardListDTO> getCategorySearchList(String category) {
//		int startNo = (page - 1) * 10 + 1;
//		int endNo = page * 10;

		ArrayList<BoardListDTO> list = null;

		final String SQL = "SELECT * FROM" + "(SELECT * FROM" + "(SELECT t1.*, t2.EMPATHIZE_CNT FROM"
				+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM"
				+ "(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2" + " WHERE t1.WRITER = t2.MM_ID) t1,"
				+ "(SELECT * FROM FILE_TABLE) t2" + " WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,"
				+ "(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2"
				+ " WHERE t1.POST_ID = t2.POST_ID(+))" + " WHERE CATEGORY = ?"
				+ "ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC)";

		System.out.println(SQL);

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(SQL);
			psmt.setString(1, category);
			rs = psmt.executeQuery();
			list = createList(rs);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getCategorySearchList()

	public ArrayList<BoardListDTO> getSearchList(String SQL) {

		ArrayList<BoardListDTO> list = null;

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(SQL);
			rs = psmt.executeQuery();
			list = createList(rs);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getViewCntSearchList()

	public ArrayList<BoardListDTO> createList(ResultSet rs) {
		ArrayList<BoardListDTO> list = new ArrayList<BoardListDTO>();

		try {
			while (rs.next()) {
				BoardListDTO dto = new BoardListDTO();

				dto.setPostId(rs.getLong("POST_ID"));
				dto.setTitle(rs.getString("TITLE"));
				dto.setWriter(rs.getString("ID"));
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
				String dateResult = strDate + " (" + meridiem + ")" + integerTime + strTime.substring(2);
				dto.setRegdate(dateResult);

				dto.setPostContent(rs.getString("POST_CONTENTS"));

				dto.setEmpath(rs.getLong("EMPATHIZE_CNT")); // null 이 나오는 것이 아니네 ? 0으로 자동 셋팅이 되어 버리구나
				dto.setViewcnt(rs.getLong("VIEWCNT"));

				System.out.println(dto);

				list.add(dto);
			} // end while
		} catch (SQLException e) {
			e.printStackTrace();
		} // end try

		return list;
	} // end createList

}
