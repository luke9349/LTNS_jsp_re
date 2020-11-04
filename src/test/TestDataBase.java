package test;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TestDataBase {

	Connection conn;
	PreparedStatement psmt;

	void inserUser() {

		String delete = "delete from mm_table";

		String sql = "INSERT INTO mm_table(mm_id, id, password, nickname, email, grade)"
				+ " VALUES (?, ?, 1, ?, ?,'MEMBER')";

		String id = "tester";
		String nickname = "testerNickname";
		String email = "test@test.test";

		long start = System.currentTimeMillis();
		try {
			conn = DataUtil.getLocalConnection();
			psmt = conn.prepareStatement(delete);
			psmt.executeUpdate();
			DataUtil.resourceClose(psmt, conn);
			conn = DataUtil.getLocalConnection();
			conn.setAutoCommit(false);
			for (int i = 0; i <= 2000; i++) {
				psmt = conn.prepareStatement(sql);
				psmt.setInt(1, i);
				psmt.setString(2, "[" + i + "]" + id);
				psmt.setString(3, "[" + i + "]" + nickname);
				psmt.setString(4, "[" + i + "]" + email);
				psmt.executeUpdate();
				psmt.close();
			}
			conn.commit();
		} catch (SQLException e) {
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
				LogUtil.error(e.getMessage());
			}
			e.printStackTrace();
			LogUtil.error(e.getMessage());
		} finally {
			DataUtil.resourceClose(psmt, conn);
			long end = System.currentTimeMillis();
			System.out.println("inserUser: " + (end - start) + "ms");
		}
	}

	void inserFile() {

		String delete = "delete from file_table";

		String sql = "INSERT INTO file_table(file_id, filekind, real_filename, filename)" + " VALUES (?, 'txt', ?, ?)";

		// String saveDirectory = request.getServletContext().getRealPath("/") + "data";
		File directory = new File("data");

		if (directory.exists()) {
			String[] list = directory.list();
			for (String string : list) {
				File f = new File(directory, string);
				f.delete();
			}
		} else {
			directory.mkdir();
		}

		long start = System.currentTimeMillis();
		try {
			conn = DataUtil.getLocalConnection();
			psmt = conn.prepareStatement(delete);
			psmt.executeUpdate();
			DataUtil.resourceClose(psmt, conn);
			conn = DataUtil.getLocalConnection();
			conn.setAutoCommit(false);
			for (int i = 0; i <= 2000; i++) {
				psmt = conn.prepareStatement(sql);
				psmt.setInt(1, i);
				String filePath = directory.getPath() + File.separator + i + ".tex";
				File file = new File(filePath);
				PrintWriter pw = new PrintWriter(file);
				pw.println(i);
				pw.flush();
				pw.close();
				psmt.setString(2, file.getPath());
				psmt.setString(3, file.getName());
				psmt.executeUpdate();
				psmt.close();
			}
			conn.commit();
		} catch (SQLException | FileNotFoundException e) {
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
				LogUtil.error(e.getMessage());
			}
			e.printStackTrace();
			LogUtil.error(e.getMessage());
		} finally {
			DataUtil.resourceClose(psmt, conn);
			long end = System.currentTimeMillis();
			System.out.println("inserFile: " + (end - start) + "ms");
		}

	}

	void inserPost() {

		String delete = "delete from post_table";

		String sql = "INSERT INTO post_table(post_id, title, writer, category, regdate, post_contents, VIEWCNT)"
				+ " VALUES (?, ?, ?, ?, sysdate, ?, ?)";

		String title = "title";

		String[] category = { "NOTICE", "MOVIE", "BOOK", "SPORTS", "GAME" };

		long start = System.currentTimeMillis();
		try {
			conn = DataUtil.getLocalConnection();
			psmt = conn.prepareStatement(delete);
			psmt.executeUpdate();
			DataUtil.resourceClose(psmt, conn);
			conn = DataUtil.getLocalConnection();
			conn.setAutoCommit(false);
			for (int i = 0; i <= 2000; i++) {
				psmt = conn.prepareStatement(sql);
				psmt.setInt(1, i);
				psmt.setString(2, "[" + i + "]" + title);
				psmt.setInt(3, (int) (Math.random() * 2000) + 1);
				psmt.setString(4, category[(int) (Math.random() * 5)]);
				psmt.setInt(5, (int) (Math.random() * 2000) + 1);
				psmt.setInt(6, (int) (Math.random() * 2001));
				psmt.executeUpdate();
				psmt.close();
			}
			conn.commit();
		} catch (SQLException e) {
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
				LogUtil.error(e.getMessage());
			}
			e.printStackTrace();
			LogUtil.error(e.getMessage());
		} finally {
			DataUtil.resourceClose(psmt, conn);
			long end = System.currentTimeMillis();
			System.out.println("inserPost: " + (end - start) + "ms");
		}
	}

	public static void main(String[] args) {
		new TestDataBase().inserUser();
		new TestDataBase().inserFile();
		new TestDataBase().inserPost();
	}
}
