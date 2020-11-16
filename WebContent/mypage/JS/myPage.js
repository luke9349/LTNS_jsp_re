$(document).ready(function() {


	var forms = document.getElementById("#myforms")
	var forms2 = document.getElementById("#myforms2")
	var cnt = 0;
	var cnt2 = 0;

	

		$("#rev_btn").on("click",function(){
				if(cnt==0){
				cnt ++;
				var x = document.createElement("INPUT");
				var y = document.createElement("INPUT");
				x.setAttribute("type", "password");
				x.setAttribute("name", "password");
				x.setAttribute("class", "submit_info");
				
				y.setAttribute("type", "submit");
				y.setAttribute("value", "변경");
				y.setAttribute("class", "submit_btn");
				y.setAttribute("id", "sub_btns2");
				
			
				document.getElementById("myforms").appendChild(x);
				document.getElementById("myforms").appendChild(y);
				
				
				var getpwCheck= RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/);
				//
				
				var btns = document.getElementById("sub_btns2");
				btns.onclick = function(){
					var x_form = document.forms["myforms"]["password"].value;
					if(x_form == "" || x_form == null || !getpwCheck.test(x_form)){
						alert("비밀번호는 대문자와 특수문자 포함 8자리 입니다. ")
						return false;
					}
					
			
				}
				
			}
		})
		
	
		
		
			$("#rev_btn2").on("click",function(){
				if(cnt2==0){
					
				cnt2 ++;
				var x = document.createElement("INPUT");
				var y = document.createElement("INPUT");
				
				x.setAttribute("type", "text");
				x.setAttribute("name", "nickname");
				x.setAttribute("class", "submit_info")
				x.setAttribute("maxlength", "5")
				
				y.setAttribute("type", "submit");
				y.setAttribute("value", "변경");
				y.setAttribute("class", "submit_btn");
				y.setAttribute("id", "sub_btns");
				
				
				document.getElementById("myforms2").removeChild(document.getElementById("spans"));
				document.getElementById("myforms2").appendChild(x);
				document.getElementById("myforms2").appendChild(y);
		
				
<<<<<<< HEAD
=======
				 var getNik= RegExp(/^[a-zA-Z0-9가-힣]{2,5}$/);
				
				
>>>>>>> branch 'master' of https://github.com/luke9349/LTNS_jsp_re.git
				var btns = document.getElementById("sub_btns");
				btns.onclick = function(){
					var x_form = document.forms["myforms2"]["nickname"].value;
					if(x_form == "" || x_form == null || !getNik.test(x_form)){
						alert("닉네임 값을 입력해주세요")
						return false;
					}
					
					console.log(x_form);
					
					//유효성
					var getNik= RegExp(/^[a-zA-Z0-9가-힣]{2,5}$/);	
					
					if(!getNik.test(x_form)){ 
						alert("2 ~ 5 글자 한글,영어,숫자가능2"); 
						return false;
						} 
					
					
					
					 console.log( "../membermanage/sign-up.ajax?nik="+x_form);
					 
					 var ajaxreturn=false;
					 $.ajax({
							type : "GET",
							url :  "../membermanage/sign-up.ajax?nik="+x_form,   //닉네임 확인
							async: false,
							success : function(data){
								console.log(data);
								
								if(data != 0){
									alert("사용중인 닉네임입니다");
								}else if(data == 0){
									console.log("변경 성공");
									ajaxreturn=true;
								}
								
							},
							error : function() {
								alert("실패");
							}
					 });
					 console.log(ajaxreturn);
					 return ajaxreturn;
//					return false; //디폴트는 false
					
				}
					
			}
		})

})
