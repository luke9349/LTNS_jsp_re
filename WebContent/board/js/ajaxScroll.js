import { createQuery, getContextPath } from './ajax.js';

let params = null;
const url = 'board_list.ajax?';
let query = null;
let contextPath = null;

const handleAjaxScroll = () => {
  const zz = document.querySelector('.zz');
  console.log(zz.clientHeight);
  console.log(zz.scrollTop);
  console.log(zz.scrollHeight);
  console.log($('.zz').clientHeight);
  console.log($('.zz').scrollTop);
  console.log($('.zz').scrollHeight);
  const clientHeight = document.documentElement.clientHeight;

  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight = document.documentElement.scrollHeight;

  if (clientHeight + scrollTop >= scrollHeight) {
    params.page++;
    query = createQuery();

    fetch(url + query)
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log('요청성공');
  }
};

export const initAjaxScroll = (initialParams) => {
  params = initialParams;
  contextPath = getContextPath();
  $('.zz').on('scroll', handleAjaxScroll);
};
