<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../lib/bootstrap-4.5.3-dist/css/bootstrap.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="../lib/bootstrap-4.5.3-dist/js/bootstrap.js"></script>
<title>아이디찾기</title>
</head>
<body>
	<div id="wrap">
		<div id="header" class="text-center">
			<h1>
				<a id="login_logo" href="loginmain.jsp">LTNS</a>
			</h1>
		
			<nav class="navbar navbar-expand-lg bg-light">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="find-id.jsp">아이디 찾기</a>
					</li>
				</ul>
				
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="find-password.jsp">비밀번호 찾기</a>
					</li>
				</ul>
			
			</nav>
		</div>
		
		<div class="continer">
			<form action="" method="post">
				<table class="table table-bordered table-hover" style="text-align: center" border="1px solid #dddddd">
					<thead>
							<tr>
							<th colspan="3"><h4>아이디 찾기</h4> </th>
							</tr>
					</thead>
					
					<tbody>
						<tr>
							<td style="width: 110px;"><h5>이메일</h5></td>
							<td><input class="form-control" type="email" id="email" name="useremail" maxlength="20"> </td>
							<td style="width: 110px;"><button class="btn btn-primary" onclick="rgisterCheckFunction();" type="button">요청</button> </td>
						</tr>
					</tbody>
				</table>
					<div class="text-center">
					<button type="submit" class="btn btn-primary text-center"  >확인</button>
					</div>
			</form>
		
		</div>
		
	</div>

</body>
</html>