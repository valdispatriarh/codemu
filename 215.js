//https://code.mu/ru/javascript/book/prime/functions/basis/practicum/
//1///////////////////////////
function calcSumElemArr215(arr) {
    let sum = 0
    for(let elem of arr){
        sum += elem
    }
    return sum
}
console.log(calcSumElemArr215([1, 2, 3, 4, 5]))
//2//////////////////////////////
function getDivisors(num){
    let i = 1
    let arr215q2 = []
    while(num !== i){
        if( num % i === 0){
        arr215q2.push(i)
        } 
        ++i
    }
    return arr215q2
}
console.log(getDivisors(10))
// прапанова чата па аптымізацыі
function getDivisors2(num) {
    const divisors = [];
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    divisors.push(num); // Добавляем само число в список делителей
    return divisors;
}
//3/////////////////////////
function getArrToStr(str) {
    return  str.split('')
}
console.log(getArrToStr('papa'))
//4/////////////////////////////////////////////////
function getReversStr(str) {
    return str.split('').reverse().join('')
}
console.log(getReversStr('papa'))
//5/////////////////////
function changeFirstSimbolToUpperCase(str){
    return str.slice(0, 1).toUpperCase() + str.slice(1)
}
console.log(changeFirstSimbolToUpperCase('papa'))
//6/////////////////////////////////////////////
function changeFirstSimbolInWordToUpperCase(str){
   let arr =  str.split(' ')
   let newArr = []
      for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1))
   }
   return newArr.join(' ')
    // return str.slice(0, 1).toUpperCase() + str.slice(1)
}
console.log(changeFirstSimbolInWordToUpperCase('papa mama'))
//7//////////////////////////////////////////////////////////////////////
function fillArrNum(num){
    let arr = []
    for(let i = 1; i <= num; i++){
        arr.push(i)
    }
    return arr
}
console.log(fillArrNum(10))
//8///////////////////////////////////////////////////////////////////////
function calcSumElemNum(num){
    let sum = 0
    for(let i = 0; i < String(num).length; i++){
      sum += +String(num)[i]
    }
    return sum
}
console.log(calcSumElemNum(111))
console.log(calcSumElemNum(123))
//9///////////////////////////////////////////////////////////////////
function isLeap(year) {
    let leap = false
    if(year % 4 === 0  && year % 100 !== 0){
        leap = true
    }
    if(year % 100 === 0 && year % 400 === 0){
        leap = true
        }
    return leap
}
console.log(isLeap(1900))
console.log(isLeap(2000))
console.log(isLeap(2024))
//10/////////////////////////////////////////////////////
function calcDayToSeconds(sec) {
    return sec / 60 / 60 / 24
}
console.log(calcDayToSeconds(86400))
//11///////////////////////////////////////
function getRandomElemToArr(arr){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomIndex = getRandomInt(0, arr.length-1)
    return arr[randomIndex]
}
console.log(getRandomElemToArr([1, 2, 3, 4, 5]))
console.log(getRandomElemToArr([1, 2, 3, 4, 5]))
console.log(getRandomElemToArr([1, 2, 3, 4, 5]))
//12///////////////////////////////
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
console.log(isPrime(17))
console.log(isPrime(18))
