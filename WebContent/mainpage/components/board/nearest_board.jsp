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
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>LTNS_jsp</title>
</head>
<body>

<!-- div 이외 부분은 실행시 주석화 할 것! -->
<div>
	<div><h2>인기 게시판</h2></div> <a href="#">더보기</a><br>
	
	<jsp:include page="./card/card_post.jsp" />
	<jsp:include page="./card/card_post.jsp" />
	<jsp:include page="./card/card_post.jsp" />
	<script src="../../JS/board/cardmaker_nearest_board.js"></script>
	
	<script src="../../JS/board/nearest_board.js"></script>
	<button>추가 글 버튼</button>
</div>


</body>
</html>