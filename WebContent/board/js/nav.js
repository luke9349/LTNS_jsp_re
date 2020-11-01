let root = 'NOTICE';

const changeNavActive = () => {
  const roots = [
    'NOTICE',
    'MOVIE',
    'BOOK',
    'SPORTS',
    'GAME',
    'empathize',
    'viewcnt',
  ];
  const navItems = Array.from(document.querySelectorAll('.nav-item'));
  navItems[roots.indexOf(root)].classList.add('active');
};

const handleLoadedRoot = () => {
  const search = new URLSearchParams(location.search);
  const params = Object.fromEntries(search);
  if (params.root) root = params.root;

  changeNavActive();
};

const initNav = () => {
  window.addEventListener('load', handleLoadedRoot);
};

initNav();
