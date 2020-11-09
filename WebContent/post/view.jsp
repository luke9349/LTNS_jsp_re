<%@page import="main.java.com.view.TOT_Post_DTO"%>
<%@page import="main.java.com.model.post.WriteDTO"%>
<%@page import="main.java.com.model.DTO"%>
<%@page import="main.java.com.model.post.FileWriteDTO"%>
<%@page import="main.java.com.view.MemberDTO"%>
<%@page import="java.io.FileReader"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ page import="java.io.*" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%	
	//dao를 사용한 트랜잭션
	WriteDTO[] arr = (WriteDTO[])request.getAttribute("views");
	FileWriteDTO[] file_info = (FileWriteDTO[])request.getAttribute("contents_view");
	MemberDTO[] member_info = (MemberDTO[])request.getAttribute("member");
	TOT_Post_DTO[] tot_info = (TOT_Post_DTO[])request.getAttribute("tot");
	
	//정보 읽어오기 
	String title = arr[0].getTitle();
	String date = arr[0].getRegDate();
	String category = arr[0].getCategory();
	int wirters = arr[0].getWriter();
	int rec_chk_write = 99;
	int login_chk = (int)session.getAttribute("login");
	String nickname ="";
	
	if(login_chk == 0){
		nickname = (String)session.getAttribute("nickname");
		 rec_chk_write =  99; // 0
		
	}else {
		nickname = member_info[0].getNickname();	
		rec_chk_write =  (int) session.getAttribute("rec_chk_write"); // 0
			
	}
	
	int viewCnt = arr[0].getViewCnt();
	int post_content = arr[0].getPost_contents();
	int post_id = Integer.parseInt(request.getParameter("post_id"));
	int streinger =  (int) session.getAttribute("writer");
	
	
	
	
	
	
	//공감
	int emp_cnt = tot_info[0].getEmpathize_cnt();
	
	String ctx = request.getContextPath();
	System.out.println(file_info[0].getFilename());
	request.setCharacterEncoding("utf-8");
	Date today = new Date();
	SimpleDateFormat fomat = new SimpleDateFormat("[yyyy-mm-dd]");
%>  

<%
	//파일읽어오기  (DB접근시 수정할것임)
	String titles ="";	
	String contents ="";
	String filename = file_info[0].getFilename();
	String saveDirectory = getServletContext().getRealPath("/") + "data" + File.separator + filename;
	
	BufferedReader br = null;
	try{
	br = new BufferedReader(new FileReader(saveDirectory));
	String line = null;

	titles = br.readLine();
	
	while((line = br.readLine())!=null){
		if(!line.equals(titles)){
			contents += line;
		}
	}//end while
	
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
<!-- css link  -->
 <link rel="stylesheet" type="text/css" href="CSS/Write.css">
 <link rel="stylesheet" type="text/css" href="../mainpage/CSS/footer/footer.css">
 <link rel="stylesheet" type="text/css" href="../mainpage/CSS/header/header.css">

<!-- javascript link -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript" src="JS/view.js"></script>



<!-- fontasome -->
<script src="https://kit.fontawesome.com/5ccafa9b7a.js" crossorigin="anonymous"></script> 

<!-- bootstrep -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>



<script>
function deletePost(uid){
	// 삭제 여부, 다시 확인하고 진행하기
	var r = confirm("삭제 하시겠습니까?");
	
	if(r){
		location.href= 'deleteOk.do?post_content='+uid+'';
	}
	
}

function back(){
	// 삭제 여부, 다시 확인하고 진행하기
	var r = confirm("취소 하시겠습니까?");
	
	if(r){
		location.href= "<%=ctx%>/board/board_list.do";
	}
}


	
	
	
function recommend(){
    
	var rec_btn = document.getElementById("rec_btn");

	if (<%=rec_chk_write%> == 0) {
		location.href= 'recomendOk.do?post_id=<%=post_id%>'

	}  
}
	   

</script>
<body class="container">
	<!--  헤더  -->
	<jsp:include page="../header/component/header.jsp" />

 <div class="col-12 mt-4">
	<!-- 카테고리 -->
	<div class="top_title">
		<h6 class ="text-info"><%=category %> 	</h6> <span class="d-block"> [<%=post_id %>] </span> 
		
		 <span class="text-right d-block"> 
		 <i class="far fa-eye"> <%=viewCnt %></i>
		 <%if(login_chk != 0){%> 
	 	 <i class="likes" id="rec_btn" onclick="recommend()" class="fas fa-thumbs-up"> <%=emp_cnt %></i>
	     <%} %>
		 </span>
		 <!-- 좋아요 버튼 -->
	
	</div>
	<!-- 제목  -->
	<div class="top title">
		<h1 class="font-weight-bold text-lg"><%=title %></h1> 
	</div> <br>
	
	
	<!-- 작성자 시간 조회수 추천수 -->
	<div class="d-block">
	<span class="font-weight-bold"><%=nickname%></span> <span class="font-size-sm"> <%=date %> </span> 
	</div>
	<hr>
	<!-- 내용 -->
	<div class="centents">
		<h5><%=contents %> </h5> 
		<div class="text-center"></div>
	</div><br><br><br><br><br><br><br><br><br><br><br><br>
	<hr>
	<div class="text-right">
	<input type="button" class="fun-btn btn-sm font-weight-bold"  value="돌아가기" onclick='back()'>
	
	<!-- 수정삭제  -->
	<%if(wirters == streinger){ %>
	<button type="button" class="fun-btn btn-sm font-weight-bold"  onclick="deletePost(<%=post_content%>)">삭제</button>
	<input type="button" class="fun-btn btn-sm font-weight-bold"  value="수정" onclick="location.href='update.do?post_id=<%=post_id%>'">
	<%} %>
	</div>
	<hr>
</div> 
	<jsp:include page="../mainpage/components/footer/footer.jsp" />


</body>
</html>