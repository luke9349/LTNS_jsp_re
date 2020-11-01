package main.java.com.model.mainpage;

import main.java.com.model.DAO;
import main.java.com.model.DTO;

public class Mainpage_DAO implements DAO {

	@Override
	public DTO[] select() {
		return null;
	}
	
	//공감수 순으로 포스트 가져오기
	public DTO[] empath_board_select() {
		return null;
	}//공감수 순으로 포스트 가져오기 end
	
	//조회수 순으로 포스트 가져오기
	public DTO[] viewcnt_board_select() {
		return null;
	}//조회수 순으로 포스트 가져오기 end

	//최신순으로 포스트 가져오기
	public DTO[] nearest_board_select() {
		return null;
	}//최신순으로 포스트 가져오기 end
}
