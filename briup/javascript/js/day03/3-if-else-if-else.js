var grade = '   ';
var result = '';
grade = +grade;
console.log(grade);
//if((grade>=0)&&(grade<=100)){
	if(grade<60&&grade<=0){
  result = '不及格';
}else if(grade>=60&&grade<70){
 result='中';
} else if(grade>=70&&grade<90){
  result = '良';
}  else if(grade>=90&&grade<=100) {
 result = '优';
} else{
 result = '出现错误请更改';
}  



//}//else{
	//result = '成绩出现错误,请更改';



//}
console.log(result);




