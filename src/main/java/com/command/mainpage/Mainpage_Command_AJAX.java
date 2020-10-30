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
			//responseXML(request, response);  // jdom 사용하여 xml response
			responseXML2(request, response);  // Jackson 사용
			break;
			
		case "json":
			//responseJSON(request, response);  // org.json 사용
			responseJSON2(request, response);  // Jackson 사용
			break;
			
		default:
			responseJSON(request, response);  // org.json 사용
			break;		
		
		} // end switch
		
	} // end execute()

	@Override
	public void responseJSON(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void responseXML(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		
	}

}
