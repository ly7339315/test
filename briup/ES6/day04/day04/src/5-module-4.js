//引入3、4
// 引3模块中的default的导出
// 引4模块中的n,a的导出
import test from './3-module.js';
import {a,n} from './4-module-3.js';
console.log(test,n,a);


