//https://code.mu/ru/javascript/book/prime/functions/types/anonymous-functions-object-applying/
let obj239 = {
    calcSum: function(arr){
        let sum = 0
        for(let i = 0; i < arr.length; i++){
            sum += arr[i]
        }
        return sum
    },
    calcSumSquare: function(arr) {
        let sum = 0
        for(let i = 0; i < arr.length; i++){
            sum += arr[i]**2
        }
        return sum
    },
    calcSumCube: function(arr) {
        let sum = 0
        for(let i = 0; i < arr.length; i++){
            sum += arr[i]**3
        }
        return sum 
    }
}
console.log(obj239.calcSum([1, 2, 3]))
console.log(obj239.calcSumSquare([1, 2, 3]))
console.log(obj239.calcSumCube([1, 2, 3]))






function sumElem2392(arr, power) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]**power
    }
    return sum
}
let obj2392 = {
    sum1: function(arr){
            return sumElem2392(arr, 1)
          },
    sum1Square: function(arr){
                    return sumElem2392(arr, 2)
                },
    sum1Cube: function(arr){
                return sumElem2392(arr, 3)
              }
}
console.log(obj2392.sum1([1, 2, 3]))
console.log(obj2392.sum1Square([1, 2, 3]))
console.log(obj2392.sum1Cube([1, 2, 3]))