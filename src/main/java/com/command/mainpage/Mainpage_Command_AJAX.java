package main.java.com.command.mainpage;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.java.com.command.By_AJAX;

public class Mainpage_Command_AJAX implements Mainpage_Command,By_AJAX {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// parameter 받아오기, 없으면 json 으로 response(디폴트)
		String reqType = request.getParameter("reqType");
		if(reqType == null) reqType = "json";

		// "xml" 혹은 "json" 으로 response 하기
		switch(reqType) {
		
		case "xml":
			responseXML(request, response);  // jdom 사용하여 xml response
			break;
			
		case "json":
			responseJSON(request, response);  // org.json 사용
			break;
			
		default:
			responseJSON(request, response);  // org.json 사용
			break;		
		
		} // end switch
		
	} // end execute()

	@Override
	public void responseJSON(HttpServletRequest request, HttpServletResponse response) {
		try {
			responseJSONbyJackson(request,response);
		}catch(Exception e) {
			
		}
	}

	@Override
	public void responseXML(HttpServletRequest request, HttpServletResponse response) {
		try {
			responseXMLbyJackson(request,response);
		}catch(Exception e) {
			
		}
	}

	public void responseJSONbyJackson(HttpServletRequest request, HttpServletResponse response) {
		
		
	}
	
	public void responseXMLbyJackson(HttpServletRequest request, HttpServletResponse response) {
		
		
	}
}
