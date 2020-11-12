

function emailSend() {
	let clientEmail = $("#email").val();
	
	$.ajax({
		
		type: "post",
		url: "sign-up.ajax?email="+$('#email').val(),
		data:{email:clientEmail},
		success : function(data) {
			
			
		},
		error : function() {
			alert('이메일 오류');
			
		}
		
		
	});
	
	
	
	
	
}