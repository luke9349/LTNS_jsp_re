<%@page import="java.net.URLEncoder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!-- div 이외 부분은 실행시 주석화 할 것! -->
<c:set var="i" value='<%=request.getParameter("i") %>'/>
<a class="sm_card_list list" href="#">
	<p class="sm_card_list-title title">${viewcnt_board[i].title }</p>
	<div class="sm_card_list-metadata"><p class="sm_card_list-writer small">${viewcnt_board[i].writer }</p><time class="sm_card_list-regdate small">${viewcnt_board[i].regdate }</time></div>
</a>
<!-- div 이외 부분은 실행시 주석화 할 것! -->
