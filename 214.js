//https://code.mu/ru/javascript/book/prime/functions/basis/mistakes/
//1//////////////////////////////////////////////
function func1q214() {
	return 3;
}
function func2q214() {
	return 5
}
//вынікам працы функціі зьяуляецца return а не console.log
console.log( func1q214() + func2q214() );
//2//////////////////////////////////////////////////////////////////////////
function sum214(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
    return res;
}
//вынес return за межы фора каб вынік запісауся калі пройдуць усе ітэраціі
console.log(sum214([1, 2, 3, 4, 5]));
//3//////////////////////////////////////////////////////////////////
let arr2143 = [1, 2, 3, 4, 5];
function calcSumElemArr(arr2143) {
	let res = 0;
	for (let elem of arr2143) {
		res += elem;
	}
    return res
}
console.log(calcSumElemArr(arr2143))
//4///////////////////////////////////////////////////////////
function func1() {
	return 3;
}
function func2() {
	return 5;
}
//дабавіў дужкі каб быў вызаў функцыі
console.log( func1() + func2() );

//5///////////////////////////////////////////////
console.log(calcSumElemArr214q5([1, 2, 3, 4, 5]));
function calcSumElemArr214q5(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
    }
	return sum;
}
//6////////////////////////////////////////////////////////////////////
let res214q6 = sum([1, 2, 3, 4, 5]);
console.log(res214q6);
function sum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
    return sum
}
//7////////////////////////////////////////////////////////////////////////////////
function addZeroTo1Before9(num) {
	if (num <= 9 && num >= 1) {
		return '0' + num;
	}
    return num
}
console.log(addZeroTo1Before9(3))
console.log(addZeroTo1Before9(11))
//8////////////////////////////////////////////////
let arr214q8 = [1, 2, 3, 4, 5];
console.log(sum(arr214q8));

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
}
//9////////////////////////
let num214q9 = 12345;
let res214q9 = getDigitsSum(num214q9);
console.log(res214q9);

function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;
	for (let elem of arr) {
		sum += +elem;
	}
	return sum;
}
//10//////////////////////////////////////
console.log(isPrime(13)); // должен вывести true 
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(10));
console.log(isPrime(-10));

function isPrime(num) {
	if (num <= 1) {
        return false;
    }
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
    return true
}
