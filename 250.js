//https://code.mu/ru/javascript/book/prime/functions/nested/function-returning-function/
function func11() {
    return function() {return 1}
}

function func22() {
    return function() {return 2}
}

console.log(func11()() + func22()())
