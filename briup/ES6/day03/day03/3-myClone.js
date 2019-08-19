let obj = {};
let obj1 = {
	name:'zhangsan',
	age:12,
	friends:[1,2,3],
	count:{
		time:'2019-09-09'
	}
};
let obj2 = {
	name:'lisi',
	gender:'男',
	sayName:function(){}
};
let obj3 = {
	color:'red',
	weight:'100'
};
function myClone(target,...tail){
	// tail是一个数组，里面是对象
	tail.forEach(function(item){
		// item 是一个一个的对象
		for(let key in item){
			/*if((typeof item[key]) === 'function'){
				// console.log(item[key]);
				// console.log(item[key].toString());
				// target[key] = JSON.parse(JSON.stringify(item[key]));
				target[key] = item[key];
			}*/
			if((Array.isArray(item[key])) || (item[key].constructor===Object)){
				console.log(1);
				target[key] = JSON.parse(JSON.stringify(item[key]));
			}else{
				target[key] = item[key];
			}
		}
	});
	return target;
}
myClone(obj,obj1,obj2);
console.log(obj);
console.log(obj.sayName===obj2.sayName);  //true
// 数组
console.log(obj.friends===obj1.friends);  //false
// 对象
console.log(obj.count===obj1.count);  //false


/*let arr = [];
console.log(arr instanceof Object); //true
let fun = function(){}
console.log(fun instanceof Object); //true
console.log(arr.constructor);
console.log(fun.constructor);
console.log({}.constructor === Object);*/

/*let obj = {name:'zhangsan'};
let obj1 = obj;
let obj2 = {name:'zhangsan'};*/







