<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

	<%
		int ok = (Integer)request.getAttribute("joinOK");
		int ok2 = (Integer)request.getAttribute("insertOK");
	
	%>

    
 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../lib/bootstrap-4.5.3-dist/css/bootstrap.css">
<link href='CSS/sign-upCSS.css' rel='stylesheet' style='text/css'/>





<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../lib/bootstrap-4.5.3-dist/js/bootstrap.js"></script>
<title>회원가입 완료</title>
</head>

<body>





	<div class="wrap text-center" id="wrap">
	
		<div class="container text-center">
			
			<table class="table-bordered table-hover" style="text-align: center" border="1px solid #dddddd">
				<thead>
					<tr >
						<td colspan="2"> 회원가입 완료 </td>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<td style="width: 110px;"><h5>아아디</h5></td>
						<td><%=id %> </td>
					</tr>
					
					<tr>
						<td style="width: 110px;">비밀번호</td>
						<td> <%=pw %> </td>
					</tr>
					
					<tr>
						<td style="width: 110px;">닉네임</td>
						<td> <%=nik %> </td>
					</tr>
					
					<tr>
						<td style="width: 110px;">이메일</td>
						<td> <%=email %> </td>
					</tr>
				
				

				
				</tbody>
			
			</table>
			<div class="text-center">
					<button type="button" class="btn btn-primary" value="확인" onclick="location.href=''"></button>
					</div>
		
		</div>
		
	</div>


<script src="JS/sign-up-completeJS.js"></script>
</body>
</html>