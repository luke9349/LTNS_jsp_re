<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

	int report_man = (int) session.getAttribute("writer");
	int post_id = Integer.parseInt(request.getParameter("post_id"));


	System.out.println(report_man);
%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Report page</title>
</head>

<!-- css link  -->
 <link rel="stylesheet" type="text/css" href="CSS/report.css">
 <link rel="stylesheet" type="text/css" href="../footer/css/footer.css">
 <link rel="stylesheet" type="text/css" href="../header/css/header.css">

<!-- javascript link -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="JS/view.js"></script>

<!-- fontasome -->
<script src="https://kit.fontawesome.com/5ccafa9b7a.js" crossorigin="anonymous"></script> 

<!-- bootstrep -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

<body class="container">
<h6> 특정 페이지 신고하기</h6>
<hr>

<div class="border">


		<div class="jumbotron bg-white">
			<h1>신고하기 </h1>	
			<span> LTNS(주) 서비스 이용약관에 기존하여  서비스 운영원칙에 따라 <br> 불량 이용자 처리 규정을 정하고 있습니다.</span>
		</div> <!-- end jumbo -->

	<hr>


		<div class="report_section">
			<table class="table" style="width:100%">
			<tr>
			<th class="text-center">
				 <h3 class="border"> 신고 사항 </h3>
			</th>
			<th>
				 <select class="select_s ">
					<option selected="selected">부적절한 컨탠츠</option>
					<option>명예훼손</option>
					<option>욕설과 비방</option>
				</select>
			</th>
			</tr>
			</table>
		</div> <!-- end report -->
</div>
	
</body>
</html>