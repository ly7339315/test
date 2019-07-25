function test(a,b){
  console.log(this,a,b);

}

test();

var obj = {name:'zhangsan'};

test.call(obj,3,4);
test.apply(obj,[3,4]);
console.log('-------');
test.bind(obj);
test.bind(obj)(5,6);
test.bind(obj,7,8)();










