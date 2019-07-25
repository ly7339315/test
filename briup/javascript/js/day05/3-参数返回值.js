function test(a,b){

   return 'hello';
}
console.log(test.length);
test();

console.log(test());


function handle(fun){
  var msg = 'hello';
	fun(msg);
}

handle(function(m){
  console.log(m);
});


function handle2(){
    return function(){
      console.log(123);
     
}

}
handle2()();






