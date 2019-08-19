let arr = [..."hello"];
console.log(arr);

let arr2 = [...[1,2,3,4]];
console.log(arr2);
console.log(..."hello");

let name = "zhangsan";
let age = 12;
let obj = {
    name,
    age
}
let obj2 = {
    [name]:"zhangsan",
    [age+name]:13
}
console.log(obj);
console.log(obj2);
console.log(isNaN(Number("foo")));
