<%@page import="main.java.com.post.beans.WriteDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.text.SimpleDateFormat" %>
<% 
	int currval = (Integer) request.getAttribute("fileOk"); 
	int writecnt = (Integer) request.getAttribute("result");

 %>
 
 
<%if(currval ==0 ){ %>
	<script>
		alert("등록실패");
		history.back(); // 실패시 브라우저가 직전에 기억하는 이전 페이지로 이동함
	</script>
<%}else{%>
	<script>
		alert("등록성공" + <%=currval%>);		
		location.href ='list.do';
	</script>
<%}%>




 
 
 
 
 
 


    
    
    