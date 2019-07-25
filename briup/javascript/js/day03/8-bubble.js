//var arr = [23,4,56,232,9,100];
var arr = [23,213,244,545,6765,213,3,4,5,3,23423,32,54];
console.log(arr);
for(var i=0;i<arr.length-1;i++){
	for(var j=0;j<arr.length-1-i;j++){
if(arr[j]<arr[j+1]){
	var temp = arr[j];
  arr[j] = arr[j+1];
  arr[j+1] = temp;
}


}
console.log('第'+(i+1)+'轮排序的结果:',arr );

}

console.log(arr);











