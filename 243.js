//https://code.mu/ru/javascript/book/prime/functions/nested/number-as-parameter/
function test243(num, func1, func2) {
	return func1(num) + func2(num);
}
console.log(test243(3, function(num){return num*num}, function(num){return num*num*num}))
