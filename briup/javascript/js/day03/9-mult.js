
var num = 6;
var mult = 1;
var str = '';
for(i=num;i>0;i--){
  mult*=i;
if(i==1){
str += i;
}else{
 str += i + '*';
}
}
console.log(str+'='+mult);












