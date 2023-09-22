//https://code.mu/ru/javascript/book/prime/inbuilt/math/powering/
console.log(1, Math.pow(2, 10))

console.log(2, Math.sqrt(245))

let arr3 = [4, 2, 5, 19, 13, 0, 10]
let sum184 = 0
for(let elem of arr3){
    sum184 += (elem**3)
}
console.log(3, Math.sqrt(sum184))


let arr3b = [4, 2, 5, 19, 13, 0, 10]
let newArr3b = []
for(let elem of arr3b){
    newArr3b.push(elem**3)
}
let total = newArr3b.reduce(function(a, b){
    return a + b
})
console.log(3, Math.sqrt(total))


