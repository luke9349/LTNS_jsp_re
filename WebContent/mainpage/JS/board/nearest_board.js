/**
 * sql명령어가 마지막 포스트의 post_id 이상의 게시글만 가져온다!
 */
$(document).ready(function(){

	$("button#nearest_board-add_post").click(function(){
		JSON_list=[]
		//ajax request를 보냄
		//todo
		
		
		//받은 JSON객체를 이용하여 post 추가
		for(var i=0;i<3;i++){
			//게시글을 카운트 i=다음 인덱스가 된다!
			temp_title=JSON_list[i].title;
			temp_picture="글의 첫번째 사진 태그";
			temp_writer=JSON_list[i].title.writer;
			temp_regdate=JSON_list[i].title.regdate;
			var post_i=$("a.card_post").last().attr("id");
			post_i=1+Number(post_i.slice(6));
			card_post=$('<a id="whole_'+post_i+'" class="card_post article" href="#"></a>').html(
	'				<p class="card_post-title title">'+temp_title+'</p><div class="card_post-picture">'+temp_picture+'</div>'+
	'				<div class="sm_card_list-metadata"><p class="card_post-writer small">'+temp_writer+'</p><time class="card_post-regdate small">'+temp_regdate+'</time></div>'+
	'				<p class="card_post-contents small">내용</p>'+
	'			</a>');
			$("div#nearest_board").append(card_post);
			$("div#nearest_board").append("<hr>");
		}
	})
})