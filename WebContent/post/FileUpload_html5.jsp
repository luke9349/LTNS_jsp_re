<%-- 
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@page import="java.io.*" %>
<%@page import="java.util.UUID" %>
<%@page import="java.text.SimpleDateFormat" %>
    
    
<%

	String fileInfo ="";
	String fileName = request.getHeader("file-name");
	String filename_ext = fileName.substring(fileName.lastIndexOf(".")+1);
	filename_ext = filename_ext.toLowerCase();
	
	//이미지 검증
	String[] allow_file = {"jpg", "png", "bmp", "gif"};
	int cnt = 0;
	for(int i=0; i<allow_file.length; i++){
		if(filename_ext.equals(allow_file[i])){
			cnt++;
		}//end if 
	}// end for
	
	
	//이미지가 아닐경우 
	
	if(cnt ==0 ){
		out.println("NOT IMG"+ fileName);
	}else{
		// 디렉터리를잡아주고 생성함 
		
		String dftFilePath = request.getSession().getServletContext().getRealPath("/");
		String filePath = dftFilePath + "post/S2" + File.separator + "upload" + File.separator; 
		File file = new  File(filePath);
		
		if(!file.exists()){
			file.mkdirs();
		}
		
		String realFileNm ="";
		SimpleDateFormat formatdate = new SimpleDateFormat("yyyyMMddHHmmss");
		String today = formatdate.format(new java.util.Date());
		realFileNm = today+ UUID.randomUUID().toString() + fileName.substring(fileName.lastIndexOf("."));
		String rlFileNm = filePath + realFileNm;
		InputStream is = request.getInputStream();
		OutputStream os = new FileOutputStream(rlFileNm);
		int numRead;
		byte b[] = new byte[Integer.parseInt(request.getHeader("file-size"))];
		while((numRead = is.read(b,0,b.length)) != -1){
			os.write(b,0,numRead);
		}
		if(is != null){
			is.close();
		}
		
		os.flush();
		os.close();
	
		
		fileInfo += "&bNewLine=true";
		fileInfo += "&FileName="+fileName;
		fileInfo += "&FileURL=/LTNS_jsp/post/S2/upload"+realFileNm;
		out.println(fileInfo);
		
	
	}
	

%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>

--%>
