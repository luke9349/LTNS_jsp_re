const btns = document.querySelectorAll('.actionBtn');
const searchType = document.getElementById('searchType');
const search = document.getElementById('search');
const pagination = document.getElementById('pagination');
let params = null;

const handleInputChange = () => {
  search.focus();
};

const createPaginationIcon = (className) => {
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

const handledPagination = () => {
  let { root, page, type } = params;
  if (type === 'post') return;
  if (page !== 1) page = parseInt(page);

  const startPagination = Math.floor((page - 1) / 10) * 10 + 1;
  // let endPagination = (Math.floor((page - 1) / 10) + 1) * 10;
  let endPagination = startPagination + 9;
  let maxPagination = 104;
  if (endPagination > maxPagination) endPagination = maxPagination;

  if (startPagination === 1) {
    const li = createPaginationList('page-item disabled');
    const i = createPaginationIcon('fas fa-angle-double-left');
    const a = createPaginationAnchor('#');
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  } else {
    const li = createPaginationList('page-item');
    const i = createPaginationIcon('fas fa-angle-double-left');
    const a = createPaginationAnchor(
      `board_list.jsp?root=${root}&type=${type}&page=${1}`
    );
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  }
  if (startPagination === 1) {
    const li = createPaginationList('page-item disabled');
    const i = createPaginationIcon('fas fa-chevron-left');
    const a = createPaginationAnchor('#');
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  } else {
    const li = createPaginationList('page-item');
    const i = createPaginationIcon('fas fa-chevron-left');
    const a = createPaginationAnchor(
      `board_list.jsp?root=${root}&type=${type}&page=${
        (Math.floor(page / 10) - 1) * 10 + 1
      }`
    );
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  }
  for (let i = startPagination; i <= endPagination; i++) {
    let li = null;
    if (i === page) li = createPaginationList('page-item active');
    else li = createPaginationList('page-item');
    const a = createPaginationAnchor(
      `board_list.jsp?root=${root}&type=${type}&page=${i}`
    );
    a.innerText = i;
    li.appendChild(a);
    pagination.appendChild(li);
  }
  if (endPagination === maxPagination) {
    const li = createPaginationList('page-item disabled');
    const i = createPaginationIcon('fas fa-chevron-right');
    const a = createPaginationAnchor('#');
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  } else {
    const li = createPaginationList('page-item');
    const i = createPaginationIcon('fas fa-chevron-right');
    const a = createPaginationAnchor(
      `board_list.jsp?root=${root}&type=${type}&page=${
        (Math.floor(page / 10) + 1) * 10 + 1
      }`
    );
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  }
  if (endPagination === maxPagination) {
    const li = createPaginationList('page-item disabled');
    const i = createPaginationIcon('fas fa-angle-double-right');
    const a = createPaginationAnchor('#');
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  } else {
    const li = createPaginationList('page-item');
    const i = createPaginationIcon('fas fa-angle-double-right');
    const a = createPaginationAnchor(
      `board_list.jsp?root=${root}&type=${type}&page=${maxPagination}`
    );
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  }
};

const handledType = () => {
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

const handledRoot = () => {
  const { root } = params;
  const roots = [
    'free',
    'reading',
    'movie',
    'sports',
    'game',
    'empath',
    'viewcnt',
  ];
  const navItems = Array.from(document.querySelectorAll('.nav-item'));
  navItems[roots.indexOf(root)].classList.add('active');
};

const handleParams = () => {
  const search = new URLSearchParams(location.search);
  params = Object.fromEntries(search);
  if (!params.root) params.root = 'free';
  if (!params.type) params.type = 'list';
  if (!params.page) params.page = 1;
};

const hnadledLogin = () => {
  const login = document.querySelector('.nav__login');
  login.classList.remove('hide');
  if (sessionStorage.getItem('userId')) {
    login.classList.add('hide');
  }
};

const handleLoaded = () => {
  hnadledLogin();
  handleParams();
  handledPagination();
  handledType();
  handledRoot();
};

const boardInit = () => {
  window.addEventListener('load', handleLoaded);
  searchType.addEventListener('change', handleInputChange);
};

boardInit();
