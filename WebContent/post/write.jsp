<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String ctx = request.getContextPath();
%>   

    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> Write Page </title>
</head>

<!-- bootstrep -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>


<!-- smartedit -->
<script type="text/javascript" src="<%=ctx %>/post/S2/js/HuskyEZCreator.js" charset="utf-8"></script>
<script type="text/javascript">
var oEditors = [];
$(function(){
      nhn.husky.EZCreator.createInIFrame({
          oAppRef: oEditors,
          elPlaceHolder: "ir1", //textarea에서 지정한 id와 일치해야 합니다. 
          //SmartEditor2Skin.html 파일이 존재하는 경로
          sSkinURI: "<%=ctx%>/post/S2/SmartEditor2Skin.html",  
          htParams : {
              // 툴바 사용 여부 (true:사용/ false:사용하지 않음)
              bUseToolbar : true,             
              // 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음)
              bUseVerticalResizer : true,     
              // 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음)
              bUseModeChanger : false,         
              fOnBeforeUnload : function(){
                   
              }
          }, 
          fOnAppLoad : function(){
              //기존 저장된 내용의 text 내용을 에디터상에 뿌려주고자 할때 사용
              oEditors.getById["ir1"].exec("PASTE_HTML", [" "]);
          },
          fCreator: "createSEditor2"
      });
    
  
      //저장버튼 클릭시 form 전송
      $("#save").click(function(){
        oEditors.getById["ir1"].exec("UPDATE_CONTENTS_FIELD", []);
        $("#frm").submit();
    }); 
	return true;
  
});
 
 
function chkSubmit(){
	frm = document.forms['frm'];
	
	var title = frm["title"].value.trim();
	
	if( title == "" ){
		alert("제목이 비었습니다 제목은 필수사항 입니다.");		
		frm["title"].focus();
		return false;
	}

}
 
</script>



<body>
	<div class="container">
	   <div>
		<form name="frm" action="writeOk.do" method="post" onsubmit="return chkSubmit()">
			<table class="table">
		        <tr >
		      		<td class="text-center">
		       		<select name="category">
		       		<option value="movie" selected="selected"> 영화게시판 </option>
		       		<option value="game"> 게임게시판 </option>
		       		<option value="read">독서게시판  </option>
		       		<option value="sport"> 스포츠게시판 </option>	
		       		</select>
		       		</td>     
		            <td>
		            <input type="text" id="title" name="title" style="width:650px"/>
		            </td>
		        </tr>
		          <tr class="mt-2 text-right">
		            <td colspan="2" >
		                <input class="btn-sm" type="button" value="취소" onclick="History.back()"/>
		                <input class="btn-sm" type="submit" id="save" value="저장"/>
		              
		            </td>
		        </tr>
		        <tr class="justify-content-center">
		            <td colspan="2">
		                <textarea rows="10" cols="30" id="ir1" name="content" style="width:100%; height:350px; ">
		                </textarea>
		            </td>
		        </tr>
				</table>
				
			</form>
	  </div>
	</div>
</body>

</html>