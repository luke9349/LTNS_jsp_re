package park.지울꺼얌;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import test.JSONListDTO;

public class AjaxBoardListJSON {
	private long count;
	private String status;

	@JsonProperty("data")
	private List<JSONListDTO> list;

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

	public List<JSONListDTO> getList() {
		return list;
	}

	public void setList(List<JSONListDTO> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		return "AjaxBoardListJSON [count=" + count + ", status=" + status + ", list=" + list + "]";
	}

}