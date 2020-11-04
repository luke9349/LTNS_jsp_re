import { initParams } from './handleParams.js';
import { initActionbar } from './actionBar.js';
import { getDate } from './ajax.js';
import { initAjaxScroll } from './ajaxScroll.js';
import { checkErrorSession, showModal } from './modal.js';

const params = initParams();



initActionbar(params);
getDate(checkErrorSession(), params);
if (params.type === 'post') initAjaxScroll(checkErrorSession(), params);	





if (checkErrorSession()) {
	showModal();
} 


