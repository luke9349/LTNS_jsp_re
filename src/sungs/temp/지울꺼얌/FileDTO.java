package sungs.temp.지울꺼얌;

public class FileDTO {

	private long fileId; // 파일 고유 번호
	private long postId; // 파일이 등록된 게시글 번호
	private String Filekind; // 파일종류
	private String realFileName; // 물리적경로에 실제적으로 저장된 파일 이름
	private String fileName; // 사용자 파일 이름

	public long getFileId() {
		return fileId;
	}

	public void setFileId(long fileId) {
		this.fileId = fileId;
	}

	public long getPostId() {
		return postId;
	}

	public void setPostId(long postId) {
		this.postId = postId;
	}

	public String getFilekind() {
		return Filekind;
	}

	public void setFilekind(String filekind) {
		Filekind = filekind;
	}

	public String getRealFileName() {
		return realFileName;
	}

	public void setRealFileName(String realFileName) {
		this.realFileName = realFileName;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	@Override
	public String toString() {
		return "FileDTO [fileId=" + fileId + ", postId=" + postId + ", Filekind=" + Filekind + ", realFileName="
				+ realFileName + ", fileName=" + fileName + "]";
	}

}
