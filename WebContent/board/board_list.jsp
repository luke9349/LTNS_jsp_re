<%@page import="java.net.URLEncoder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="root" value="NOTICE" />
<c:if test="${param.root != null }">
	<c:set var="root" value="${param.root }"/>
</c:if>

<c:set var="type" value="list" />
<c:if test="${param.type != null }">
	<c:set var="type" value="${param.type }"/>
</c:if>	

<%!
	String topic = null;
	String title = null;
%>
	
<c:choose>	
	<c:when test="${root eq 'NOTICE' }">
		<% topic = "공지사항"; %>				
	</c:when>
	<c:when test="${root eq 'BOOK' }">		
		<% topic = "도서게시판"; %>						
	</c:when>
	<c:when test="${root eq 'MOVIE' }">					
		<% topic = "영화게시판"; %>						
	</c:when>
	<c:when test="${root eq 'SPORTS' }">
		<% topic = "운동게시판"; %>										
	</c:when>
	<c:when test="${root eq 'GAME' }">		
		<% topic = "게임게시판"; %>											
	</c:when>
	<c:when test="${root eq 'empathize' }">					
		<% topic = "공감게시판"; %>												
	</c:when>
	<c:when test="${root eq 'viewcnt' }">		
		<% topic = "조회수게시판"; %>														
	</c:when>
</c:choose>	
	
<c:choose>
	<c:when test="${type eq 'list'}">
		<% title = topic + "-리스트"; %>
		<c:set value="./components/list.jsp" var="componentPath" />
	</c:when>
	<c:when test="${type eq 'album'}">	
		<% title = topic + "-앨범"; %>
		<c:set value="./components/album.jsp" var="componentPath" />
	</c:when>
	<c:when test="${type eq 'post'}">
		<% title = topic + "-포스트"; %>
		<c:set value="./components/post.jsp" var="componentPath" />	
	</c:when>
</c:choose>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
<jsp:include page="./components/title.jsp">
	<jsp:param value="<%=URLEncoder.encode(title, \"UTF-8\") %>" name="title"/>
</jsp:include>
<jsp:include page="./components/lib.jsp"></jsp:include>
<c:if test="${type eq 'album'}">
	<link rel="stylesheet" href="./css/album.css"/>
</c:if>
<c:if test="${type eq 'post'}">
	<link rel="stylesheet" href="./css/post.css"/>
</c:if>
<!-- 
<script async defer src="./js/board.js"></script>

<script async defer src="./js/search.js"></script>
<script async defer src="./js/ajaxTest.js"></script>
 -->
<script async defer type="module" src="./js/boardMain.js"></script>
<script async defer src="./js/nav.js"></script>

</head>
<body class="container">
<jsp:include page="./components/nav.jsp" />
<main class="my-2">
	<div class="board__title"><%=topic %></div>
	<jsp:include page="./components/actionBar.jsp">
		<jsp:param value="${root }" name="root"/>
	</jsp:include>
	<jsp:include page="${componentPath }" />
	<c:if test="${type ne post}">
		<jsp:include page="./components/pagination.jsp" />
	</c:if>
</main>
<jsp:include page="./components/footer.jsp" />
</body>
</html>