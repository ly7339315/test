// import { a,b,test } from './3-module';
// import { m,say } from './3-module';
// console.log(a,b,test,m,say);

import test from './3-module';
import {n,a,b} from './3-module';
import * as obj from './3-module';
// console.log(obj);
// console.log(obj.default);
obj.default();
// console.log(test,n,a,b);
export {n,a} 
// test();