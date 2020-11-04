import { initPagination } from './pagination.js';

let params = null;
const url = 'board_list.ajax?';
let query = null;
let contextPath = null;

const createList = (json) => {
  if (json.data === null) return;
  let table = '';
  json.data.forEach((item) => {
    table += '<tr>';
    table += `<td class="text-center table__no">${item.postId}</td>`;
    table += `<td class="text-center table__no"><a class="list__link" href="${contextPath}/post/view.do?${query}&post_id=${item.postId}">${item.title}</a></td>`;
    table += `<td class="text-center table__user">${item.nickName}</td>`;
    table += `<td class="text-center table__date">${item.regdate}</td>`;
    table += `<td class="text-center table__views">${item.viewcnt}</td>`;
    table += `<td class="text-center table__hit">${item.empathizeCnt}</td>`;
    table += '</tr>';
  });
  $('#jsonList').html(table);
};

const createAlbum = (json) => {
  if (json.data === null) return;
  let post = '';
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
  $('#jsonAlbum').html(post);
};

const createPost = (json) => {
  if (json.data === null) return;
  let post = '';
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

const requestAjax = () => {
  fetch(url + query)
    .then((response) => response.json())
    .then((json) => {
      $('#loading').removeClass('hide');
      let { type } = params;
      type = type.toLowerCase();
      switch (type) {
        case 'list':
          createList(json, params);
          break;
        case 'album':
          createAlbum(json, params);
          break;
        case 'post':
          createPost(json, params);
          break;
      }
      if (params.type !== 'post') initPagination(params, json.count);
      $('#loading').addClass('hide');
      $('#main').removeClass('hide');
    }).catch(e => console.log(e));
// location.href='board_list.do'
// location.href='board_list.do'
};

export const getContextPath = () => {
  //let contextPath = null;
  const hostIndex = location.href.indexOf(location.host) + location.host.length;
  return location.href.substring(
    hostIndex,
    location.href.indexOf('/', hostIndex + 1)
  );
};

export const createQuery = () => {
  let i = 0;
  let query = '';
  for (let key in params) {
    if (params[key]) {
      if (i === 0) {
        query += key + '=';
        query += params[key];
        i++;
        continue;
      }
      query += '&' + key + '=';
      query += params[key];
    }
  }
  return query;
};

export const getDate = (initialParams) => {
  params = initialParams;
  query = createQuery();
  contextPath = getContextPath();
  requestAjax();
};
