//https://code.mu/ru/javascript/book/prime/enumeration/some/
let arr283 = [-7, -6, 8]
let res283 = arr283.some(elem => elem > 0)
console.log(res283)

let arr2832 = [77, 65, 30]
let res2832 = arr2832.some((elem, n) => elem * n < 30)
console.log(res2832)

