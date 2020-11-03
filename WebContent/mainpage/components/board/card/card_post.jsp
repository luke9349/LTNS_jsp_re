<%@page import="java.net.URLEncoder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!-- div 이외 부분은 실행시 주석화 할 것! -->
<c:set var="i" value='<%=request.getParameter("i") %>'/>
<a id="whole_${i }" class="card_post article" href="#">
	<div class="card_post-main">
		<p class="card_post-title title">제목</p>
		<div class="sm_card_list-metadata"><p class="card_post-writer small">작성자</p><time class="card_post-regdate small">2020-12-25 22:30</time></div>
		<p class="card_post-contents small">내용askljdhkadfjhga;;iasdngfv;laksdfoaiedghja;oisdaso;dfkjasdlfj</p>
	</div>
	<div class="card_post-picture">사진</div>
</a>
<!-- div 이외 부분은 실행시 주석화 할 것! -->

