// 引入3-module.js中的一些变量，要去使用
/*import { a,b,test } from './3-module.js';
import { m,say } from './3-module.js';
console.log(a,b,test,m,say);*/
// export default的导入
import test from './3-module.js';
// export的导入
import {n,a,b} from './3-module.js';
// export的导入和export default的导入 组成对象，并且export default的属性名是'default'
import * as obj from './3-module.js';
/*console.log(obj);
console.log(obj.default);
obj.default();
console.log(test,n,a,b);*/
// test();
export {n,a} from './3-module.js';

/*import {n,a} from './3-module.js';
export {n,a};*/







