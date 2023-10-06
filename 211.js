//https://code.mu/ru/javascript/book/prime/functions/basis/flags/
function checkEven(arr) {
    for(let elem of arr)
        if(elem % 2 !== 0){
            return false
        }
    return true
}
console.log(checkEven([2, 8, 10]))

function checkOdd(num) {
    let str211 = String(num)
    for(let i = 0; i < str211.length; i++){
        if(str211[i] % 2 === 0){
            return false
        }
    }
    return true
}
console.log(checkOdd(11))
console.log(checkOdd(112))
console.log(checkOdd(0))
console.log(checkOdd(23875642785628))
console.log(checkOdd(11111111113))

function isEqual(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] === arr[i + 1]){
            return true
        }
    }
    return false
}
console.log(isEqual([2, 8, 10]))
console.log(isEqual([2, 8, 10, 10]))
console.log(isEqual([2, 2, 8, 10]))
console.log(isEqual([2, true, true]))
console.log(isEqual([2, 8, 'q', 'q']))

