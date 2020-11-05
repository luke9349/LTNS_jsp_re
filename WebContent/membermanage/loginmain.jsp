<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../lib/bootstrap-4.5.3-dist/css/bootstrap.css">
<link href="loginmainstyle.css" rel="stylesheet" type="text/css">

<script type="text/javascript" src="../lib/bootstrap-4.5.3-dist/js/bootstrap.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../lib/bootstrap-4.5.3-dist/js/bootstrap.js"></script>
<title>로그인화면</title>
</head>

<body id="login_main">
	<div class="wrap text-center">
		<div id="header">
		<h1>
			<a id="login_logo" href="loginmain.jsp">
				<img alt="Login_logo" src="../board/favicon.ico">
			</a>
		</h1>
		</div>
		
		<div id="container">
			<div class="content">
				
				<form action="">
					<fieldset class="login_form"> 
						<div class="id_area">
							<div class="input_row" id="id_area">
								<span class="input_box">
									
									<input type="text" id="id" name="id" class="int" maxlength="41" placeholder="아이디" value>	
								</span>
							</div>
							<div class="error" id="err_empty_id" style="display: none">
								아이디를 입력해주세요
							</div>
						</div>
						<div class="pw_area">
							<div class="input_row" id="pw_area">
								<span class="input_box">
									<input type="password" id="pw" name="pw" placeholder="비밀번호" class="int" maxlength="16">
								</span>
								
							</div>
						<input type="submit" title="로그인" alt="로그인" value="로그인" class="btn_global" id="log_login">
						</div>
					</fieldset>
				</form>
				<div class="position_a">
					<div class="find_info">
						<a target="_blank" id="idinquiry" href="find-id.jsp"> 아이디 찾기</a>
						<span class="bar" aria-hidden="true" > | </span>
						
						<a target="_blank" id="pwinquiry" href="find-password.jsp"> 비밀번호 찾기</a>
						<span class="bar" aria-hidden="true" > | </span>
						
						<a target="_blank" id="signup" href=""> 회원가입</a>
						<span class="bar" aria-hidden="true" > | </span>
						
						<a target="_blank" id="signup" href=""> 게스트로그인</a>
						
							
					</div>
				</div>
			</div>
		
		
		</div>
		<div id="footer">
			
		
		</div>
		
	</div>
</body>
</html>