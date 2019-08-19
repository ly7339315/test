// Set集合
let set = new Set();
console.log(set);
// size属性返回个数
console.log(set.size);
// 添加数据
set.add(1);
set.add(1);
set.add('hello');
console.log(set);
console.log(set.size);
// 删除
/*set.delete(1);
console.log(set);
// 清空
set.clear();
console.log(set);*/
// 遍历
// 在set中key和value是一样的，都是value
let keys = set.keys();
console.log(keys);  //迭代器对象
let values = set.values();
console.log(values);  //迭代器对象
console.log('----');
// 遍历迭代器对象
// Iterator对象可以使用for-of遍历，自己写代码遍历
while(true){
	let result = values.next();
	if(result.done){
		break;
	}else{
		console.log(result.value);
	}
}
/*console.log(values.next());
console.log(values.next());
console.log(values.next());*/
/*for(let value of values){
	console.log(value);
}*/
console.log('----');
let entries = set.entries();
console.log(entries);  //迭代器对象

// 使用forEach
set.forEach(function(value,key,set){
	console.log(value,key,set);
});













