let obj = {
    name:"zhangsan",
    age:12,
    gender:'男'
}
let keys = Object.keys(obj);
console.log(keys);
let values = Object.values(obj);
console.log(values);
let entries = Object.entries(obj);
console.log(entries);

for(let [key,value] of entries){
    console.log(key,value);
}
let arr = ['hello','time','term'];
for(let item of arr){
    console.log(item);
}

function test(){
    for(let item of arguments){
        console.log(item);
    }
}
test(1,2,3);