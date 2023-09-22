//https://code.mu/ru/javascript/book/prime/inbuilt/math/random/
function getRandomValues(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(1, getRandomValues(1, 100))

let arr187 = []
let  numMax  = Number.MAX_SAFE_INTEGER
function getRandomValues2(max, min){
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
for(let i = 0; i < 10; i++){
    arr187.push(getRandomValues2(numMax, -numMax))
}
console.log(arr187)



