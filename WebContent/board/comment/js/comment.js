let initBody = {
	userId: 2,
	postId: null,
	page: null,
	commentId: null,
	comment: null,
}

let body = {
	method: 'POST', // *GET, POST, PUT, DELETE, etc.
	mode: 'cors', // no-cors, cors, *same-origin
	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	credentials: 'same-origin', // include, *same-origin, omit
	headers: {
		'Content-Type': 'application/json',
	},
	redirect: 'follow', // manual, *follow, error
	referrer: 'no-referrer', // no-referrer, *client
	body: null, // body data type must match "Content-Type" header
}

const loadDataEvent = () => {
	$('.inserBtn').each(function() {
		$(this).on('click', handleChangeContent);
	});

	$('.commentModify').on('keyup', hadleInputChange);
	$('.commentModify').on('keydown', hadleInputChange);
	$('.commentModify').on('focusout', handleCancel);

	$('.trashBtn').each(function() {
		$(this).on('click', handleTrash);
	});

	$('.cancelBtn').each(function() {
		$(this).on('click', handleCancel);
	});

	$('.modifyDeleteform').each(function() {
		$(this).on('submit', handleCommentUpdateSubmit);
	});
}

const createComment = (datas) => {
	let comment = '';
	const icon = '<i class="fas fa-pencil-alt ml-5 inserBtn"></i><i class="fas fa-trash ml-3 trashBtn"></i>';
	let form = '';

	datas.forEach(data => {

		comment += '<div class="commentContainer">';

		comment += '<div id="alert" class="alert alert-success" role="alert">';
		comment += '<div class="alertBox">';
		comment += `<span class="comment_content">${data.commentContents}</span>`;
		comment += '<div>';
		comment += `<span class="coment__writer">${data.nickName}</span>`;
		comment += '&nbsp;&nbsp;'
		comment += `<span class="coment_regdate">${data.regdate}</span>`;
		if (initBody.userId === parseInt(data.writerId)) comment += icon;

		comment += '</div>';
		comment += '</div>';

		if (initBody.userId === parseInt(data.writerId)) {
			form = '<form class="modifyDeleteform hide">';
			form += `<input type="hidden" class="comment_id" name="comment_id" value="${data.commentId}" />`;
			form += '<div class="input-group">';
			form += '<input type="text" class="form-control commentModify" placeholder="수정할 댓글을 입력해주세요." />';
			form += '<div class="input-group-append">';
			form += '<button class="btn btn-primary" type="submit">수정</button>';
			form += '</div>';
			form += '<div class="input-group-append">';
			form += '<button class="btn btn-secondary cancelBtn" type="button">취소</button>';
			form += '</div>';
			form += '</div>';
			form += '</form>';
			comment += form;
		}
		comment += '</div>';
		comment += '</div>';
	});
	return comment;

}

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
	const parent = $(event.target).parent().parent().parent();
	const chk = confirm('정말로 삭제하시겠습니까?');
	if (!chk) return;

	initBody.commentId = parent.find('.modifyDeleteform').find('.comment_id').val();
	initBody.page = 1;

	body.body = JSON.stringify(initBody);
	fetch('commentRemove.ajax', body).then(response => response.json()).then(json => {
		$('.comment__list').html('');
		if (json.data === null) {
			$('.comment__list').html('<div id="zeroData">등록된 댓글이 없습니다...<i class="far fa-comment-dots"></i></div>');
			return;
		}
			if (json.data.length > 5) {	
				$('.view').toggleClass('hide');
			}
		comment = createComment(json.data);
		$('.comment__list').html(comment);
		loadDataEvent();
	}).catch(e => {
		sessionStorage.setItem('messageType', '오류 메시지');
		sessionStorage.setItem('messageContent', '댓글을 불러오는 도중 에러가 발생했습니다.');
		console.error(e);
		location.reload();
	})
};

const handleCancel = (event) => {
	console.log('취소');
	const parent = $(event.target).parent().parent().parent().parent();
	parent.find('.modifyDeleteform').addClass('hide');
	parent.find('.alertBox').show();
};

const handleShow = () => {
	$('#downArrow').toggleClass('active');
	$('.comment__list').toggleClass('hide');

	if ($('#commentBtnText').text() === '닫기')
		$('#commentBtnText').text('펼치기');
	else {
		$('#commentBtnText').text('닫기');


		initBody.page = 1;
		initBody.postId = 9;
		
		body.body = JSON.stringify(initBody);

		fetch('commentLoad.ajax', body).then(response => response.json()).then(json => {
			const prev = $('.comment__list').html();
			$('.comment__list').html('');
			if (json.data === null) {
				$('.comment__list').html('<div id="zeroData">등록된 댓글이 없습니다...<i class="far fa-comment-dots"></i></div>');
				return;
			}
				
			if (json.data.length > 5) {	
				$('.view').toggleClass('hide');
			}
			comment = createComment(json.data);
			$('.comment__list').html(prev + comment);
			loadDataEvent();
		}).catch(e => {
			sessionStorage.setItem('messageType', '오류 메시지');
			sessionStorage.setItem('messageContent', '댓글을 불러오는 도중 에러가 발생했습니다.');
			console.error(e);
			location.reload();
		})

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
	const form = new FormData(document.getElementById('commentInsert'));
	form.append('userId', 2);
	form.append('postId', 9);
	form.append('page', 1);
	
	initBody.comment = $('#commentArea').val();
	initBody.userId = 2
	initBody.postId = 9;
	initBody.page = 1;
	
	body.body = JSON.stringify(initBody);
	console.log(body);
	
	fetch('commentWrite.ajax', body).then(response => response.json()).then(json => {
		$('.comment__list').html('');
		if (json.data === null) {
			$('.view').hide();
			$('.comment__list').html('<div id="zeroData">등록된 댓글이 없습니다...<i class="far fa-comment-dots"></i></div>');
			return;
		}

		
		comment = createComment(json.data);
		$('.comment__list').html(comment);
		if (json.data.length === 5) {	
				$('.view').toggleClass('hide');
			}
		$('#textLength').text('0');
		$('#commentArea').val('');
		loadDataEvent();
	}).catch(e => {
		sessionStorage.setItem('messageType', '오류 메시지');
		sessionStorage.setItem('messageContent', '댓글을 불러오는 도중 에러가 발생했습니다.');
		console.error(e);
		location.reload();
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


//};
