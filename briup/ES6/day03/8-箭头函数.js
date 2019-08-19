function test(){
    console.log(this);
}
// test();

// console.log(this);

let test2 = ()=>{
    console.log(this);
}
test2();

let obj = {
    test,
    test2
}
obj.test();
obj.test2(); 

let test3 = ()=>{
    console.log(arguments);
}
test3(1,2,3);