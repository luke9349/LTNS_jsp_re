<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	request.setCharacterEncoding("utf-8");
	String category	= request.getParameter("category");
	String title = request.getParameter("title");
	Date today = new Date();
	SimpleDateFormat fomat = new SimpleDateFormat("[yyyy-mm-dd]");
	
	String name = "[홍길동]";
	String content = request.getParameter("content");
	int view_cnt = 3;
	int like = 2;
	
	//DB접근시 
	// getAttribute로 뽑아올 예정 
%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>View</title>
</head>
<!-- bootstrep -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

<body>
<!-- 상단  -->
<div class="container">
	<table class="table">
		<tr>
		<th class="text-center"><%=category %> 게시판</th>		<th style="width:80%;" class="text-left"><%=title %></th>
		</tr>
		<tr>
		<td><%=name %> <%=fomat.format(today) %></td><td class="text-right">[<%=view_cnt%>][<%=like%>]</td> 
		</tr>
		<tr>
		<td><%=content %></td>
		</tr>
		<!-- 버튼 
		수정,삭제
		-->
	</table>
</div>

<!-- 댓글  -->
</body>
</html>