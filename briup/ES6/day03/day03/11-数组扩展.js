let arr = [1,2,3];
// 数组填充
/*console.log(arr.fill(9));
console.log(arr);*/
// 是否包含，返回true/false
// console.log(arr.includes(22));
// 数组实例的遍历 keys values entries,返回迭代器对象，使用for-of遍历
let keys = arr.keys();
console.log(keys);
for(let key of keys){
	console.log(key);
}
let values = arr.values();
console.log(values);
for(let value of values){
	console.log(value);
}
let entries = arr.entries();
console.log(entries);
for(let [key,value] of entries){
	console.log(key,value);
}



