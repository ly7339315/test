'use strict';

var map = new Map();
console.log(map);
console.log(map.size);
map.set('name', 'zhangsan');
map.set('age', '12');
map.set('name', 'lisi');
map.set({}, 'lisi');
console.log(map);
console.log(map.size);
console.log(map.get('name'));
var keys = map.keys();
console.log(keys);
var values = map.values();
console.log(values);
var entries = map.entries();
console.log(entries);