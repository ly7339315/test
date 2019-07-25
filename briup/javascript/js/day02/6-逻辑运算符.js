//逻辑与 短路运算符
// 有假则假，如果遇到假，立即跳出该假，如果没有假，跳出最后一个数
//假：假性值: null undefined NaN 0 '' false  ;boolean类型为false的值
var a=123;
var b=undefined;
var c='hello';
var d='';
var e=0;

console.log(a&&b);
console.log(b&&c);
console.log(a&&c);
console.log(a&&d);
console.log(a&&e);
console.log(b&&d);
console.log(d&&e);
console.log(b&&e);


console.log(a||b);
console.log(d||e);
console.log(a||c);
console.log(b||c);
console.log(b||d);


console.log(!a);
console.log(!!b);
console.log(!c);
console.log(!!c);









