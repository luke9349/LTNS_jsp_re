const initialParams = {
  root: 'NOTICE',
  type: 'list',
  page: 1,
  searchType: null,
  search: null,
};

let params = initialParams;

const handleParams = () => {
  const search = new URLSearchParams(location.search);
  const searchParams = Object.fromEntries(search);
console.log(searchParams.searchType);
  if (searchParams.root) params.root = searchParams.root;
  if (searchParams.type) params.type = searchParams.type;
  if (searchParams.page) params.page = searchParams.page;
  if (searchParams.searchType) params.searchType = searchParams.searchType;
  if (searchParams.search) params.search = searchParams.search;
};

export const initParams = () => {
  handleParams();
  return params;
};
