// 创建Map
let map = new Map();
console.log(map);
console.log(map.size);
// 添加数据  key,value
map.set('name','zhangsan');
map.set('age','12');
map.set('name','lisi');
map.set({},'lisi');
console.log(map);
console.log(map.size);
// 通过key值获取value值
console.log(map.get('name'));
/*// 删除
console.log(map.delete('name'));
console.log(map);
// 清空
console.log(map.clear());
console.log(map);*/

// 遍历  返回迭代器对象，可用for-of遍历
let keys = map.keys();
console.log(keys);

let values = map.values();
console.log(values);

let entries = map.entries();
console.log(entries);

map.forEach(function(value,key,map){
	console.log(value,key,map);
});


