//https://code.mu/ru/javascript/book/prime/functions/basis/return-trick/
function func(num1, num2) {
	let res;
	
	if (num1 > 0 && num2 > 0) {
		res = num1 * num2;
	} else {
		res = num1 - num2;
	}
	
	return res;
}

console.log(func(3, 4));

function func22(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}
console.log(func22(3, 4))
console.log(func22(-6, -8));