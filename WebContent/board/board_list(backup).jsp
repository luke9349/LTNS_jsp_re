<%@page import="java.net.URLEncoder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
<c:set var="root" value="free" />
<c:if test="${param.root != null }">
	<c:set var="type" value="${param.root }"/>
</c:if>
<c:set var="type" value="list" />
<c:if test="${param.type != null }">
	<c:set var="type" value="${param.type }"/>
</c:if>
<jsp:include page="./components/title.jsp">
	<c:choose>
		<c:when test="${type }">		
			<jsp:param value="<%=URLEncoder.encode(\"리스트게시판\", \"UTF-8\") %>" name="title"/>
		</c:when>
	</c:choose>
</jsp:include>
<%--
<c:set var="page" value="1"/>
<c:if test="${param.page != null }">
	<c:set var="page" value="${param.page }"/>
</c:if>
 --%>
<link rel="stylesheet" href="../lib/bootstrap-4.5.3-dist/css/bootstrap.min.css" />
<script src="../lib/jquery.js"></script>
<script src="../lib/bootstrap-4.5.3-dist/js/bootstrap.min.js"></script>
<script src="https://kit.fontawesome.com/5d1d5aa1e7.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="./css/styles.css" />
<c:if test="${type eq 'album'}">
	<link rel="stylesheet" href="./css/album.css"/>
</c:if>
<c:if test="${type eq 'post'}">
	<link rel="stylesheet" href="./css/post.css"/>
</c:if>
<script async defer src="./js/board.js"></script>
</head>
<body class="container">
<jsp:include page="./components/nav.jsp" />
<main class="my-2">
	<jsp:include page="./components/actionBar.jsp" />
	<c:choose>
		<c:when test="${type eq 'album' }">
			<jsp:include page="./components/album.jsp" />
			<jsp:include page="./components/pagination.jsp" />
		</c:when>
		<c:when test="${type eq 'post' }">
			<jsp:include page="./components/post.jsp" />
		</c:when>
		<c:otherwise>		
			<jsp:include page="./components/table(backup-list).jsp" />
			<jsp:include page="./components/pagination.jsp" />
		</c:otherwise>
	</c:choose>
</main>
<jsp:include page="./components/footer.jsp" />
</body>
</html>