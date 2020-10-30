package main.java.com.post.beans;

import java.sql.Connection;
import java.sql.PreparedStatement;

import main.java.com.util.DataUtil;

public class WriteDAO {

	
	
	Connection conn = DataUtil.getConnection();
	PreparedStatement pstmt = conn.prepareStatement();
	
	
	
}
