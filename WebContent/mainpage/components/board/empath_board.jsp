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
<div id="empath_board" class="sm_board">
	<div><h2>공감 게시판</h2></div> <a href="#">더보기</a><br>
	<jsp:include page="./card/sm_card_post.jsp" />
	<jsp:include page="./card/sm_card_post.jsp" />
	<jsp:include page="./card/sm_card_post.jsp" />
	<!-- 방안1.프론트 단에서 처리 :  response된 데이터를, ajax와 script를 이용해, 값을 카드에 넣어주기. json 객체 활용 (비추) -->
	<!-- 방안2.백 단에서 처리 :  ajax와 script를 이용해, 값을 카드에 넣어주기. json 객체 활용 (for문 사용해야하나?) 
	include 되야할 것에 변수를 어떻게 넘길까?-->
	<script src="../../JS/board/cardmaker_empath_board.js"></script>
	
</div>
<!-- div 이외 부분은 실행시 주석화 할 것! -->

</body>
</html>