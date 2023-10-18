//https://code.mu/ru/javascript/book/prime/functions/nested/passing-functions-applying/
function test244(arr, func){
    for(let i = 0; i < arr.length; i++){
        arr[i] = func(arr[i])
    }
    return arr
}
console.log(test244([1, 2, 3], function(num){return num*num}))
console.log(test244([1, 2, 3], function(num){return num*num*num}))
