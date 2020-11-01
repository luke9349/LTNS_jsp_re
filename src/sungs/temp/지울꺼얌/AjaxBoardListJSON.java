package sungs.temp.지울꺼얌;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AjaxBoardListJSON {
	private long count;
	private String status;

	@JsonProperty("data")
	private List<BoardListDTO> list;

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<BoardListDTO> getList() {
		return list;
	}

	public void setList(List<BoardListDTO> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		return "AjaxBoardListJSON [count=" + count + ", status=" + status + ", list=" + list + "]";
	}

}