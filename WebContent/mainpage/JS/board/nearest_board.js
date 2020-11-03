/**
 * sql명령어가 마지막 포스트의 post_id 이상의 게시글만 가져온다!
 */
$(document).ready(function(){

	$("button#nearest_board-add_post").click(function(){
		//ajax request를 보냄
		url="mainpage.ajax?reqType=json&regdate="+$("time.card_post-regdate").last().html();
		$.ajax({
			url:url,
			type:"GET",
			cache:false,
			success:function(data,status){
				if(status == "success")
					parseJSON(data);
			}
		});	
		
	})//end - $("button#nearest_board-add_post").click
})//end - $(document).ready


//받은 JSON객체를 이용하여 post 추가
function parseJSON(jsonObj){
	var data=jsonObj.data;
	for(var i=0;i<3;i++){
		//게시글을 카운트 i=다음 인덱스가 된다!
		var temp_title=data[i].title;
		var temp_picture="글의 첫번째 사진 태그";
		var temp_writer=data[i].nickname;
		var temp_regdate=data[i].regdate;
		var temp_contents=data[i].post_contents.contentsText;
		var post_i=$("a.card_post").last().attr("id");
		post_i=1+Number(post_i.slice(6));
		var card_post=$('<a id="whole_'+post_i+'" class="card_post article" href="#"></a>').html(
				'		   <div class="card_post-main"><p class="card_post-title title">'+temp_title+'</p>'+
				'				<div class="sm_card_list-metadata"><p class="card_post-writer small">'+temp_writer+'</p><time class="card_post-regdate small">'+temp_regdate+'</time></div>'+
				'				<p class="card_post-contents small">'+temp_contents+'</p></div>'+
				'		   <div class="card_post-picture">'+temp_picture+'</div>');
		$("div#nearest_board").append(card_post);
		$("div#nearest_board").append("<hr>");
	}
}