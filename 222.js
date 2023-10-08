//https://code.mu/ru/javascript/book/prime/functions/variables/parameters-objects/
//1//!
//2//1 памыліўся
function func2222(arg) {
	arg = '!';
}

let obj2222 = {a: 1, b: 2, c: 3};
func2222(obj2222.a);
console.log(obj2222);
//3//1 памыліўся
function func222q3(obj222q3) {
	obj222q3 = '!';
}

let obj222q3 = {a: 1, b: 2, c: 3};
func222q3(obj222q3.a);
console.log(obj222q3);
//4//[1,3]
function func(arr) {
	arr.splice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);
//5//[1, 2, 3] 
function func222q5(arr222q5) {
	arr222q5.slice(1, 1);
}

let arr222q5 = [1, 2, 3];
func222q5(arr222q5);
console.log(arr222q5);
//6//!
function func222q6(arr222q6) {
	let newArr = arr222q6;
	newArr[0] = '!';
}
let arr222q6 = [1, 2, 3];
func222q6(arr222q6);
console.log(arr222q6);
