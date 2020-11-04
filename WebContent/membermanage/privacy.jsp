<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../lib/bootstrap-4.5.3-dist/css/bootstrap.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="lib/bootstrap-4.5.3-dist/js/bootstrap.js"></script>
<title>개인정보이용약관</title>
<body>
	<div id="wrap">
		<div id="header">
		
		</div>
		
			<div id="container">
			
			<form class="form-horizontal" role="form" method="post" action="javascript:alert( 'success!' );">
                <div class="form-group">
                    <label for="provision" class="col-lg-2 control-label">회원가입약관</label>
                    <div class="col-lg-10" id="provision">
                        <textarea class="form-control" rows="8" style="resize:none">약관동의
										블라블라블라블라블라블라블라블라블라블라블라블라
										블라블라블라블라블라블라블라블라블라블라블라블라
										블라블라블라블라블라블라블라블라블라블라블라블라.................
                        </textarea>
                        <div class="radio">
                            <label>
                                <input type="radio" id="provisionYn" name="provisionYn" value="Y" autofocus="autofocus" checked>
                                동의합니다.
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" id="provisionYn" name="provisionYn" value="N">
                                동의하지 않습니다.
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="memberInfo" class="col-lg-2 control-label">개인정보취급방침</label>
                    <div class="col-lg-10" id="memberInfo">
                        <textarea class="form-control" rows="8" style="resize:none">개인정보의 항목 및 수집방법
								블라블라블라블라블라블라블라블라블라블라블라블라                        
								블라블라블라블라블라블라블라블라블라블라블라블라
								블라블라블라블라블라블라블라블라블라블라블라블라.................
                        </textarea>
                        <div class="radio">
                            <label>
                                <input type="radio" id="memberInfoYn" name="memberInfoYn" value="Y" checked>
                                동의합니다.
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" id="memberInfoYn" name="memberInfoYn" value="N">
                                동의하지 않습니다.
                            </label>
                        </div>
                    </div>
                </div>
                	<div class="text-center">
					<button type="button" class="btn btn-primary"  onclick="location.href='sign-up.jsp'" >다음</button>
					</div>
                </form>
		
		</div>
		
	
	</div>

</body>
</html>