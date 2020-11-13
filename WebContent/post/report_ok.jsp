<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
    
    	int post_id = Integer.getInteger(request.getParameter("post_id")); 
    
    %>
    
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<script>
	alert("신고가 접수되었습니다.")
	location.href = "view.do?post_id=<%=post_id%>"
</script>
<body>

</body>
</html>