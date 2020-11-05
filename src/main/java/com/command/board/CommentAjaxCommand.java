package main.java.com.command.board;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;

import main.java.com.command.Command;
import main.java.com.model.post.CommentDAO;
import main.java.com.model.post.CommentInsertModel;
import main.java.com.util.LogUtil;

public class CommentAjaxCommand implements Command, Board_Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {

		CommentInsertModel model = null;

		try {
			BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream(), "UTF-8"));
			StringBuilder json = new StringBuilder();
			String str;
			while ((str = reader.readLine()) != null) {
				json.append(str + "\n");
			}
			model = new ObjectMapper().readValue(json.toString(), CommentInsertModel.class);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			LogUtil.error(e.getMessage());
		} catch (IOException e) {
			e.printStackTrace();
			LogUtil.error(e.getMessage());
		}

		System.out.println(model);

		String content = model.getContent();
		int userId = -1;
		int postId = -1;
		try {
			userId = Integer.parseInt(model.getUserId());
			postId = Integer.parseInt(model.getPostId());
		} catch (NumberFormatException e) {
			e.printStackTrace();
			LogUtil.error(e.getMessage());
		}

		try {
			if (content == null && content.equals("") && userId == -1 || postId == -1) {
				Exception e = new Exception("empty content");
				LogUtil.error(e.getMessage());
				e.printStackTrace();
				throw e;
			}

			new CommentDAO().createComment(content, userId, postId);
			new CommentDAO().get
		} catch (Exception e) {
			LogUtil.error("[BoarAjaxCommand] [params Error] " + e.getMessage());
			e.printStackTrace();
		} // end try

	}

	@Override
	public void responseJSON(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub

	}

	@Override
	public void responseXML(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub

	}

}
