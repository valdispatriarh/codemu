//https://code.mu/ru/javascript/book/prime/functions/basis/return-loop/
function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		return sum;
	}
}

console.log( func(5) );//покажет 1, т.к. return выполниться при первой итерации и покинет цикл и функцию
//чтобы испонить задумку автора и вывести сумму всех чисел нужно вынести return за пределы for

function func2(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		
	}
    return sum;
}
console.log( func2(5) )

