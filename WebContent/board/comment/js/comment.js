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

      const handleChangeContent = (event) => {
        console.log('추가');
        const parent = $(event.target).parent().parent().parent();
        parent.find('.alertBox').hide();
        parent.find('.modifyDeleteform').removeClass('hide');

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
	console.log('ajax 요청');
};
      };

      $('#commentBtn').on('click', handleShow);
      $('.inserBtn').each(function () {
        $(this).on('click', handleChangeContent);
      });
      $('.trashBtn').each(function () {
        $(this).on('click', handleTrash);
      });

      $('.cancelBtn').each(function () {
        $(this).on('click', handleCancel);
      });

      $('.modifyDeleteform').each(function () {
        $(this).on('submit', handleCommentUpdateSubmit);
      });