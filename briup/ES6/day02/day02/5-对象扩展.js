let name = 'zhangsan';
let age = 12;
let gender = '男';
// let {name,age,gender} = {};
let obj = {
	name,
	age,
	gender,
	// 对象方法的简写
	// sayName:function(){}
	/*sayName(){
		console.log('hello');
	}*/
	sayName:()=>{
		console.log('hello');
	}

};
console.log(obj);

/*let obj = {
	name:name,
	age:age,
	gender:gender
};*/
let obj2 = {
	name,
	age,
	gender,
	sayHi(){
		console.log('hi');
	}
};
obj2.sayHi();
// 属性名可以用表达式
// 给对象中添加10个属性，以name为前缀，以index为后缀
let obj3 = {};
for(let i=1;i<11;i++){
	obj3['name'+i] = i;
}
console.log(obj3);

let obj4 = {
	['name'+name]:'hello'
};
// {namezhangsan:'hello'} 
// 用上面的name变量的值作为属性名
let obj5 = {
	[name]:'hello'
};
// {zhangsan:'hello'}
console.log(obj4,obj5);

// 函数/方法的名字
console.log(obj2.sayHi.name);
function test(){}
console.log(typeof test.name);







