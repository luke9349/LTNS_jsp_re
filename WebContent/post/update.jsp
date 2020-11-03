<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="main.java.com.post.beans.WriteDTO"%>
<%@page import="main.java.com.post.beans.FileWriteDTO"%>
<%@page import="main.java.com.model.DTO"%>    
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ page import="java.io.*" %>

<%
	WriteDTO[] arr = (WriteDTO[])request.getAttribute("update");	
	FileWriteDTO[] file_info = (FileWriteDTO[])request.getAttribute("file_view");

	String ctx = request.getContextPath();
%>


<%
	if( arr == null || arr.length ==0){
%>
	<script>
		alert("해당정보가 삭제되거나 없습니다");
		history.back();
	</script>
<%
	return;
	}

%>



<%
	request.setCharacterEncoding("utf-8");
	Date today = new Date();
	SimpleDateFormat fomat = new SimpleDateFormat("[yyyy-mm-dd]");

%>    

<%
	//파일읽어오기  (DB접근시 수정할것임)
	String titles ="";	
	String contents ="";
	String filename = file_info[0].getFilename();
	String saveDirectory = getServletContext().getRealPath("/") + "data" + File.separator + filename;
	
	BufferedReader br = null;
	try{
	br = new BufferedReader(new FileReader(saveDirectory));
	String line = null;

	
	while((line = br.readLine())!=null){
		if(line.equals("title")){
			 titles += line;
		}else{
			contents +=line;
		}
	}
	
	
	}catch(Exception e){
		e.printStackTrace();
	}finally{
		try{
			br.close();
		}catch(Exception e){
			e.printStackTrace();
		}
	}
%>



























    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> update Page </title>
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
		<form name="frm" action="view.jsp" method="post" onsubmit="return chkSubmit()">
			<table class="table">
		        <tr >
		       		<td class="text-center">
		       		<select name="category">
		       		<option value="NOTICE" selected="selected"> 공지사항 </option>
		       		<option value="MOVIE"> 영화 게시판 </option>
		       		<option value="GAME"> 게임 게시판 </option>
		       		<option value="BOOK">도서 게시판  </option>
		       		<option value="SPORT"> 운동 게시판 </option>	
		       		</select>
		       		</td>     
		            <td>
		            <input type="text" id="title" name="title" style="width:650px"/>
		            </td>
		        </tr>
		          <tr class="mt-2 text-right">
		            <td colspan="2" >
		                <input class="btn-sm" type="button" value="취소" onclick="History.back()"/>
		                <input class="btn-sm" type="submit" id="save" value="수정"/>
		              
		            </td>
		        </tr>
		        <tr class="justify-content-center">
		            <td colspan="2">
		                <textarea rows="10" cols="30" id="ir1" name="content" style="width:100%; height:350px;">
		                <%=contents %>
		                </textarea>
		            </td>
		        </tr>
				</table>
			</form>
	  </div>
	</div>
</body>

</html>