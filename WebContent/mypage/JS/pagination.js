const pagination = document.getElementById('pagination');
let params = null;
let maxPagination = null;


//태그 정의
const createPaginationIcon = (idName, className) => {
  const i = document.createElement('i');
  i.className = className;
  return i;
};

const createPaginationAnchor = (link) => {
  const a = document.createElement('a');
  a.className = 'page-link';
  a.href = link;
  a.setAttribute('tabindex', '-1');
  a.setAttribute('aria-disabled', 'true');
  return a;
};

const createPaginationList = (className) => {
  const li = document.createElement('li');
  li.className = className;
  return li;
};


//구조 구현 handledPagination
const handledPagination = () => {
  if (params.type === 'post') return;
  let { root, type, page, searchType, search } = params;
  page = parseInt(page);
  let url = '';
  if (searchType && search) {
    url += `root=${root}&type=${type}&searchType=${searchType}&search=${search}`;
  } else {
    url += `root=${root}&type=${type}`;
  }
  //페이지 계산
  const startPagination = Math.floor((page - 1) / 10) * 10 + 1;
  // let endPagination = (Math.floor((page - 1) / 10) + 1) * 10;
  let endPagination = startPagination + 9;
  if (endPagination > maxPagination) endPagination = maxPagination;

  //쌍꺽쇄
  if (startPagination === 1) {
    const li = createPaginationList('page-item disabled');
    const i = createPaginationIcon('fas fa-angle-double-left');
    const a = createPaginationAnchor('#');
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  } else {
    page = 1;
    const li = createPaginationList('page-item');
    const i = createPaginationIcon('fas fa-angle-double-left');
    const a = createPaginationAnchor(`board_list.do?${url}&page=${page}`);
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  }
  //꺽쇄
  if (startPagination === 1) {
    const li = createPaginationList('page-item disabled');
    const i = createPaginationIcon('fas fa-chevron-left');
    const a = createPaginationAnchor('#');
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  } else {
    page = (Math.floor(page / 10) - 1) * 10 + 1;
    const li = createPaginationList('page-item');
    const i = createPaginationIcon('fas fa-chevron-left');
    const a = createPaginationAnchor(`board_list.do?${url}&page=${page}`);
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  }

  //1 2 3 4 생성해주는 애
  for (let i = startPagination; i <= endPagination; i++) {
    let li = createPaginationList('page-item');
    if (i === page) li.classList.add('active');
    const a = createPaginationAnchor(`board_list.do?${url}&page=${i}`);
    a.innerText = i;
    li.appendChild(a);
    pagination.appendChild(li);
  }
  //꺽쇄
  if (endPagination === maxPagination) {
    const li = createPaginationList('page-item disabled');
    const i = createPaginationIcon('fas fa-chevron-right');
    const a = createPaginationAnchor('#');
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  } else {
    page = (Math.floor(page / 10) + 1) * 10 + 1;
    const li = createPaginationList('page-item');
    const i = createPaginationIcon('fas fa-chevron-right');
    const a = createPaginationAnchor(`board_list.do?${url}&page=${page}`);
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  }
  //쌍꺽쇄
  if (endPagination === maxPagination) {
    const li = createPaginationList('page-item disabled');
    const i = createPaginationIcon('fas fa-angle-double-right');
    const a = createPaginationAnchor('#');
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  } else {
    page = maxPagination;
    const li = createPaginationList('page-item');
    const i = createPaginationIcon('fas fa-angle-double-right');
    const a = createPaginationAnchor(`board_list.do?${url}&page=${page}`);
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  }
};

//값 받아오기
export const initPagination = (initialParams, datalength) => {
  params = initialParams;
  maxPagination = Math.ceil(datalength / 10);
  handledPagination();
};
