<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="comment">
  <div class="comment__insertForm">
    <form id="commentInsert">
      <div class="card text-center">
        <div class="card-body">
          <textarea
            id="commentArea"
            name="content"
            class="form-control comment_area"
            placeholder="저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시물은 이용약관 및 관련 법률에 의해 제재를 받을 수 있습니다. 건전한 토론문화와 양질의 댓글 문화를 위해, 타인에게 불쾌감을 주는 욕설 또는 특정 계층/민족, 종교 등을 비하하는 단어들은 표시가 제한됩니다."
          ></textarea>
          <span id="textLength" class="text-muted">0</span>
          <span class="text-muted"> / 300</span>
        </div>
        <div class="card-footer text-left bg-white">
          <span class="text-primary"
            >※ 이댓글에 대한 법적 책임은 작성자에게 귀속됩니다.</span
          >
          <button class="btn btn-outline-primary float-right" type="submit">
            등록
          </button>
          <div class="clearfix"></div>
        </div>
      </div>
    </form>
  </div>

  <div class="comment__actionBtn">
    <div id="commentBtn" class="btn float-right">
      <span id="commentBtnText">펼치기</span>
      <i id="downArrow" class="fas fa-angle-down"></i>
    </div>
    <div class="clearfix"></div>
  </div>

  <div class="comment__list hide">
  </div>
  	<div class="hide btn btn-outline-primary form-control view">댓글 더보기</div>
</div>