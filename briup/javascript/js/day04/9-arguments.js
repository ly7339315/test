function add(a,b){
console.log(arguments);
var total = 0;
for(var i = 0;i<arguments.length;i++){
    
 total += arguments[i];
// console.log(arguments[i]);
}
  return total;

}
var result = add(1,2,3,4,5,6,7);
console.log(result);

//var result = 1;
function mul(num){
  //console.log(arguments.callee);
   // num*mul(num-1);  
  if(num>1){
 return num*arguments.callee(num-1);

}else{
return 1;
}



}
var result=mul(5);
console.log(result);









