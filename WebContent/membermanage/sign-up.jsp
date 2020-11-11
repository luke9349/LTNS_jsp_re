<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../lib/bootstrap-4.5.3-dist/css/bootstrap.css">


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../lib/bootstrap-4.5.3-dist/js/bootstrap.js"></script>



<title>회원가입</title>
</head>

<body>
	<div class="wrap text-center">
		<div id="header">
		<h1>
			<a id="login_logo" href="loginmain.jsp">
				<img alt="Login_logo" src="../images/favicon.ico">
			</a>
		</h1>
		</div>
		
		<div class="container">
		
			
			<form action="sign-up-complete.do" method="post" name="signup" id="signup" onsubmit=" return formCheck();">
			
			
				<table class="table table-bordered table-hover" style="text-align: center" border="1px solid #dddddd">
					<thead>
						<tr>
							<td colspan="3"> <h1>회원가입</h1> </td>
						</tr>
						
						<tr>
						<td colspan="3">
						<div class="privacy" id="privacy">
                        <textarea class="form-control" rows="7" style="resize:none" readonly="readonly">약관동의
										
1.  사이트는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도  사이트가 고의로 행한 범죄행위를 제외하고 이에 대하여 책임을 부담하지 아니합니다.
제 15 조 (면책조항)
2.  사이트는 회원이나 제3자에 의해 표출된 의견을 승인하거나 반대하거나 수정하지 않습니다.  사이트는 어떠한 경우라도 회원이 서비스에 담긴 정보에 의존해 얻은 이득이나 입은 손해에 대해 책임이 없습니다. 금전적 거래등과 관련하여 어떠한 책임도 부담하지 아니하고, 회원이 서비스의 이용과 관련하여 기대하는 이익에 관하여 책임을 부담하지 않습니다.
제 16 조 (재판관할)
3.  사이트와 이용자 간에 발생한 서비스 이용에 관한 분쟁에 대하여는 대한민국 법을 적용하며, 본 분쟁으로 인한 소는 대한민국의 법원에 제기합니다.
                        </textarea>
                        <div class="radio" id="radio">
                            <label>
                                <input type="radio"  id="provisionYn" name="provisionYn" value="Y" checked="checked" autofocus="autofocus">
                              			  동의합니다. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             
                             </label>
                             
                          <label>
                                <input type="radio"  id="provisionYn" name="provisionYn" value="N">
                          		      	동의하지 않습니다.
                            </label>
                        </div>
                       
                    </div>
                    </td>
                    </tr>
                    
					</thead>
					
					<tbody>
						
						<tr>
							
							<td style="width: 110px;"><h5>아아디</h5></td>
							<td colspan="2"><input class="form-control" type="text" id="id" name="id" maxlength="20" />
								<span class="error d-none" id="iderror" >  </span>
							
							</td>
						</tr>
						
						<tr> 
							<td style="width: 110px;"><h5>비밀번호</h5></td>
							<td colspan="2"><input class="form-control" type="password" id="pw" name="pw" maxlength="20"/> 
							</td>
						</tr>
						
						<tr> 
							<td style="width: 110px;"><h5>비밀번호 확인</h5></td>
							<td colspan="2"><input class="form-control" type="password" id="pwck" name="pwck" maxlength="20"/> 
								<span class="error d-none" id="pwerror" > </span>
							</td>
						</tr>
						
						<tr> 
							<td style="width: 110px;"><h5>닉네임</h5></td>
							<td colspan="2"><input class="form-control" type="text" id="nik" name="nik" maxlength="20"/> 
								<span class="error d-none" id="nikerror" >  </span>
							</td>
							
						</tr>
						
						<tr> 
							<td style="width: 110px;"><h5>이메일</h5></td>
							<td><input class="form-control" type="email" id="email" name="email" maxlength="20"/>
								<span class="error d-none" id="emailerror" >  </span> 	
							</td>
							<td style="width: 130px;"><button class="btn btn-primary" onclick="" type="button">인증번호</button> </td>
						</tr>
					</tbody>
				
				</table>
					<div class="text-center">
					<button type="submit" class="btn btn-primary" value="회원가입" id="submit" disabled="disabled">회원가입</button>
					</div>
			</form>
		
		</div>
	

	
	</div>
<script src="JS/sign-upJs.js"></script>	
</body>
</html>