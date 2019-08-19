'use strict';

var set = new Set();
console.log(set);
console.log(set.size);
set.add(1);
set.add(1);
set.add('hello');
console.log(set);
console.log(set.size);
// set.delete(1);
console.log(set);
// set.clear();
console.log(set);
var keys = set.keys();
console.log(keys);
var values = set.values();
console.log(values);
console.log('------');
while (true) {
    var result = values.next();
    if (result.done) {
        break;
    } else {
        console.log(result.value);
    }
}

// console.log(values.next());
// console.log(values.next());
// console.log(values.next());

// for(let value of values){
//     console.log(value);
// }

console.log('------');
var entries = set.entries();
console.log(entries);

set.forEach(function (value, key, set) {
    console.log(value, key, set);
});