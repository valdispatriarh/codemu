//https://code.mu/ru/javascript/book/prime/functions/nested/returning-function-parameters/
function func252(num1){
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3
        }
    }
}
console.log(func252(2)(3)(4))


function func2522(num1){
    return function(num2) {
        return function(num3) {
            return function(num4){
                let arr252 = []
                arr252.push(num1, num2, num3, num4)
                return function() {
                    return arr252
                }
            }
        }
    }
}
console.log(func2522(2)(3)(4)(5)())
