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
				
			
				document.getElementById("myforms").appendChild(x);
				document.getElementById("myforms").appendChild(y);
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
				
				y.setAttribute("type", "submit");
				y.setAttribute("value", "변경");
				y.setAttribute("class", "submit_btn");
				
				document.getElementById("myforms2").removeChild(document.getElementById("spans"));
				document.getElementById("myforms2").appendChild(x);
				document.getElementById("myforms2").appendChild(y);
				
			}
		})
	

})
