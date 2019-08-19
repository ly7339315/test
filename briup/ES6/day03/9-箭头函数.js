// function test(){
//     console.log(this);
//     (()=>{
//         console.log(this);
//     })();
// }
// test();

function test(){
    console.log(this,'-----');
    return ()=>{
        console.log(this,'++++');
    }
}

let obj = {
    name:"zhangsan",
    
   say:test()
}
obj.say();