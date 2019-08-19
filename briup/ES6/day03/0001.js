// let  arr = [5,8,9,4,7,8,9,5,4,2,6];
// let arr1 = arr.reverse();
// console.log(arr1);
// let arr2 = [...new Set(arr)];

// console.log(arr2);
// console.log(arr);
//  let test = (a,b)=>{
//     return a-b;
// }
// let arr3 = arr.sort(test);
// console.log(arr3);

// let arr4 = [{
//     name:'zhangsan'
// },{
//     name:'lisi'
// },{
//     name:'wangwu'
// }];
// arr4.forEach((res)=>{
//    console.log(res);
// });
// let ent = arr4.entries();
// console.log(ent);
// for(let [key,value] of ent){
//     console.log(value);
// }

// const axios = require('axios');
// axios.get('http://134.175.154.93:8099/manager/category/findAllCategory' ).then(function(re){
//     // console.log(re.data.data);
//     var  res = re.data.data;
  
//     var set = new Set(res);
//     let ent = set.entries();
//     for(let [key,value] of ent){
//         // console.log(...key,...value);
//     }
//     // console.log(set);
// }).catch(function(error){
//     // console.log(error);
// });

let obj = 12345678;
obj = obj.toString();
obj = obj.split('');
console.log(obj.constructor);
console.log(obj);
console.log([...obj]);



