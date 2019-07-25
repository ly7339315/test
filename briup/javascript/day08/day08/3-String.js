//String属性和方法
//length  字符个数
//charAt(index) 获取index位置上的字符
//charCodeAt(index) 获取index位置上的字符的ASCII码值
//遍历字符串，拿到每一个字符和编码
var str = ' abc defg ';
str.split('').forEach(function(item){
	console.log(item);
});
for(var i=0;i<str.length;i++){
	console.log(str.charAt(i),'--',str.charCodeAt(i));
}
//去除所有的空格
console.log(str.split(' ').join(''));
//去除前置和后置空格
console.log(str.trim());

console.log(str.concat('hello')); 
console.log(str.concat({name:'briup'}));
//转成全大写
console.log('hello'.toUpperCase());
//转成全小写
console.log('HEllo'.toLowerCase());











