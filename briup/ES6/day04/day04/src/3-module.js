// 需要导出内容，让其他模块使用
/*let a = 1;
let b = 2;
let test = function(){
	console.log('test');
}
console.log('3-module....');*/
// 导出
/*export {a,b,test}
export let m = 10;
export function say(){
	console.log('say');
}*/
// 默认导出
/*export default function(){
	console.log('default');
}*/
/*export default {
	name:'zhangsan',
	age:12
}*/
let m = 100;
// export default 'hello'
// export default m;
export default function(){
	console.log('default');
};
export let n = 10;
export let a = 1;
export let b = 2;









