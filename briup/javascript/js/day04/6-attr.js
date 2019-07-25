console.log(Object.prototype);
console.log(Object.prototype.constructor=== Object);
var obj = {name:'zhangsan'};
console.log(obj.toString());
console.log(obj.toString() === Object.prototype.toString());

console.log(obj.constructor);
console.log('name' in obj);
console.log('toString' in obj);
console.log('aaa' in obj);


console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('toString'));

console.log('---------');

console.log(obj.propertyIsEnumerable('name'));
console.log(obj.propertyIsEnumerable('toString'));

for(var key in obj){
console.log(key);
}


console.log(Object.prototype.isPrototypeOf(obj));

var date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());

