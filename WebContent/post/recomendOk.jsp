<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	int cnt = (Integer)request.getAttribute("rec");

%>


 
<%if(cnt != 0 ){ %>
	<script>
		alert("추천 성공");
		location.href = "<%=request.getContextPath() %>/post/view.do?post_id=6&writer=2&rec_chk=1"
	</script>
<%}else{%>
	<script>
		alert("추천 성공 실패" );		
		history.back();
	</script>
<%}%>

<%-- 
<%if(cnts == 0 ){ %>
	<script>
		alert("추천 삭제 성공");
		location.href = "<%=request.getContextPath() %>/post/view.do?post_id=6&writer=2&rec_chk=0"
	</script>
<%}else{%>
	<script>
		alert("추천 삭제 실패" );		
		history.back();
	</script>
<%}%>
--%>