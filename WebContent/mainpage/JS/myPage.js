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
				
				
				var getpwCheck= RegExp(/^[a-zA-Z0-9]{4,12}$/);
				//
				
				var btns = document.getElementById("sub_btns2");
				btns.onclick = function(){
					var x_form = document.forms["myforms"]["password"].value;
					if(x_form == "" || x_form == null || !getpwCheck.test(x_form)){
						alert("비밀번호는 숫자 또는 영문으로 4글자 이상입니다.")
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
		
				
				
				var btns = document.getElementById("sub_btns");
				btns.onclick = function(){
					var x_form = document.forms["myforms2"]["nickname"].value;
					if(x_form == "" || x_form == null){
						alert("닉네임 값을 입력해주세요")
						return false;
					}
					
					
				}
					
			}
		})

})
