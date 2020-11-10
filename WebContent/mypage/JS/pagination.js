/*
 * sql명령어가 마지막 포스트의 post_id 미만의 게시글만 가져온다!
 */

//각 페이지 버튼마다, ajax 실행 함수 실행!
//command_url은 mypage_mypost.ajax  mypage_mycomment.ajax  mypage_myempathize.ajax
const sendByAJAX =(btn_id, command_url )=>{
	//dao에 들어갈 값을 btn_id를 가공해서넣는다~!
	url=command_url+"?reqType=json&btn_id="+(btn_id*6+1);
	$.ajax({
		url:url,
		type:"GET",
		cache:false,
		success:function(data,status){
			if(status == "success")
				parseJSON(data);
		}
	});
};

//버튼을 누른다		  	=>ajax=>리스트를 비운다=>리스트를 채운다=>두개의 버튼색이 바뀐다(토글)
//꺽쇄 버튼=>+10 한다     	=>
//쌍꺽쇄    =>맨 끝으로 간다	=>
//맨 처음  : 이전 꺽쇄,쌍꺽쇄가 비활성화
//맨 마지만 : 다음 꺽쇄,쌍꺽쇄가 비활성화
//html을 써준다. (각 리스트 새로 생성)

//리스트 비우고, 만드는 총괄 함수
const mkLists=(tag, jsonObj)=>{
	$(tag).empty();
	var data=jsonObj.data;
	for(var i=0;i<6;i++){
		const dto=data[i];
		tag.append(mkList(dto.post_id,dto.title,dto.regdate));
		tag.append("<hr>");
	}
}

//리스트 만듦(각각 한개씩)
const mkList=(post_id,title,regdate)=>{
	var card_list=$('<a id="whole_'+post_id+'" class="card_post article" href="../post/view.do?post_id='+post_id+'"></a>').html(
			'		   <div class="card_post-main"><p class="post_id" style="display:none">'+temp_post_id +'</p><p class="sm_card_list-title title">'+title+'</p>'+
			'				<div class="sm_card_list-metadata"><time class="sm_card_list-regdate small">'+regdate+'</time></div>'+
			'		</a>');
	return card_list;
//	<a class="sm_card_list list" href="../post/view.do?post_id=${post_id }">
//	<p class="sm_card_list-title title">${param.title }</p>
//	<div class="sm_card_list-metadata"><time class="sm_card_list-regdate small">${param.regdate }</time></div>
//	</a>
}


//카운트를 매개변수로 받아,
//꺽쇄 비활성화, 카운트 숫자 계산하여 페이지네이션 숫자 생성
//10개(글이 10*10) 초과시, 다음 꺽쇄 활성화
//기본 꺽쇄는 만들어주기

//해당 버튼을 누르면 ajax에서 자바스크립트를 통해, 해당 버튼의 숫자에 해당하는 리스트로 갱신

$(document).ready(function(){

	$("button#nearest_board-add_post").click(function(){
		//ajax request를 보냄
		url="mainpage.ajax?reqType=json&regdate="+$("time.card_post-regdate").last().html()+"&post_id="+$('p.post_id').last().html();
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
		var temp_post_id=data[i].post_id;
		var temp_title=data[i].post_contents.title;
		var temp_picture=data[i].post_contents.thumbnailPath;
		var temp_writer=data[i].nickname;
		var temp_regdate=data[i].regdate;
		var temp_contents=data[i].post_contents.contentsText;
		var post_i=$("a.card_post").last().attr("id");
		post_i=1+Number(post_i.slice(6));
		var card_post=$('<a id="whole_'+post_i+'" class="card_post article" href="../post/view.do?post_id='+temp_post_id+'"></a>').html(
				'		   <div class="card_post-main"><p class="post_id" style="display:none">'+temp_post_id +'</p><p class="card_post-title title">'+temp_title+'</p>'+
				'				<div class="sm_card_list-metadata"><p class="card_post-writer small">'+temp_writer+'</p><time class="card_post-regdate small">'+temp_regdate+'</time></div>'+
				'				<p class="card_post-contents small">'+temp_contents+'</p></div>'+
				'		   <div class="card_post-picture"><img src="'+temp_picture+'"/></div>');
		$("div#nearest_board").append(card_post);
		$("div#nearest_board").append("<hr>");
	}
}