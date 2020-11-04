<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<header>
	<div id="login">
     	<a class="nav__login btn btn-primary mr-2">로그인</a>
       	<a class="btn btn-secondary">로그아웃</a>
	</div>
	<div>
		<a class="navbar-brand" href="#">
	    	<img src="./logo.png" alt="logo" class="navbar__logo"/>
	    </a>
	</div>
	<nav class="navbar navbar-expand-sm navbar-light bg-light">
	     <button
	       class="navbar-toggler"
	       type="button"
	       data-toggle="collapse"
	       data-target="#navbarSupportedContent"
	       aria-controls="navbarSupportedContent"
	       aria-expanded="false"
	       aria-label="Toggle navigation"
	     >
	     	<span class="navbar-toggler-icon"></span>
	     </button>
	     <div class="collapse navbar-collapse" id="navbarSupportedContent">
	     	<ul class="navbar-nav mr-auto">
	        	<li class="nav-item">
	          		<a class="nav-link" href="board_list.do?root=NOTICE">공지사항</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.do?root=MOVIE">영화게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.do?root=BOOK">도서게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.do?root=SPORTS">운동게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.do?root=GAME">게임게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.do?root=EMPATHIZE">공감게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.do?root=VIEWCNT">조회수게시판</a>
	         	</li>
	       	</ul>

	    </div>
	</nav>
</header>