<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	String url = "";
	if(request.getParameter("root") != null && !request.getParameter("root").equals(""))
		url += "&root=" + request.getParameter("root");
	if(request.getParameter("searchType") != null 
			&& !request.getParameter("searchType").equals("")
			&& request.getParameter("search") != null 
			&& !request.getParameter("search").equals("")) {
		url += "&searchType=" + request.getParameter("searchType");
		url += "&search=" + request.getParameter("search");
	}
	if(request.getParameter("page") != null && !request.getParameter("page").equals(""))
		url += "&page=" + request.getParameter("page");
	
	System.out.println(url);
%> 
<a href="<%=request.getContextPath() %>/post/write.do" class="btn btn-primary">글쓰기</a>
<div class="actionBar py-3">
  <div class="actionBtns">
    <a class="actionBtn btn" href="board_list.do?type=list<%=url%>">
      <i class="fas fa-list">list</i>
    </a>
    <a class="actionBtn btn" href="board_list.do?type=album<%=url%>">
      <i class="far fa-images">album</i>
    </a>
    <a class="actionBtn btn" href="board_list.do?type=post<%=url%>">
      <i class="far fa-address-card">post</i>
    </a>
  </div>
  <div class="actionbar__wrapper">
  <form class="form-inline" id="searchForm" name="searchForm" method="get">
    <div class="input-group flex-nowrap">
      <div class="input-group-prepend">
        <select name="searchType" id="searchType">
          <option value="title" selected>제목</option>
          <option value="content">내용</option>
          <option value="titleAndContent" selected>제목 + 내용</option>
        </select>
      </div>
      <input type="text" id="search" name="search" />
      <div class="input-group-append">
        <input class="btn btn-primary" type="submit" value="검색" />
      </div>
    </div>
  </form>
  </div>
  </div>