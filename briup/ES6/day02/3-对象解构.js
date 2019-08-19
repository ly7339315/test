let {a,b} = {a:1,b:2};
console.log(a,b);

{
	let {name:myName,age:myAge} = {name:'zhangsan',
	gender:'男',
	age:12
}
console.log(myName,myAge);

}

{
	let {name:name,age:age} = {name:'zhangsan',
	gender:'男',
	age:12
}
console.log(name,age);

}

{
	let {name:myName,age:myAge,address:myAddress='江苏'} = {name:'zhangsan',
	gender:'男',
	age:12
}
console.log(myName,myAge,myAddress);

}







