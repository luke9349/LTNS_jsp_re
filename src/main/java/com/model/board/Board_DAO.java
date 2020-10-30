package main.java.com.model.board;

import main.java.com.model.DAO;

/* * * * 
 * Write by HJ */
public interface Board_DAO extends DAO {
	
	
	 public static final String SQL_WRITE_INSERT = 
			"INSERT INTO post_table"
			+ "(post_id, title, writer, category, regdate, post_contents, viewcnt) "
			+ "VALUES"
			+ "(post_table_seq.nextval, ?, ?, ?, SYSDATE, ?, ?)";
	
	
	
	
}
