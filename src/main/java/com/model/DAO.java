package main.java.com.model;

import java.sql.ResultSet;
import java.sql.SQLException;

public interface DAO {

	void close() throws SQLException;

	// 1-1. ResultSet => DTO
	DTO mkDTO(ResultSet rs) throws SQLException;
	
	// 1-2. ResultSet => DTOs
	DTO[] mkDTOs(ResultSet rs) throws SQLException;
	
	// 0. sql => ResultSet : sql 문장을 매개변수로 받아, rs를 디비로 부터 받아내고, mkDTO로 rs를 넘겨서 DTO를 반환받으세요!
	DTO[] selectBySQL(String sql) throws SQLException;
	
	// 0-1. sql => ResultSet : String 매개변수를 받는 sql문으로 가져오기
	public DTO[] selectBySQL(String sql, String stringParamForPstmt) throws SQLException;
}
