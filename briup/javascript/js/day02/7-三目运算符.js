var result = 5>3?2:0;
console.log(result);

if(5>3){
 result = 2;
}else{
  result = 0;
}
console.log(result);

var a = 'hello';
'hello'?console.log('123'):console.log('345');
a?test():add();
var handle = !a?test:add;
handle();
function test(){
console.log('test');


}
function add(){
 console.log('add');

}

