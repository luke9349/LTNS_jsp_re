const searchForm = $('#searchForm');
const locationSearch = new URLSearchParams(location.search);
let searchParams = Object.fromEntries(locationSearch);


const asyncAjax = (params) => {
  const search = $('#search');
  const searchType = $('#searchType');

  let queryString = '';

  Object.keys(searchParams).forEach((key) => {
    queryString += `${key}=${params[key]}&`;
  });

  console.log(queryString);

  const url = `board_list.ajax?${queryString}searchType=${searchType.val()}&search=${search.val()}`;

  console.log(url);

  fetch(url)
    .then(console.log)
    .catch((error) => console.error(error));

  search.val('');

console.log('이게 나와야함 왜 리로딩이 먼저 돼니까 ㅇㅋ? ');
};

const handleSearchSubmit = (e) => {
  e.preventDefault();



 if (!params.s) location.search = location.search + '&s=true';
  asyncAjax(params)
};

const initSearch = () => {
 // searchForm.on('submit', handleSearchSubmit);

};

initSearch();
