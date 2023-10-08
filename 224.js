//https://code.mu/ru/javascript/book/prime/functions/types/function-as-variable/
function fun(){
    return 'hello'
}
console.log(fun())
console.log(fun)
fun = 123
console.log(fun)
//console.log(fun())
