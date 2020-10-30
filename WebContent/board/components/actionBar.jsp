<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="actionBar py-3">
  <div class="actionBtns">
    <a class="actionBtn btn" href="board_list.jsp?type=list">
      <i class="fas fa-list">list</i>
    </a>
    <a class="actionBtn btn" href="board_list.jsp?type=album">
      <i class="far fa-images">album</i>
    </a>
    <a class="actionBtn btn" href="board_list.jsp?type=post">
      <i class="far fa-address-card">post</i>
    </a>
  </div>
  <form id="searchForm" name="searchForm" method="post" action="">
    <div class="search__input input-group flex-nowrap">
      <div class="input-group-prepend">
        <select name="searchType" id="searchType">
          <option value="" selected>제목</option>
          <option value="">내용</option>
          <option value="">제목 + 내용</option>
        </select>
      </div>
      <input type="text" id="search" name="search" />
      <div class="input-group-append">
        <input class="btn btn-primary" type="submit" value="검색" />
      </div>
    </div>
  </form>
</div>