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

	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	String contextPath = null;

	public ArrayList<BoardListDTO> getCategoryList(String sql, String category, int page) {
		int startNo = (page - 1) * 10 + 1;
		int endNo = page * 10;

		ArrayList<BoardListDTO> list = null;

		System.out.println(sql);

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(sql);
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

	public ArrayList<BoardListDTO> getCategoryAllList(String sql, String category) {

		ArrayList<BoardListDTO> list = null;

		System.out.println(sql);

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(sql);
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
			LogUtil.error("[BoardListDAO] [getList] " + e.getMessage());
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getList()

	public ArrayList<BoardListDTO> getAllList(String SQL) {

		ArrayList<BoardListDTO> list = null;

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

				System.out.println(dto);

				list.add(dto);
			} // end while
		} catch (SQLException e) {
			e.printStackTrace();
			LogUtil.error("[BoardListDAO] [createList] " + e.getMessage());
		} // end try

		return list;
	} // end createList

}
