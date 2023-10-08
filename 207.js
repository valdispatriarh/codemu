//ttps://code.mu/ru/javascript/book/prime/functions/basis/return-nuance/
function func(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func(3) ); //3
//после выполнения первой по порядку иструкцции Return чтение функции завершается

function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func(10) );//100
console.log( func(-5) );//5
//мы видим обычное условие if/else и выполниться тот  return смотря по какой ветке пойдет выполнение кода

function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func(10) );//100
console.log( func(-5) );//5
//похожая ситуция со 2 заданием только вместо else обычная строчка кода, поведение точно такое же


