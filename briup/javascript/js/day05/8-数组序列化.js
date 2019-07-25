
var arr = [1,2,3,4];

console.log(typeof arr);
console.log(arr instanceof Array);
console.log(arr instanceof Object);

console.log(Array.isArray(arr));
console.log(Array.toString(arr));

function test(){
 console.log(Array.isArray(arguments));

}
test();

console.log(arr);
console.log(arr.toString());
console.log(arr.join());
console.log(arr.join('&'));
console.log(JSON.stringify(arr));












