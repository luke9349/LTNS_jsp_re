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
	
	<!-- 제목 카테고리  -->
	<div class="top title">
		<h3>[<%=category %>게시판]  &nbsp; [<%= title%>]</h3> 
	</div>
	<hr>
	<!-- 작성자 시간 조회수 추천수 -->
	<div class="d-block">
		<h5><%=name %> </h5> 
	</div>
	<hr>
	<!-- 내용 -->
	<div class="centents">
		<h5><%=content %> </h5> 
		<div class="text-center"> <br>
		<input type="button" value="추천" class="text-center"> <br>
		</div>
	</div>
	<hr>
	<!-- 추천버튼 -->
	<div class="text-center">
		
	</div>
	<hr>
	
	
	
	
	<!--  로그인 될때 
	<%
		//	if(session.getAttribute("login") != null){
	%>
	*/
			
	<% 
	 //	}

	%>
	
	 --> 
	 
	 <div>
	<textarea rows="1" class="d-block" name="commentArea" style="width:85%; height:50px;"></textarea> 
	<input type="button" class="d-inline" style="width:10%; height:50px;" value="작성">
	</div>
	
</div>

<!-- 댓글  -->
</body>
</html>