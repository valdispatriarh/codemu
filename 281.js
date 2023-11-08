//https://code.mu/ru/javascript/book/prime/enumeration/filter/
let arr281 = [2, -3, -6, 2, -7, -7]
let newArr281 = arr281.filter(elem => elem > 0)
console.log(newArr281)

let arr2812 = [2, -3, -6, 2, -7, -7]
let newArr2812 = arr2812.filter(elem => elem < 0)
console.log(newArr2812)

let arr2813 = [2, -3, -6, 2, -7, -7, -33, -54, -34]
let newArr2813 = arr2813.filter(elem => elem > 0 && elem < 10)
console.log(newArr2813)

let arr2814 = ['werer', 'ifi', 'djfeij', 'ekwkokoworowrowkrwokrworkw']
let newArr2814 = arr2814.filter(elem => elem.length > 5)
console.log(newArr2814)

let arr2815 = [2, -3, -6, 2, -7, -7, -33, -54, 33]
let newArr2815 = arr2815.filter((elem, index) => elem * index < 30)
console.log(newArr2815)

let arr2816 = [1, 2, [3, 4], 5, [6, 7]]
let newArr2816 = arr2816.filter(elem => typeof elem != "object")
console.log(6, newArr2816)

