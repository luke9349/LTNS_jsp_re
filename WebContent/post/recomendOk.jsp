<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	int cnt = (Integer)request.getAttribute("rec");
	int post_id = Integer.parseInt(request.getParameter("post_id"));
	int rec_chkes =  (int) session.getAttribute("rec_chk_chks");
	
	if(rec_chkes == 1){
		session.setAttribute("rec_chk_write", 1);
	}else{
		session.setAttribute("rec_chk_write", 0);
	}
		
		
%>


 
<%if(cnt != 0 ){ %>
	<script>
		alert("추천 성공");
		location.href = "<%=request.getContextPath() %>/post/view.do?post_id=<%=post_id%>"
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