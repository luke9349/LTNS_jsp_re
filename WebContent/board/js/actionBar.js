const searchForm = $('#searchForm');
let params = null;

const handleInputChange = () => {
  search.focus();
};

const handleSearchSubmit = (e) => {
  e.preventDefault();
  let { root, type, page } = params;
  page = parseInt(page);
  let url = `root=${root}&type=${type}&page=${page}&searchType=${$(
    '#searchType'
  ).val()}&search=${$('#search').val()}`;

  location.href = `board_list.do?${url}`;
};

const handleClickSubmit = () => {
  searchForm.submit();
};

const handleClickSearch = () => {
  $('#modalForm').modal('show');
  search.focus();
};

const loadedSearchType = () => {
  const { searchType } = params;
  if (searchType) {
    const options = $('#searchType').children();
    Array.from(options).forEach((option) => {
      option.value === searchType
        ? (option.selected = true)
        : (option.selected = false);
    });
  }
};

const handledType = () => {
const btns = document.querySelectorAll('.actionBtn');
  switch (params.type) {
    case 'list':
      btns[0].classList.add('text-primary');
      return;
    case 'album':
      btns[1].classList.add('text-primary');
      return;
    case 'post':
      btns[2].classList.add('text-primary');
      return;
    default:
      btns[0].classList.add('text-primary');
      return;
  }
};

export const initActionbar = (initialParams) => {
  params = initialParams;
  handledType();
  window.addEventListener('load', loadedSearchType);
  $('#searchBtn').on('click', handleClickSearch);
  $('#searchSubmitBtn').on('click', handleClickSubmit);
  searchForm.on('submit', handleSearchSubmit);
  $('#searchType').on('change', handleInputChange);
};
