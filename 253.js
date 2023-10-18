//https://code.mu/ru/javascript/book/prime/functions/nested/callbacks/
function each(arr, callback) {
    let result = []
    for(let elem of arr){
        result.push(callback(elem))
    }
    return result
}
console.log(each([1, 2, 3], function(num){return num*2}))
console.log(each(['pa', 'ma', 'bra'], function(str){return str.split('').reverse().join('')}))
console.log(each(['pa', 'ma', 'bra'], function(str){return str.slice(0, 1).toUpperCase() + str.slice(1)}))
