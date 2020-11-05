<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
 <%
	int fileUpdateOk = (Integer) request.getAttribute("fileUpdateOk"); 
	int post_id = Integer.parseInt(request.getParameter("post_id"));
	int streinger = Integer.parseInt(request.getParameter("streinger"));
	int rec_chk = Integer.parseInt(request.getParameter("rec_chk"));
 %>   
 
    
 <%if(fileUpdateOk ==0 ){ %>
	<script>
		alert("등록실패");
		history.back(); // 실패시 브라우저가 직전에 기억하는 이전 페이지로 이동함
	</script>
<%}else{%>
	<script>
		alert("수정성공");		
		location.href ='view.do?post_id=<%=post_id%>&writer=<%=streinger%>&rec_chk=<%=rec_chk%>';
	</script>
<%}%>   