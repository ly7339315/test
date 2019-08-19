let name = "zhangsan";
let age = 12;
let gender = "男";

let obj = {
    name,
    age,
    gender,
    sayName:() => {
        console.log('hello');
    }
}

let obj2 = {
    name,
    age,
    gender,
    sayHi(){
        console.log('hi');
    }
}
obj2.sayHi();
console.log(obj);
// let obj = {
//     name:name,
//     age:age,
//     gender:gender
// }

let obj3 = {

};
for(let i=1;i<11;i++){
    obj3['name'+i]=i;
}
console.log(obj3);

let obj4 = {
    ['name'+name]:'hello'
};
console.log(obj4);

let obj5 = {
    [name]:'hello'
};
console.log(obj5);





