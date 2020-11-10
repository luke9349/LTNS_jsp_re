<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%
	String ctx = request.getContextPath();
	String saveDirectory =	getServletContext().getRealPath("/") + "data";
	System.out.println(saveDirectory + "세이브디렉토리입니다.");
	System.out.println(ctx + "/"+ "data" +"/");
	String writer = request.getParameter("writer");
	System.out.println("asdlkjasdlkjals;;djkl;: " + writer);

	//게스트 처리하기 
	
	int login_chk = (int)session.getAttribute("login");
	String garde = (String)session.getAttribute("grade");
	
	
%>  
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<title> Write Page </title>
</head>


<%if(login_chk == 0){%> 
<script>
alert("게스트는 글을 쓸수 없어요");
location.href = history.back()
</script>

<%} %>




<!-- css link  -->
 <link rel="stylesheet" type="text/css" href="CSS/Write.css">
 <link rel="stylesheet" type="text/css" href="../footer/css/footer.css">
 <link rel="stylesheet" type="text/css" href="../header/css/header.css">

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
 
function beforeunload_btns(){
	alert("test")
    $(window).on('beforeunload', function () {
        return '본 영상은 10분 이상 학습하셔야 합니다. 정말로 종료하시겠습니까?'
    });
}
 
</script>



<body class="container">

	<!--  헤더  -->
	<jsp:include page="../header/component/header.jsp" />
	
	<div class=" col-12">
	   <form name="frm" action="writeOk.do" method="post" onsubmit="return chkSubmit()">
			<table class="table">
		        <tr class="tableheader">
		      		<td class="text-center" style="width:5%;">
		      		<select class='selector' name="category">
		 			
		 			<%if(garde.equals("admin")) {%>
		 				<option value="NOTICE" > 공지사항 </option>
		 			<%} %>
		 			
		       		<option value="MOVIE" selected="selected" > 영화 게시판 </option>
		       		<option value="GAME"> 게임 게시판 </option>
		       		<option value="BOOK">도서 게시판  </option>
		       		<option value="SPORTS"> 운동 게시판 </option>	
		       		</select>
		       		</td>     
		            <td>
		            <input class="tests" type="text" id="title" name="title" style="width:100%"/>
		            </td>
		        </tr>
		          <tr class="mt-2 text-right">
		            <td colspan="2" >
		                <input class="fun-btn btn-sm font-weight-bold" type="button" value="취소" onclick="beforeunload_btns()"/>
		                <input class="fun-btn btn-sm font-weight-bold" type="submit" id="save" value="저장"/>
		              
		            </td>
		        </tr>
		        <tr class="justify-content-center ">
		            <td colspan="2" class="bg-white">
		                <textarea rows="10" cols="30" id="ir1" name="content" style="width:100%; height:350px; ">
		                </textarea>
		            </td>
		        </tr>
				</table>
				<input type="hidden" name="writer" value="<%=writer%>">
			</form>
	  
	  
	  
	  
	</div> <!-- end container -->
	
	<jsp:include page="../footer/component/footer.jsp" />
</body>

</html>