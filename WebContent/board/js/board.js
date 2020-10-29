const btns = document.querySelectorAll('.actionBtn');
const searchType = document.getElementById('searchType');
const search = document.getElementById('search');
const styleTag = document.getElementById('toggleStyle');

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
	  styleTag.href = './css/album.css';
      return;
    case 'post':
      btns[2].classList.add('text-primary');
	  styleTag.href = './css/post.css';
      return;
    default:
      btns[0].classList.add('text-primary');
      return;
  }
};

const handleLoaded = () => {
  const login = document.querySelector('.nav__login');
  login.classList.remove('hide');
  if (sessionStorage.getItem('userId')) {
    login.classList.add('hide');
  }
};

const boardInit = () => {
  window.addEventListener('load', handleLoaded);
  window.addEventListener('load', handleLoadedBtns);
  searchType.addEventListener('change', handleInputChange);
};

boardInit();
