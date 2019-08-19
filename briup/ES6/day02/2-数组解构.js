// let [a,b,c] = [1,2,3,4,5];
// console.log(a,b,c);

let [a,b,c,...d] = [1,2,3,4,5,6,7];
console.log(a,b,c,d);

let result = Math.max(2,4,7,92,2);
console.log(result);

let result2 = Math.max(...[1,2,3,4,5,6,7])

console.log(result2);

console.log(...[1,2,3,4,5,6,7]);

// let result3 = ...[1,2,3,4,5,6,7];
// console.log(result3);

// function test(...tail){

// }

// test(1,2,3,4,5);

// function test([a,...tail]){

// }

// test([1,2,3,4,5]);
// let [a,...tail] = [1,2,3,4,5]

{
	let [a,b] = [];
	console.log(a,b);

	let [c=1,d=2] = [];
	console.log(c,d);

	let [e=1,f=2] = [3,4];
	console.log(e,f);

	function test(){
		console.log('test');
		return 2;
	}
	let [g=test()] = [1];
	console.log(g);
}

