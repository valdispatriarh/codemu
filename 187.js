//https://code.mu/ru/javascript/book/prime/inbuilt/math/random/
function getRandomValues(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(1, getRandomValues(10, 100))

let arr187 = []
let numMax = 9007199254740991
for(let i = 0; i < 10; i++){
    function getRandomValues2(max, min){
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    arr187.push(getRandomValues2(numMax, -numMax))
}
console.log(arr187)



