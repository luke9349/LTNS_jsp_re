const btns = document.querySelectorAll('.actionBtn');
let params = null;

const handleInputChange = () => {
  search.focus();
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

export const initActionbar = (initialParams) => {
  params = initialParams;
  handledType();
  $('#searchType').on('change', handleInputChange);
};
