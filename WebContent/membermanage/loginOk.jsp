<%@page import="main.java.com.view.MemberDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
    
<%
	request.setCharacterEncoding("utf-8");
	int cnt = (Integer)request.getAttribute("loginOk");   
	MemberDTO[] arrs = (MemberDTO[])request.getAttribute("info_chk");
	String nick = arrs[0].getNickname();
	System.out.println(nick);
	
%>
    
  
  
<%if(cnt ==0 ){ %>
	<script>
		alert("로그인 실패 정보가 일치하지 않습니다");
		history.back(); // 실패시 브라우저가 직전에 기억하는 이전 페이지로 이동함
	</script>
<%}else{%>
	<script>
		alert("로그인 성공  <%=nick%> 님 환영합니다.");		
		location.href = "<%=request.getContextPath() %>/board/board_list.do"
	</script>
	
	
	
	
		<!-- 세션 생성  -->
	<%
	String sessionId = session.getId();
	int sessionInterval = session.getMaxInactiveInterval();
	session.setAttribute("writer", arrs[0].getMm_id());
	session.setAttribute("login",1);
	session.setAttribute("nickname",nick);
	session.setAttribute("grade", arrs[0].getGrade());
	session.setAttribute("rec_chk_write", 0);
	%>
	
	
<%}%>