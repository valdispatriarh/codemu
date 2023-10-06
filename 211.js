//https://code.mu/ru/javascript/book/prime/functions/basis/flags/
function checkEven(arr) {
    for(let elem of arr)
        if(elem % 2 === 0){
            return true
        }
    return false
}
checkEven([2, 5, 8, 10])