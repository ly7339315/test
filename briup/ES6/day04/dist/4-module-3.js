'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a = exports.n = undefined;

var _module = require('./3-module');

var obj = _interopRequireWildcard(_module);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// console.log(obj);
// console.log(obj.default);
obj.default();
// console.log(test,n,a,b);
// import { a,b,test } from './3-module';
// import { m,say } from './3-module';
// console.log(a,b,test,m,say);

exports.n = _module.n;
exports.a = _module.a;
// test();