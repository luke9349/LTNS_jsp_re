package main.java.com.post.beans;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import main.java.com.model.DB;

public class FileWriteDAO {

	
	
	Connection conn = null;
	PreparedStatement psmt = null;
	Statement stmt = null;
	ResultSet rs = null;
	
	
	
	public FileWriteDAO() {
		
		try {
			Class.forName(DB.DRIVER);
			conn = DriverManager.getConnection(DB.URL, DB.USERID, DB.USERPW);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public void close() throws SQLException {
		if(rs != null) rs.close();
		if(psmt != null) psmt.close();
		if(stmt != null) stmt.close();
		if(conn != null) conn.close();
		
	} // end close()
	
	
	public int fileInsert(FileWriteDTO dto) throws SQLException {
		
		int cnt =0; 
		
		String filekind = dto.getFilekind();
		String readl_filename = dto.getReal_filename();
		String filename = dto.getFilename();
		
		cnt = this.fileInsert( filekind, readl_filename, filename);
		
		return cnt;
	}
	
	public int fileInsert(String filekind, String readl_filename, String filename) throws SQLException {
		
		int cnt = 0;
		String sql ="INSERT INTO file_table"
				+"(file_id,filekind,real_filename,filename) "
				+"VALUES" 
				+"(SEQ_FILE_TABLE_FILE_ID.NEXTVAL,?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, filekind);
			psmt.setString(2, readl_filename);
			psmt.setString(3, filename);
			cnt = psmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			close();
		}
	
		return cnt;
	}

	
	public FileWriteDTO[] createArray(ResultSet rs) throws SQLException {
		ArrayList<FileWriteDTO> fileList = new ArrayList<FileWriteDTO>();
		
		while(rs.next()) {
			
			int file_id = rs.getInt("file_id");
			String filekind = rs.getString("filekind");
			String readl_filename = rs.getString("readl_filename");
			String filename = rs.getString("filename");
			
			
			FileWriteDTO dto = new FileWriteDTO(file_id, filekind, readl_filename, filename);
			fileList.add(dto);
			
		}// end while
		
		int size = fileList.size();
		if(size ==0) return null;
		
		FileWriteDTO arr[] = new FileWriteDTO[size];
		fileList.toArray(arr);
		
		
		return arr;
		
		
		
		
		
	}	

	
	
	
}
