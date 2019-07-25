function test(){
   console.log('test');
   return 1;
}
test();
var result = test();
console.log(result);


var test1 = function(){
  console.log(123);
}
test1();


(function (){
console.log(111);

})();//IIFE 立即执行函数














