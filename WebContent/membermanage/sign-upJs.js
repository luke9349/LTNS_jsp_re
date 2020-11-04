
	
	


	function formCheck(signup) {
		
		
		var getemail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/); 
		var getCheck= RegExp(/^[a-zA-Z0-9]{4,12}$/); 
		var getNik= RegExp(/^[a-zA-Z0-9가-힣]{2,5}$/); 
		
		
		console.log($("#provisionYn").val());
		
		//약관동의 확인
		if($("#provisionYn").val() == "Y" || $("#provisionYn").val() == ""){ alert("약관동의 확인"); return false;}
		
		//아이디 공백 확인 
		if($("#id").val() == ""){
			 alert("아이디 입력바람");
			 $("#id").focus(); 
			return false; 
		} 
		
		//아이디 유효성검사 
		if(!getCheck.test($("#id").val())){ alert("아이디형식에 맞게 입력해주세요"); $("#id").val(""); $("#id").focus(); return false; } 
		
		//비밀번호 공백 확인
		 if($("#pw").val() == ""){ alert("패스워드 입력바람"); $("#pw").focus(); return false; } 
		
		//아이디 비밀번호 같음 확인 
		if($("#id").val() == $("#pw").val()){ alert("아이디와 비밀번호가 같습니다"); $("#pw").val(""); $("#pw").focus(); return false; } 
		
		//비밀번호 유효성검사 
		if(!getCheck.test($("#pw").val())){ alert("비밀번호형식에 맞게 입력해주세요"); $("#pw").val(""); $("#pw").focus(); return false; } 
		
		//비밀번호 확인란 공백 확인 
		if($("#pwck").val() == ""){ alert("패스워드 확인란을 입력해주세요"); $("#pwck").focus(); return false; } 
		
		//비밀번호 서로확인 
		if($("#pw").val() != $("#pwck").val()){ alert("비밀번호가 상이합니다"); $("#pw").val(""); $("#pwck").val(""); $("#pw").focus(); return false; } 
		
		//닉네임 공백 확인
		if($("nik").val() ==""){alert("닉네임 입력"); $("#nik").focus(); return false;}
		
		//닉네임 유효성 검사
		if(!getNik.test($("#nik").val())){alert("닉네임형식이맞지않다"); $("#nik").val(""); $("nik").focus(); return false;}
		
		//이메일 공백 확인 
		if($("#email").val() == ""){ alert("이메일을 입력해주세요"); $("#email").focus(); return false; } 
		
		//이메일 유효성 검사 
		if(!getemail.test($("#email").val())){ alert("이메일형식에 맞게 입력해주세요"); $("#email").val(""); $("#email").focus(); return false; }
		
		
	
	}
	
	