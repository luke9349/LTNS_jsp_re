package main.java.com.model.board;

import java.io.Closeable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import main.java.com.model.DAO;
import main.java.com.model.DTO;
import main.java.com.util.DataUtil;
import oracle.net.aso.d;


/* * * * 
 * Write by HJ */
public interface Board_DAO extends DAO {
	
	//게시글 테이블 post_table 
	// 작성자 writer, 제목 title, 카테고리, category, 작성일 ,regdate, 조회수, viewCnt
	//DB 읽어오기 t
	
	Connection d = DataUtil.getConnection();
	
	

	
	
	//글작성하기 
	public static int insert(DTO dto) throws SQLException {
		int cnt =0;
		
		String title = dto.gettitle();
		String writer = dto.getwriter();
		String category = dto.getcategory();
		
		
		
		return cnt;
		
	}

	public static int insert(String title, String writer, String category) {
		int cnt = 0;
		
		try {
			
		}
	}
	
	
}
