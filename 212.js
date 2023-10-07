//https://code.mu/ru/javascript/book/prime/functions/basis/logical-operators/
function func212(a, b) {
	if (a == b) {
		return true;
	} else {
		return false;
	}
}
console.log(func212(2, '2'))

function func212b(a, b) {
	return a == b 
}
console.log(func212b(2, '2'))

function func2122(a, b) {
	return a != b
}
console.log(func2122(2, '2'))

function func2123(a, b) {
	return a + b >= 10
}
console.log(func2123(2, 13))

function func2124(num) {
	 return num >= 0
}
console.log(func2124(-13))
