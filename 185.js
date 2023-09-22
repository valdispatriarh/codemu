//https://code.mu/ru/javascript/book/prime/inbuilt/math/rounding/
let num = Math.sqrt(379)
console.log(Math.round(num), +num.toFixed(1), +num.toFixed(2))

let num2 = Math.sqrt(587)
let obj185 = {
    'ceil': Math.ceil(num2),
    'floor': Math.floor(num2)
}
console.log(num2, obj185)

