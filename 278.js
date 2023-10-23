//https://code.mu/ru/javascript/book/prime/functions/recursion/structures-manipulations/
function calcSquareElem(arr) {
    for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] == "object") {
        arr[i] = calcSquareElem(arr[i])
    } else{arr[i] = arr[i]**2}
    }
    return arr
}
console.log('1, [2, 7, 8], [3, 4], [5, [6, 7]]]')
console.log((calcSquareElem([1, [2, 7, 8], [3, 4], [5, [6, 7]]])).join(","))
