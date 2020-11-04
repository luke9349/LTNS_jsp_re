<%@page import="main.java.com.model.post.WriteDTO"%>
<%@page import="main.java.com.model.DTO"%>
<%@page import="main.java.com.model.post.FileWriteDTO"%>
<%@page import="java.io.FileReader"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ page import="java.io.*" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>


<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%	//dao를 사용한 트랜잭션
	
	WriteDTO[] arr = (WriteDTO[])request.getAttribute("views");
	FileWriteDTO[] file_info = (FileWriteDTO[])request.getAttribute("contents_view");
	
	
	//정보 읽어오기 
	String title = arr[0].getTitle();
	String name = arr[0].getWriter(); 
	String date = arr[0].getRegDate();
	int viewCnt = arr[0].getViewCnt();
	String category = arr[0].getCategory();
	int post_content = arr[0].getPost_contents();
	int post_id = Integer.parseInt(request.getParameter("post_id"));

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

    
<%
	if( arr == null || arr.length ==0){
%>
	<script>
		alert("해당정보가 삭제되거나 없습니다");
		history.back();
	</script>
<%
	return;
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

</script>

<body>
	<!--  헤더  -->
	<jsp:include page="../mainpage/components/header/header.jsp" />



<div class="container col-12 mt-2">
	<!-- 제목 카테고리  -->
	<div class="top title">
		<h3>[<%=category %>]  &nbsp; [<%=title %>]</h3> 
	</div>
	<hr>
	<!-- 작성자 시간 조회수 추천수 -->
	<div class="d-block">
		<table>
		<tr>
		<th>[<%=name %>] </th> <th>[<%=date %>]</th> <th>[<%=viewCnt %>]</th> <th>[<%=post_content %>]</th>
		</tr>
		</table> 
	</div>
	<hr>
	<!-- 내용 -->
	<div class="centents">
		<h5><%=contents %> </h5> 
		<div class="text-center"> <br>
		<!-- 추천버튼 -->
		
		<input id="rec_btn" type="button" value="추천하기" class="text-center btn-lg"> <br>
		
		
		
		</div>
	</div>
	<hr>
	<div class="text-right">
	<input type="button" class="fun-btn btn-sm font-weight-bold"  value="취소" onclick='back()'>
	<button type="button" class="fun-btn btn-sm font-weight-bold"  onclick="deletePost(<%=post_content%>)">삭제</button>
	<input type="button" class="fun-btn btn-sm font-weight-bold"  value="수정" onclick="location.href='update.do?post_id=<%=post_id%>'">
	
	</div>
	<hr>
</div> 
	<jsp:include page="../mainpage/components/footer/footer.jsp" />


</body>
</html>