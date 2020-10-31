<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>

<%-- cos 라이브러리 --%>
<%@ page import="com.oreilly.servlet.MultipartRequest" %>
<%@ page import="com.oreilly.servlet.multipart.FileRenamePolicy" %>    
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy" %>


<%@ page import="java.text.SimpleDateFormat" %>
 <%int cnt = (Integer) request.getAttribute("result"); 
 
 %>
 
 
 <%
 
 	String saveDirectory = getServletContext().getRealPath("datas");
 	String encoding = "utf-8";
 	FileRenamePolicy policy = new DefaultFileRenamePolicy(); 
 	
 %>
 
 <%
        request.setCharacterEncoding("UTF-8");        // 요청의 문자열셋을 UTF-8로 변경합니다.<p></p><p>
        String title=request.getParameter("title");          //요청에서, title, content라는 name을 가진 파라미터 리턴
        String content=request.getParameter("content");
         
      	Date d = new Date();
      	SimpleDateFormat sm = new SimpleDateFormat("yyyyMMddHHmmss");
      	
        String fName= sm.format(d) +".txt"; // DB연동이되면 UID값 추가할 예정
         
        if(title.isEmpty()||content.isEmpty())       //내용이없으면      
        {
            response.sendRedirect("write.jsp");	//복귀시키기 
        }
        else
        {
            PrintWriter pw=null;                // 
            try{
            	saveDirectory = getServletContext().getRealPath("/") + "data";
            	File file = new File(saveDirectory);
            
            	if(!file.exists()){	//디렉토리가 없으면 만들어줌 
            		file.mkdirs();
            	}
            
            	String filePath= saveDirectory+ File.separator +fName; //파일경로 
				// out.println(saveDirectory+"세이브디렉토리 <br>"+fName +"파일이름 <br>"+filePath+"파일패스"); 
               
                //내용저장객체 생성
                pw = new PrintWriter(filePath);
       			pw.println("title"+title);
                pw.println(content);
                System.out.println("저장되었습니다");
                
                %>
               
                <% 
            }catch(IOException e){
                out.println("저장 실패 : 파일에 데이터를 쓸 수 없습니다.");
            }finally
            {
                try{            
                    pw.close();
                }catch(Exception e)
                {
                     
                }
            }
            }
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form name="writeokform" method="post" action="viewOk.do">
<input type="hidden" name="real_filename" value="<%=saveDirectory%>"/>
<input type="hidden" name="filename" value="<%=fName %>"/>
<input type="hidden" name="filekind" value="txt">
</form>
 <script type="text/javascript">
 window.onload = function(){
	  document.forms['writeokform'].submit();
 
 }
</script>

</body>
</html>

    
    
    