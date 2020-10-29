const btns = document.querySelectorAll('.actionBtn');
const searchType = document.getElementById('searchType');
const search = document.getElementById('search');

const handleInputChange = () => {
  search.focus();
};

const handleLoadedBtns = () => {
  const params = new URLSearchParams(location.search);
  const type = Object.fromEntries(params);

  switch (type.type) {
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

const actionBtnInit = () => {
  window.addEventListener('load', handleLoadedBtns);
  searchType.addEventListener('change', handleInputChange);
};

actionBtnInit();
