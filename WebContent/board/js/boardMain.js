import { initParams } from './handleParams.js';
import { initActionbar } from './actionBar.js';
import { getDate } from './ajax.js';
import { initAjaxScroll } from './ajaxScroll.js';

const params = initParams();

initActionbar(params);
getDate(params);

if(params.type === 'post') initAjaxScroll(params);





