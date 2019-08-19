const {JSDOM} = require('jsdom');
const {window} = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);
// console.log($.ajax);
let p = new Promise((resolve,reject)=>{
    $.ajax({
        url:'http://134.175.154.93:8099/manager/category/findAllCategory',
        method:'get',
        success(res){
            resolve(res);
        },
        error(error){
            reject(error);
        }
    });
});
// let p1 = Promise.resolve(p);
// p1.then((res)=> { 
//     console.log(res,'=====');
//  }).catch((error)=>{
//      console.log(error);
//  }).finally(()=>{
//      console.log('finally');
//  });

// let p2 = Promise.resolve('hello');
// p2.then(()=>{
//     console.log('resolve')
// }).catch(()=>{
//     console.log('reject');
// });

// let obj = {
//     name:'zhangsan',
//     age:12,
//     then(){
//         console.log('obj的then方法');
//     }
// };
// let p3 = Promise.resolve(obj);
// p3.then(()=>{
//     console.log('resolve');
// });


// let p4 = Promise.resolve();
// p4.then(()=>{
//     console.log('resolve');
// }).catch(()=>{
//     console.log('reject');
// });

let p5 = Promise.resolve('hello');
p5.then(()=>{
        console.log('resolve');
    }).catch(()=>{
        console.log('reject');
    });