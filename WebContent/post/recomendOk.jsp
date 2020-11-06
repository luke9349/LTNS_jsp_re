<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<%
	int cnt = (Integer)request.getAttribute("rec");
	int post_id = Integer.parseInt(request.getParameter("post_id"));
	
%>


<% if(cnt == 1){%>
	<script>
	alert("성공")
	location.href = "view.do?post_id=<%=post_id%>"
	</script>
	
<%}%>