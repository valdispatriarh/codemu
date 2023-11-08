//https://code.mu/ru/javascript/book/prime/enumeration/every/
let arr282 = [3, 5, 5, 7, 7, 9, 9]
let res282 = arr282.every(elem => elem > 0)
console.log(res282)

let arr2822 = [3, 5, 5, 7, 7, 9, 9]
let res2822 = arr2822.every((elem, n) => elem * n < 30)
console.log(res2822)

