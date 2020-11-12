package main.java.com.command.board;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import main.java.com.command.Command;
import main.java.com.model.board.CommentDeclarationJSONModel;
import main.java.com.util.LogUtil;

public class CommentDeclarationCommand implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		
		CommentDeclarationJSONModel model = null;
		
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream(), "UTF-8"));
			StringBuffer json = new StringBuffer();
			String str;
			while((str = br.readLine()) != null) {
				json.append(str + "\n");
			}
			model = new ObjectMapper().readValue(json.toString(), CommentDeclarationJSONModel.class);
		} catch (IOException e) {
			e.printStackTrace();
			LogUtil.error(e.getMessage());
		}
		
	}

}
