for(var i=1;i<11;i++){
    console.log(i);
 		//i++;
}
console.log('-------'+i);


var j = 1;
for(;j<11;){
 	console.log(j);
	j++;
}


var count = 0;
my:for(;;){
  console.log(count);
  count += 1;

	if(count==5){
   continue my;
}

  console.log('-----------');
 if(count==20){
  break my;
}
}

console.log('------'+count);







