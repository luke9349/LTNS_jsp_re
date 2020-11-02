const pagination = document.getElementById('pagination');
let params = null;

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
      `board_list.do?root=${root}&type=${type}&page=${1}`
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
      `board_list.do?root=${root}&type=${type}&page=${
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
      `board_list.do?root=${root}&type=${type}&page=${i}`
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
      `board_list.do?root=${root}&type=${type}&page=${
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
      `board_list.do?root=${root}&type=${type}&page=${maxPagination}`
    );
    a.appendChild(i);
    li.appendChild(a);
    pagination.appendChild(li);
  }
};

export const initPagination = (initialParams) => {
  params = initialParams;
  handledPagination();
};
