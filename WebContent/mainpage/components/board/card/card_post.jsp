<%@page import="java.net.URLEncoder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!-- -->
<c:set var="post_id" value='<%=request.getParameter("post_id") %>'/>
<c:set var="title" value='<%=request.getParameter("title") %>'/>
<c:set var="writer" value='<%=request.getParameter("writer") %>'/>
<c:set var="regdate" value='<%=request.getParameter("regdate") %>'/>
<c:set var="contents" value='<%=request.getParameter("contents") %>'/>
<c:set var="thumbnailPath" value='<%=request.getParameter("thumbnailPath") %>'/>
<c:set var="i" value='<%=request.getParameter("i") %>'/>
<a id="whole_${i }" class="card_post article" href="../post/view.do?post_id=${post_id }">
	<div class="card_post-main">
		<p class="post_id" style="display:none">${post_id }</p>
		<p class="card_post-title title">${param.title }</p>
		<div class="sm_card_list-metadata"><p class="card_post-writer small">${param.writer }</p><time class="card_post-regdate small">${param.regdate }</time></div>
		<p class="card_post-contents small">${param.contents }</p>
	</div>
	<div class="card_post-picture"><img src="${param.thumbnailPath }"/></div>
</a>
<!--  -->

