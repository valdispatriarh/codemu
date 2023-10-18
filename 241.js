//https://code.mu/ru/javascript/book/prime/functions/nested/named-functions-parameters/
let func12q = function(){return 1}
let func22q = function(){return 2}
let func32q = function(){return 3}
calcSumFunc2412(func12q, func22q, func32q)
function calcSumFunc2412(func1, func2, func3) {
    console.log(func1() + func2() + func3())
}



function calcSumFunc241(func1, func2, func3) {
    console.log(func1() + func2() + func3())
}
calcSumFunc241(
function func1(){return 1},
function func2(){return 2},
function func3(){return 3}
)


