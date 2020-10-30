
<%@page import="main.java.com.util.DataUtil"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		Connection conn = DataUtil.getConnection();
		String sql = "insert into tastTable (asd) values(?)";
		PreparedStatement psmt = conn.prepareStatement(sql);
		psmt.setInt(1, 1);
		int cnt = psmt.executeUpdate();
		System.out.println(cnt);	
	%>
</body>
</html>