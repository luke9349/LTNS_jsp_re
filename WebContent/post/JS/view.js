/* toggle btn*/


$(document).ready(function(){	
	
	
	var rec_btn = document.getElementById("rec_btn");
	
	var toggles = true;
	
	
	
	
    rec_btn.onclick = function(){
        if(toggles){
        	alert("test");
        	toggles = false;
        }else{
        	alert("토글완료");
        }
        	
    
    }

})