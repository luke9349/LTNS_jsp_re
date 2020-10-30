<%@page import="java.io.FileReader"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ page import="java.io.*" %>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	request.setCharacterEncoding("utf-8");
	String category	= request.getParameter("category");
	String title = request.getParameter("title");
	Date today = new Date();
	SimpleDateFormat fomat = new SimpleDateFormat("[yyyy-mm-dd]");
	
	String name = "[홍길동]";
	int view_cnt = 3;
	int like = 2;
	
	//DB접근시 
	// getAttribute로 뽑아올 예정 
%>    

<%
	//파일읽어오기  (DB접근시 수정할것임)
	String titles ="";	
	String contents ="";
	String filename = "20201031010021.txt";
	String saveDirectory = getServletContext().getRealPath("/") + "data" + File.separator + filename;
	BufferedReader br = null;
	try{
	br = new BufferedReader(new FileReader(saveDirectory));
	String line = null;
	
	while((line = br.readLine())!=null){
		if(line.equals("title")){
			 titles += line;
		}else{
			contents +=line;
		}
	}
	
	
	}catch(Exception e){
		e.printStackTrace();
	}finally{
		try{
			br.close();
		}catch(Exception e){
			e.printStackTrace();
		}
	}


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
		<h3>[<%=category %>게시판]  &nbsp; [<%= titles%>]</h3> 
	</div>
	<hr>
	<!-- 작성자 시간 조회수 추천수 -->
	<div class="d-block">
		<h5><%=name %> </h5> 
	</div>
	<hr>
	<!-- 내용 -->
	<div class="centents">
		<h5><%=contents %> </h5> 
		<div class="text-center"> <br>
		<input type="button" value="추천" class="text-center"> <br>
		</div>
	</div>
	<hr>
	<div class="text-right">
	<input type="button" value="삭제" onclick="location.href='delete.jsp'">
	<input type="button" value="수정" onclick="location.href='update.jsp'">
	
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
	<textarea rows="1" class="d-block" name="commentArea" style="width:100%; height:50px;"></textarea> 
	</div>
	<div class="text-right">
	<input type="button" class="btn-lg mt-2"  value="작성">
	</div>
</div>

<!-- 댓글  -->
</body>
</html>