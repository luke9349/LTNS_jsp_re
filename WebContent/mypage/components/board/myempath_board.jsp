<%@page import="java.net.URLEncoder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@page import="main.java.com.model.*" %>
<%@page import="main.java.com.model.mainpage.*" %>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>LTNS_jsp</title>
</head>
<body>

<!-- div 이외 부분은 실행시 주석화 할 것! -->
<div id="mypost_board" class="sm_board card">
	<div class="board">
		<h3><a href="#">공감한 글 게시판</a></h3>
				<%
				System.out.println("공감한 글 게시판:"+request.getAttribute("mypost_board"));
				DTO[] dtos=((DTO[])request.getAttribute("mypost_board"));
				
				for(DTO v: dtos){
					System.out.println("내가쓴글게시판 dto닉넴 확인:"+((Post_DTO)v).getNickname());
					
				}
				%>
				<c:forEach var="dto" items="${mypost_board }">
					<hr>
					<jsp:include page="./card/sm_card_list.jsp" >
						<jsp:param name="post_id" value="${dto.post_id }"/>
						<jsp:param name="title" value="${dto.post_contents.title }"/>
						<jsp:param name="regdate" value="${dto.regdate }"/>
						<jsp:param name="writer" value="${dto.nickname }"/>
					</jsp:include>
				</c:forEach>
				<!-- 방안1.프론트 단에서 처리 :  response된 데이터를, ajax와 script를 이용해, 값을 카드에 넣어주기. json 객체 활용 (비추) -->
				<!-- 방안2.백 단에서 처리 :  ajax와 script를 이용해, 값을 카드에 넣어주기. json 객체 활용 (for문 사용해야하나?) 
				include 되야할 것에 변수를 어떻게 넘길까?-->
			
		
	</div>
</div>
<!-- div 이외 부분은 실행시 주석화 할 것! -->

</body>
</html>