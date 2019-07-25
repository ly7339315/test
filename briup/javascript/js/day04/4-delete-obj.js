var obj = {id:1001,name:'zhangsan',age:12,gender:'男',info:'',hibby:null,address:''};
console.log(obj);
delete obj.address;
console.log(obj);

for(var key in obj){
  //如果obj[key]转换boolean为false
  if (!obj[key]){
delete obj[key];

}  

}
console.log(obj);



console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));

 console.log(typeof JSON.stringify(obj));
 console.log(typeof JSON.parse(JSON.stringify(obj)));



