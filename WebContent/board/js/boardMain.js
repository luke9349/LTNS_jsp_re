import { initParams } from './handleParams.js';
import { initActionbar } from './actionbar.js';
import { initPagination } from './pagination.js';

const params = initParams();

initActionbar(params);
initPagination(params);

console.log(params);
