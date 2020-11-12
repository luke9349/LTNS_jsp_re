var chk=null;

function emailSend() {
	let clientEmail = $("#email").val();
	
	$.ajax({
		
		type: "post",
		url: "email.ajax?email="+$('#email').val(),
		success : function(data) {
			console.log(data);
			chk=data;
//			if (data.equals($("#emailAC"))) {
//				
//				alert("이메일인증완료");
//				
//			}
			
			
		},
		error : function() {
			alert('이메일 오류');
			
		}
		
		
	});	
	
}

function emailChk() {
	console.log(chk);
	emailck = $("#emailAC").val();
	
	if (chk == emailck) {
		
		alert("이메일 인증완료")
		
		chk=null;
		
		$("#emailACbtn").attr("disabled", false)
		
		
	}else{
		
		alert("이메일 인증실패")
	}
	
	
	
	
}