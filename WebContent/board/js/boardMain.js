import { initParams } from './handleParams.js';
import { initActionbar } from './actionbar.js';
import { initPagination } from './pagination.js';
import { getData } from './ajax.js';

const params = initParams();

initActionbar(params);
const ajaxData = getData(params);
console.log(ajaxData);
initPagination(params);


