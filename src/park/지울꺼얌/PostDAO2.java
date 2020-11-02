package park.지울꺼얌;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.regex.Pattern;

import main.java.com.util.DataUtil;

public class PostDAO2 {
	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	String contextPath = null;

	public PostDAO2() {
		// TODO Auto-generated constructor stub
	}

	public PostDAO2(String contextPath) {
		this.contextPath = contextPath;
	}

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

	public ArrayList<BoardListDTO> getViewCntList(int page) {
		int startNo = (page - 1) * 10 + 1;
		int endNo = page * 10;

		ArrayList<BoardListDTO> list = null;

		final String SQL = "SELECT * FROM" + "(SELECT ROWNUM AS NO, t.* FROM" + "(SELECT * FROM"
				+ "(SELECT t1.*, t2.EMPATHIZE_CNT FROM"
				+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM"
				+ "(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2" + " WHERE t1.WRITER = t2.MM_ID) t1,"
				+ "(SELECT * FROM FILE_TABLE) t2" + " WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,"
				+ "(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2"
				+ " WHERE t1.POST_ID = t2.POST_ID(+))"
				+ "ORDER BY VIEWCNT DESC, REGDATE DESC, EMPATHIZE_CNT DESC, POST_ID DESC)t)"
				+ " WHERE NO >= ? AND NO <= ?";

		System.out.println(SQL);

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

	} // end getViewCntList()

	public ArrayList<BoardListDTO> getEmpathizeCntList(int page) {
		int startNo = (page - 1) * 10 + 1;
		int endNo = page * 10;

		ArrayList<BoardListDTO> list = null;

		final String SQL = "SELECT * FROM" + "(SELECT ROWNUM AS NO, t.* FROM" + "(SELECT * FROM"
				+ "(SELECT t1.*, t2.EMPATHIZE_CNT FROM"
				+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM"
				+ "(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2" + " WHERE t1.WRITER = t2.MM_ID) t1,"
				+ "(SELECT * FROM FILE_TABLE) t2" + " WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,"
				+ "(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2"
				+ " WHERE t1.POST_ID = t2.POST_ID(+))"
				+ "ORDER BY EMPATHIZE_CNT DESC, REGDATE DESC, VIEWCNT DESC, POST_ID DESC)t)"
				+ "WHERE NO >= ? AND NO <= ?";

		System.out.println(SQL);

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

	} // end getEmpathizeCntList()

	public ArrayList<BoardListDTO> getCategorySearchList(String category, String searchType, String search, int page) {
		int startNo = (page - 1) * 10 + 1;
		int endNo = page * 10;

		ArrayList<BoardListDTO> list = null;

		final String SQL = "SELECT * FROM" + "(SELECT * FROM" + "(SELECT t1.*, t2.EMPATHIZE_CNT FROM"
				+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM"
				+ "(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2" + " WHERE t1.WRITER = t2.MM_ID) t1,"
				+ "(SELECT * FROM FILE_TABLE) t2" + " WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,"
				+ "(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2"
				+ " WHERE t1.POST_ID = t2.POST_ID(+))" + "WHERE CATEGORY = ?"
				+ "ORDER BY REGDATE DESC, VIEWCNT DESC, EMPATHIZE_CNT DESC, POST_ID DESC)";

		System.out.println(SQL);

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(SQL);
			psmt.setString(1, category);
			rs = psmt.executeQuery();
			list = createList(rs);
			list = createSearchList(list, searchType, search, startNo, endNo);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getCategorySearchList()

	public ArrayList<BoardListDTO> getViewCntSearchList(String searchType, String search, int page) {
		int startNo = (page - 1) * 10 + 1;
		int endNo = page * 10;

		ArrayList<BoardListDTO> list = null;

		final String SQL = "SELECT * FROM" + "(SELECT * FROM" + "(SELECT t1.*, t2.EMPATHIZE_CNT FROM"
				+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM"
				+ "(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2" + " WHERE t1.WRITER = t2.MM_ID) t1,"
				+ "(SELECT * FROM FILE_TABLE) t2" + " WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,"
				+ "(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2"
				+ " WHERE t1.POST_ID = t2.POST_ID(+))"
				+ "ORDER BY VIEWCNT DESC, REGDATE DESC, EMPATHIZE_CNT DESC, POST_ID DESC)";

		System.out.println(SQL);

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(SQL);
			rs = psmt.executeQuery();
			list = createList(rs);
			list = createSearchList(list, searchType, search, startNo, endNo);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getViewCntSearchList()

	public ArrayList<BoardListDTO> getEmpathizeCnttSearchList(String searchType, String search, int page) {
		int startNo = (page - 1) * 10 + 1;
		int endNo = page * 10;

		ArrayList<BoardListDTO> list = null;

		final String SQL = "SELECT * FROM" + "(SELECT * FROM" + "(SELECT t1.*, t2.EMPATHIZE_CNT FROM"
				+ "(SELECT t1.*, t2.FILE_ID, t2.FILEKIND, t2.REAL_FILENAME, t2.FILENAME FROM"
				+ "(SELECT * FROM POST_TABLE t1, (SELECT * FROM MM_TABLE)t2" + " WHERE t1.WRITER = t2.MM_ID) t1,"
				+ "(SELECT * FROM FILE_TABLE) t2" + " WHERE t1.POST_CONTENTS = t2.FILE_ID) t1,"
				+ "(SELECT COUNT(*) AS EMPATHIZE_CNT, POST_ID FROM EMPATHIZE_TABLE GROUP BY POST_ID) t2"
				+ " WHERE t1.POST_ID = t2.POST_ID(+))"
				+ "ORDER BY EMPATHIZE_CNT DESC, REGDATE DESC, VIEWCNT DESC, POST_ID DESC)";

		System.out.println(SQL);

		try {
			conn = DataUtil.getConnection();
			psmt = conn.prepareStatement(SQL);
			rs = psmt.executeQuery();
			list = createList(rs);
			list = createSearchList(list, searchType, search, startNo, endNo);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DataUtil.resourceClose(rs, psmt, conn);
		} // end try

		return list;

	} // end getEmpathizeCntSearchList()

	public ArrayList<BoardListDTO> createList(ResultSet rs) {
		ArrayList<BoardListDTO> list = new ArrayList<BoardListDTO>();

		try {
			while (rs.next()) {
				BoardListDTO dto = new BoardListDTO();

				dto.setPostId(rs.getLong("POST_ID"));
				dto.setWriter(rs.getString("id"));

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

				LinkedHashMap<String, String> titleAndContent = changeFileToText(rs.getString("REAL_FILENAME"));
				dto.setTitle(rs.getString("title"));
				dto.setPostContent(titleAndContent.get("content"));
				
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

	public ArrayList<BoardListDTO> createSearchList(ArrayList<BoardListDTO> list, String searchType, String search,
			int startNo, int endNo) {
		ArrayList<BoardListDTO> temp = new ArrayList<BoardListDTO>();

		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();

		String[] regexs = search.split(" ");

		for (BoardListDTO dto : list) {

			String content = null;
			switch (searchType) {
			case "title":
				content = dto.getTitle();
				break;
			case "content":
				content = dto.getPostContent();
				break;
			case "titleAndContent":
				content = dto.getTitle() + dto.getPostContent();
				break;
			default:
				content = dto.getTitle() + dto.getPostContent();
			} // end switch

			for (String regex : regexs) {
				StringBuffer word = new StringBuffer(".*");
				word.append(regex.trim());
				word.append(".*");
				if (Pattern.matches(word.toString(), content)) {
					temp.add(dto);
					System.out.println(dto);
					break;
				} // end if

			} // end for
		} // end for

		ArrayList<BoardListDTO> result = new ArrayList<BoardListDTO>();

		try {
			for (int i = startNo - 1; i < endNo - 1; i++) {
				result.add(temp.get(i));
			} // end for
		} catch (Exception e) { // exception 이 발생했다면 index exception
			// 없으면 없는 것을 마지막으로 리턴
			return result;
		} // end try

		return result;
	} // end createSearchList

	public LinkedHashMap<String, String> changeFileToText(String fileName) {

		LinkedHashMap<String, String> result = null;

		String path = this.contextPath + File.separator + fileName;

		File file = new File(path);

		StringBuffer content = null;

		try {

			BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(file)));
			content = new StringBuffer();

			int index = 0;
			result = new LinkedHashMap<String, String>();
			while (br.read() != -1) {
				String temp = br.readLine();
				String replace = null;

				if (index == 0) {
					replace = temp.replaceAll("title", "");
					result.put("title", replace);
					content.append(replace);
					index++;
					continue;
				} // end if

				replace = temp.replaceAll("<.*>", "").replaceAll("&lt;", "").replaceAll("&gt;", "").replaceAll("&nbsp;",
						" ");
				content.append(replace);
			} // end while

			br.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} // end try

		result.put("content", content.toString());
		return result;
	} // end changeFileToText()

	public static void main(String[] args) {
		// new PostDAO("src/data/").getCategoryList("movie", 1);
		// new PostDAO("src/data/").getViewCntList(1);
		// new PostDAO("src/data/").getEmpathizeCntList(1);
		// new PostDAO("src/data/").getCategorySearchList("movie", "titleAndContent", "! 안녕 하세요", 1);
		// new PostDAO("src/data/").getViewCntSearchList("movie", "titleAndContent", "!
		// 안녕 하세요", 1);
		// new PostDAO("src/data/").getEmpathizeCntSearchList("movie",
		// "titleAndContent", "! 안녕 하세요", 1, 20);
	}
}
