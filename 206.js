//https://code.mu/ru/javascript/book/prime/functions/basis/sequential-calling/
function sqrt(num) {
	return Math.sqrt(num);
}
function round(num) {
	return num.toFixed(3);
}
console.log(round(sqrt(2)))


function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let res206 = sum(sqrt(2), sqrt(3), sqrt(4))
console.log(res206)

console.log(round(res206))



