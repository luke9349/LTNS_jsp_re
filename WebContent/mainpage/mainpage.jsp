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
	<link rel="stylesheet" href="../lib/bootstrap-4.5.3-dist/css/bootstrap.min.css" />
	<script src="../lib/jquery.js"></script>
	<script src="../lib/bootstrap-4.5.3-dist/js/bootstrap.min.js"></script>
	<script src="https://kit.fontawesome.com/5d1d5aa1e7.js" crossorigin="anonymous"></script>

	<link href="./CSS/default.css">
	<link href="./CSS/board/empath_board.css" rel="stylesheet" type="text/css">
	<link href="./CSS/board/nearest_board.css" rel="stylesheet" type="text/css">
	<link href="./CSS/board/viewcnt_board.css" rel="stylesheet" type="text/css">
	<link href="./CSS/board/card/card_post.css" rel="stylesheet" type="text/css">
	<link href="./CSS/board/card/sm_card_album.css" rel="stylesheet" type="text/css">
	<link href="./CSS/board/card/sm_card_list.css" rel="stylesheet" type="text/css">
	<link href="./CSS/board/card/sm_card_post.css" rel="stylesheet" type="text/css">
	<link href="./CSS/header/header.css" rel="stylesheet" type="text/css">
	<link href="./CSS/footer/footer.css" rel="stylesheet" type="text/css">
</head>
<body class="container">
	<jsp:include page="./components/header/header.jsp" />
	<main class="my-2">
		<jsp:include page="./components/board/viewcnt_board.jsp"/>
		<jsp:include page="./components/board/empath_board.jsp"/>
		<jsp:include page="./components/board/nearest_board.jsp"/>
	</div>
	<jsp:include page="./components/footer/footer.jsp" />
</body>
</html>