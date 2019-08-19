/*function test(){
	console.log(this);
	(()=>{
		console.log(this);
	})();
}
// test();  //global  2次
let obj = {
	name:'zhangsan',
	test
};
obj.test();  //obj 2次*/

function test(){
	console.log(this,'----');  //global
	return ()=>{
		console.log(this,'++++');  //global
	}
}
let obj = {
	name:'zhangsan',
	say:test()
};
obj.say();









