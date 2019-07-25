
var arr = [23,43,54,65,432,13,4,6,765,65,4,32,3];

console.log(arr);
//console.log(arr.reverse());
//console.log(arr);

console.log(arr.sort(com));
console.log(arr);

function com(a,b){
 // return a-b; a-b<0 a<b  a b 升序
//a-b>0  a>b  b a 升序
// if (a>b){
  //return -1;//负数不交换位置
//} 
//return 1;//正数交换位置
return b-a;


}
var stus = [{
name:'zhangsan',
age:12

},{
name:'lisi',
age:20
}

];

console.log(stus);
stus.sort(compare('age',''));
console.log(stus);
function compare(attr,rules){
  return function(o1,o2){
  if(rules==='升序'){
   if(o1[attr]<o2[attr]){
     return -1;
}
   return 1;
}else{
    if(o1[attr]>o2[attr]){
       return -1;
}
return 1;
}


}



}


