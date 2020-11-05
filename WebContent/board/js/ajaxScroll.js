import { createQuery, getContextPath } from './ajax.js';

let params = null;
const url = 'board_list.ajax?';
let query = null;
let contextPath = null;

const createPost = (json) => {
  if (json.data === null) return;
  let post = $('#jsonPost').html();
  json.data.forEach((item) => {
    const img = item.thumbnailPath
      ? item.thumbnailPath
      : '../images/default_image.png';
    post += `<div class="card-wrapper" onclick=location.href="${contextPath}/post/view.do?${query}&post_id=${item.postId}">`;
    post += `<div class="card">`;
    post += `<div class="card-body">`;
    post += `<h5 class="card-title">${item.title}</h5>`;
    post += `<div class="card-user">${item.nickName}</div>`;
    post += `<div class="card-text">${item.contentsText}</div>`;
    post += `<div class="info__boardDate">${item.regdate}</div>`;
    post += `<span class="info__boardViews">`;
    post += `<i class="far fa-eye"></i>`;
    post += `<span>${item.viewcnt}</span>`;
    post += `</span>`;
    post += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
    post += `<span class="info__boardHits">`;
    post += `<i class="far fa-thumbs-up"></i>`;
    post += `<span>${item.empathizeCnt}</span>`;
    post += `</span>`;
    post += `</div>`;
    post += `<div class="card-img-top">`;
    post += `<img src=${img} alt="userImage">`;
    post += `</div>`;
    post += `</div>`;
    post += `</div>`;
  });
  $('#jsonPost').html(post);
};

const handleAjaxScroll = () => {
  const postScroll = document.getElementById('postScroll');
  const clientHeight = postScroll.clientHeight;
  const scrollTop = postScroll.scrollTop;
  const scrollHeight = postScroll.scrollHeight;

  if (clientHeight + scrollTop >= scrollHeight) {
    params.page++;
    query = createQuery();
    fetch(url + query)
      .then((response) => response.json())
      .then((json) => createPost(json));
  }
};

export const initAjaxScroll = (initialParams) => {
  params = initialParams;
  contextPath = getContextPath();
  $('#postScroll').on('scroll', handleAjaxScroll);
};
