import { initParams } from './handleParams.js';
import { initActionbar } from './actionBar.js';
import { getData } from './ajax.js';

const params = initParams();

initActionbar(params);
getData(params);





