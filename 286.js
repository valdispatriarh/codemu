//https://code.mu/ru/javascript/book/prime/spread/intro/
let arr284 = [1, 2, 3, 4, 5];
function func284(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func284(...arr284))

function func286(...rest) {
	console.log(rest);
}
func286(1, 2, 3)
