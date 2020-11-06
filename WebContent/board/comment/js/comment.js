let userId = null;
let postId = null;
let query = null;

const handleCommentUpdateSubmit = (e) => {
  console.log('updateAndDelete');
  e.preventDefault();
  // ajax
  console.log('ajax 요청');
  // 삭제 또는 업데이트 되나 ?
  console.log('삭제 또는 업데이트 되나 ?');
  console.log($(e.target).children());
  console.log($(e.target).find($('.comment_id')));
  console.log($(e.target).find($('.comment_id')).val());
};

const hadleInputChange = (e) => {
  const value = $(e.target).val();
  if (value.length >= 300) {
    $(e.target).val(value.substring(0, 300));
    return;
  }
};

const handleChangeContent = (event) => {
  console.log('수정');
  const parent = $(event.target).parent().parent().parent();
  parent.find('.alertBox').hide();
  parent.find('.commentModify').val(parent.find('.comment_content').text());
  parent.find('.modifyDeleteform').removeClass('hide');
  parent.find('.commentModify').focus();
};

const handleTrash = (event) => {
  console.log('삭제');
  const parent = $(event.target).parent().parent().parent().parent();
  const chk = confirm('정말로 삭제하시겠습니까?');
  if (!chk) return;
  parent.remove();
  console.log('삭제됨');

  // ajax
  console.log('ajax 요청');
};

const handleCancel = (event) => {
  console.log('취소');
  const parent = $(event.target).parent().parent().parent().parent();
  parent.find('.modifyDeleteform').addClass('hide');
  parent.find('.alertBox').show();
};

const handleShow = () => {
  $('#downArrow').toggleClass('active');
  $('.commentContainer').each(function () {
    $(this).toggleClass('hide');
  });
  if ($('#commentBtnText').text() === '닫기')
    $('#commentBtnText').text('펼치기');
  else {
    $('#commentBtnText').text('닫기');

    // ajax
	// const url = `commentLoad.ajax?${query}`;
	const url = `commentLoad.ajax?${query}`;
	fetch(url).then(console.log)
    console.log('ajax 요청');
  }
};

const hadleTextArea = (e) => {
  const value = $(e.target).val();
  if (value.length >= 300) {
    $(e.target).val(value.substring(0, 300));
    $('#textLength').text(300);
    return;
  }
  $('#textLength').text(value.length);
};

const handleCommentInsert = (e) => {
	e.preventDefault();
	const url = `commentInsert.ajax?`
	const form = new FormData(document.getElementById('commentInsert'));
	// form.append('uesrId', userId);
	// form.append('postId', postId);
	form.append('userId', 8);
	form.append('postId', 1);
	console.log(form);
	fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(Object.fromEntries(form)), // body data type must match "Content-Type" header
    })
}

//const commenInit = (uid, pid) => {
  //userId = uid;
  //postId = pid;
  //query = `userId=${userId}&postId=${postId}`;

$('#commentInsert').on('submit', handleCommentInsert);
  $('#commentArea').on('keyup', hadleTextArea);
  $('#commentArea').on('keydown', hadleTextArea);
  $('#commentBtn').on('click', handleShow);
  $('.inserBtn').each(function () {
    $(this).on('click', handleChangeContent);
  });

  $('.commentModify').on('keyup', hadleInputChange);
  $('.commentModify').on('keydown', hadleInputChange);
  $('.commentModify').on('focusout', handleCancel);

  $('.trashBtn').each(function () {
    $(this).on('click', handleTrash);
  });

  $('.cancelBtn').each(function () {
    $(this).on('click', handleCancel);
  });

  $('.modifyDeleteform').each(function () {
    $(this).on('submit', handleCommentUpdateSubmit);
  });
//};
