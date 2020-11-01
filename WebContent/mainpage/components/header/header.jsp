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
	          		<a class="nav-link" href="board_list.jsp?root=free">자유게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.jsp?root=reading">독서게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.jsp?root=movie">영화게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.jsp?root=sports">스포츠게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.jsp?root=game">게임게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.jsp?root=empathize">공감게시판</a>
	         	</li>
	         	<li class="nav-item">
	           		<a class="nav-link" href="board_list.jsp?root=viewcnt">조회수게시판</a>
	         	</li>
	       	</ul>

	    </div>
	</nav>
</header>