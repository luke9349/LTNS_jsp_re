import { initPagination } from './pagination.js';

export const getData = (params) => {
  const url = 'board_list.ajax?';
	let query = '';
  let i = 0;
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

	console.log(query);

  const createList = (json) => {
    if (json.data === null) return;
    console.log(json);
    let table = '';
    json.data.forEach((item) => {
      table += '<tr>';
      table += `<td class="text-center table__no">${item.postId}</td>`;
      table += `<td class="text-center table__no"><a class="list__link" href="${getContextPath()}/post/view.do?${query}&post_id=${item.postId}">${item.title}</a></td>`;
      table += `<td class="text-center table__user">${item.nickName}</td>`;
      table += `<td class="text-center table__date">${item.regdate}</td>`;
      table += `<td class="text-center table__views">${item.viewcnt}</td>`;
      table += `<td class="text-center table__hit">${item.empathizeCnt}</td>`;
      table += '</tr>';
    });
    $('#jsonList').html(table);
  };

  const createAlbum = (json, params) => {
    console.log(json, params);
  };

  const createPost = (json, params) => {
    console.log(json, params);
  };

  fetch(url)
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
      initPagination(params, json.count);
      $('#loading').addClass('hide');
      $('#main').removeClass('hide');
    });
};

const getContextPath = () => {
  const hostIndex = location.href.indexOf( location.host ) + location.host.length;
  return location.href.substring( hostIndex, location.href.indexOf('/', hostIndex + 1) );
}
