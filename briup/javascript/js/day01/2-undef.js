var a;
console.log(a);
//typeof 关键字进行数据类型的判断
console.log(typeof a);
console.log(typeof undefined);
//undefined类型只有一个值，就是undefined值
var b=undefined;
console.log('b的值：', b);
console.log('b的数据类型：',typeof b);
//console.log(1,2);
//console.log(c);//使用一个没有声明的变量会报错  c is not defined
console.log(c);//undefined

var c=1;//变量声明提升到代码的第一行，然后解析执行代码
console.log(c);
