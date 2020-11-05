<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="comment">
  <div class="comment__insertForm">
    <form action="">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="주제와 무관한 댓글, 악플은 삭제될 수 있습니다."
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">등록</button>
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

  <div class="comment__list">
    <div class="commentContainer hide">
      <div id="alert" class="alert alert-success" role="alert">
        <div class="alertBox">
          <span class="comment_content">댓글임멘</span>
          <div>
            <span class="coment__writer">작성자</span>
            <span class="coment_regdate">날짜</span>
            <i class="fas fa-pencil-alt ml-5 inserBtn"></i>
            <i class="fas fa-trash ml-3 trashBtn"></i>
          </div>
        </div>

        <form class="modifyDeleteform hide">
          <input
            type="hidden"
            class="comment_id"
            name="comment_id"
            value="1"
          />
          <div class="input-group">
            <input
              id="commentModify"
              type="text"
              class="form-control"
              placeholder="수정할 댓글을 입력해주세요."
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="submit">수정</button>
            </div>
            <div class="input-group-append">
              <button class="btn btn-secondary cancelBtn" type="button">
                취소
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="commentContainer hide">
      <div id="alert" class="alert alert-success" role="alert">
        <div class="alertBox">
          <span class="comment_content">댓글임멘</span>
          <div>
            <span class="coment__writer">작성자</span>
            <span class="coment_regdate">날짜</span>
            <i class="fas fa-pencil-alt ml-5 inserBtn"></i>
            <i class="fas fa-trash ml-3 trashBtn"></i>
          </div>
        </div>

        <form class="modifyDeleteform hide">
          <input
            type="hidden"
            class="comment_id"
            name="comment_id"
            value="2"
          />
          <div class="input-group">
            <input
              id="commentModify"
              type="text"
              class="form-control"
              placeholder="수정할 댓글을 입력해주세요."
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="submit">수정</button>
            </div>
            <div class="input-group-append">
              <button class="btn btn-secondary cancelBtn" type="button">
                취소
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>