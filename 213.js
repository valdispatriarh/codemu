//https://code.mu/ru/javascript/book/prime/functions/basis/advices/
function calcAverage(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
	return res / arr.length;
}
//імя функціі было sum змянілі на calcAverage
console.log(calcAverage([3, 4, 5]))

function calcQuotientArrays(arr1, arr2) {
    function calcSumArr(arr){
        let res = 0;
        for (let elem of arr) {
		    res += elem;
	    }
        return res
    }
    let res1 = calcSumArr([...arr1])
    let res2 = calcSumArr([...arr2])
	return res1 / res2;
}
console.log(calcQuotientArrays([1, 2, 7], [1, 2, 2]))
//1) па першае змяняем назву з func на calcQuotientArrays
//2) затым аднолькавы код выносім у функцыю calcSumArr

function calcProductElemArr(arr) {
	let res = 1;
	for (let elem of arr) {
		res *= elem;
	}
	return res;
}
//зменім назву з getSum на calcProductElemArr
//пры умнаженіі на нуль атрымается нуль таму let res = 0 замяняем на let res = 1
console.log(calcProductElemArr([1, 2, 3]))
