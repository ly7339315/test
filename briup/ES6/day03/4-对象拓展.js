let obj = {
    name:"zhangsan",
    friends:[],
    count:{}
};
let obj2 = {
    name:"lisi",
    age:14
}
// let obj2 = obj;
// let obj2 = Object.assign(obj);
// console.log(obj2 === obj);
let obj3 = Object.assign({},obj);
let obj4 = Object.assign({},obj,obj2);

console.log(obj3 === obj);
console.log(obj3.friends === obj.friends);
console.log(obj3.count === obj.count);
console.log(obj4 === obj);
console.log(obj4);

