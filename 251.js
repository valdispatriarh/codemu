//https://code.mu/ru/javascript/book/prime/functions/nested/any-level-nesting/
function func251(){
    return function() {
        return function(){
            return function(){
                return function(){
                    return '!'
                }
            }
        }
    }
}
console.log(func251()()()()())