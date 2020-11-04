const initialParams = {
  root: 'NOTICE',
  type: 'list',
  page: 1,
  searchType: null,
  search: null,
};

let params = initialParams;

const checkPage = (page) => {
  if (isNaN(page)) return true;
  return false;
};

const checkItem = (item, items) => {
  let check = true;
  items.forEach((string) => {
    if (item === string) {
      check = false;
      return;
    }
  });
  return check;
};

const checkQuery = () => {
  const { root, type, page, searchType } = params;

  const inspectQuery = {
    roots: [
      'NOTICE',
      'MOVIE',
      'BOOK',
      'SPORTS',
      'GAME',
      'VIEWCNT',
      'EMPATHIZE',
    ],
    types: ['list', 'album', 'post'],
    searchTypes: ['titleAndContent', 'content', 'title'],
  };

  if (checkItem(root, inspectQuery.roots)) {
    sessionStorage.setItem('messageType', '오류 메시지');
    sessionStorage.setItem('messageContent', '잘못된 접근입니다.');
    history.back();
  }

  if (checkItem(type, inspectQuery.types)) {
    sessionStorage.setItem('messageType', '오류 메시지');
    sessionStorage.setItem('messageContent', '잘못된 접근입니다.');
    history.back();
  }

  if (checkPage(parseInt(page))) {
    sessionStorage.setItem('messageType', '오류 메시지');
    sessionStorage.setItem('messageContent', '잘못된 접근입니다.');
    history.back();
  }

  if (params.searchType) {
    if (checkItem(searchType, inspectQuery.searchType)) {
      sessionStorage.setItem('messageType', '오류 메시지');
      sessionStorage.setItem('messageContent', '잘못된 접근입니다.');
      history.back();
    }
  }
};

const handleParams = () => {
  const search = new URLSearchParams(location.search);
  const searchParams = Object.fromEntries(search);
  if (searchParams.root) params.root = searchParams.root;
  if (searchParams.type) params.type = searchParams.type;
  if (searchParams.page) params.page = searchParams.page;
  if (searchParams.searchType) params.searchType = searchParams.searchType;
  if (searchParams.search) params.search = searchParams.search;
  checkQuery(searchParams);
};

export const initParams = () => {
  handleParams();
  return params;
};
