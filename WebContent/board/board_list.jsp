<%@page import="java.net.URLEncoder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<jsp:include page="./components/top.jsp">
	<jsp:param value="<%=URLEncoder.encode(\"리스트게시판\", \"UTF-8\") %>" name="title"/>
</jsp:include>
<c:set var="type" value="list"/>
<c:if test="${param.type != null }">
	<c:set var="type" value="${param.type }"/>
</c:if>
<link rel="stylesheet" href="../lib/bootstrap-4.5.3-dist/css/bootstrap.min.css" />
<script src="../lib/jquery.js"></script>
<script src="../lib/bootstrap-4.5.3-dist/js/bootstrap.min.js"></script>
<script src="https://kit.fontawesome.com/5d1d5aa1e7.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="./css/style.css" />
<link rel="stylesheet" id="toggleStyle"/>
<script async defer src="./js/board.js"></script>
<!-- <script async defer src="./js/actionBar.js"></script>  -->
<jsp:include page="./components/middle.jsp" />
<jsp:include page="./components/nav.jsp" />
<main class="my-2">
	<jsp:include page="./components/actionBar.jsp" />
	<c:choose>
		<c:when test="${type eq 'album' }">
			<jsp:include page="./components/album.jsp" />
		</c:when>
		<c:when test="${type eq 'post' }">
			<jsp:include page="./components/post.jsp" />
		</c:when>
		<c:otherwise>		
			<jsp:include page="./components/table.jsp" />
		</c:otherwise>
	</c:choose>
</main>
<jsp:include page="./components/footer.jsp" />
<jsp:include page="./components/bottom.jsp" />