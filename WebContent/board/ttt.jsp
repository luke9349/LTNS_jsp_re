<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	
<c:set var="root" value="free" />
<c:if test="${param.root != null }">
	<c:set var="type" value="${param.root }"/>
</c:if>

<c:set var="type" value="list" />
<c:if test="${param.type != null }">
	<c:set var="type" value="${param.type }"/>
</c:if>	
	
<c:choose>	
	<c:when test="${root eq 'free' }">
		<c:set value="자유게시판" var="mainTopic"/>				
	</c:when>
	<c:when test="${root eq 'reading' }">		
		<c:set value="독서게시판" var="mainTopic"/>							
	</c:when>
	<c:when test="${root eq 'movie' }">					
		<c:set value="영화게시판" var="mainTopic"/>							
	</c:when>
	<c:when test="${root eq 'sports' }">
		<c:set value="스포츠게시판" var="mainTopic"/>										
	</c:when>
	<c:when test="${root eq 'game' }">		
		<c:set value="게임게시판" var="mainTopic"/>													
	</c:when>
	<c:when test="${root eq 'empath' }">					
		<c:set value="공감게시판" var="mainTopic"/>													
	</c:when>
	<c:when test="${root eq 'viewcnt' }">		
		<c:set value="조회수게시판" var="mainTopic"/>																
	</c:when>
</c:choose>
	
	
	
	
<c:choose>
	<c:when test="${type eq 'list'}">
		<c:set value="리스트" var="subTopic"/>
		<c:set value="./components/list.jsp" var="componentPath" />
	</c:when>
	<c:when test="${type eq 'album'}">	
		<c:set value="앨범" var="subTopic"/>
		<c:set value="./components/album.jsp" var="componentPath" />
	</c:when>
	<c:when test="${type eq 'post'}">
		<c:set value="포스트" var="subTopic"/>
		<c:set value="./components/post.jsp" var="componentPath" />	
	</c:when>
</c:choose>