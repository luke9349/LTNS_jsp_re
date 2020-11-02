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
<title>회원가입</title>
</head>
<body>
	<div id="wrap">
		<div id="header" class="text-center">
		<h1>
			<a id="login_logo" href="loginmain.jsp">LTNS</a>
		</h1>
		</div>
		
		<div class="container">
			<form action="" method="post">
				<table class="table table-bordered table-hover" style="text-align: center" border="1px solid #dddddd">
					<thead>
						<tr>
							<th colspan="3"><h4>회원가입</h4> </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="width: 110px;"><h5>아아디</h5></td>
							<td><input class="form-control" type="text" id="id" name="userID" maxlength="20"> </td>
							<td style="width: 110px;"><button class="btn btn-primary" onclick="rgisterCheckFunction();" type="button">중복</button> </td>
						</tr>
						
						<tr> 
							<td style="width: 110px;"><h5>비밀번호</h5></td>
							<td><input class="form-control" type="password" id="pw" name="userps" maxlength="20"> </td>
						</tr>
						
						<tr> 
							<td style="width: 110px;"><h5>비밀번호 확인</h5></td>
							<td><input class="form-control" type="password" id="pw" name="userpsch" maxlength="20"> </td>
						</tr>
						
						<tr> 
							<td style="width: 110px;"><h5>닉네임</h5></td>
							<td><input class="form-control" type="text" id="nik" name="usernik" maxlength="20"> </td>
						</tr>
						
						<tr> 
							<td style="width: 110px;"><h5>이메일</h5></td>
							<td><input class="form-control" type="email" id="email" name="useremail" maxlength="20"> </td>
							<td style="width: 110px;"><button class="btn btn-primary" onclick="rgisterCheckFunction();" type="button">요청</button> </td>
						</tr>
					</tbody>
				
				</table>
					<div class="text-center">
					<button type="submit" class="btn btn-primary" >회원가입</button>
					</div>
			</form>
		
		</div>
	

	
	</div>
	
</body>
</html>