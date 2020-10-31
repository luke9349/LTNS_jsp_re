<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

	int cnt = (Integer) request.getAttribute("fileOk");

%>

<%if(cnt == 0){ %>
	<script>
		alert("등록실패");
		history.back(); // 실패시 브라우저가 직전에 기억하는 이전 페이지로 이동함
	</script>
<%}else{%>
	<script>
		alert("등록성공");
		location.href = "view.jsp";
	</script>
<%}%>
