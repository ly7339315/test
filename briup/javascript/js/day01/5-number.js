
var a = 1;
var b= 2.234;
console.log(a,b);
console.log(typeof a);
var eight=011;
console.log(eight);//9

var h = 0x12;
console.log(h);//18
console.log(5e2);//5*10 的2次方 500
console.log(5e-2);//5*10的-2次方 0.05


//NaN
console.log('---------');
var c = NaN;
console.log(c);
console.log(typeof c);
var d = 10/'hello';
console.log(d);//NaN
console.log(typeof d );

console.log(c==d);//false

console.log(NaN==NaN);//false
console.log(d==NaN);//false
console.log(c==NaN);//判断一个值是否等于NaN不能使用==
var e=1000/undefined;
console.log(e);
console.log(typeof e);
console.log(isNaN(e));
console.log(isNaN(d));//使用isNaN判断
console.log(isNaN(c));
console.log(Number.MIN_VALUE);//5e-324
console.log(Number.MAX_VALUE);//1.7976931348623157e+308
console.log(3e333);
console.log(-3e333);
console.log(typeof Infinity);
console.log(typeof -Infinity);

