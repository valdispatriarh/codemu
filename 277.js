https://code.mu/ru/javascript/book/prime/functions/recursion/structures-sum/
function calcSumValue277(obj) {
    let sum = 0
    for(let elem in obj) {
        if(typeof obj[elem] == "object"){
            sum += calcSumValue277(obj[elem])
        } else {sum += obj[elem]}
    }
    return sum
}
console.log(calcSumValue277({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}))

let arr277 = []
function getStr(arr) {
    for (let elem of arr){
    if(typeof elem == "object"){
        getStr(elem)
    } else {arr277.push(elem)}
    }
}
getStr(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]])
console.log(arr277.join(''))


function getStr2(arr) {
    let arr277 = []
    for (let elem of arr){
    if(typeof elem == "object"){
        arr277 = arr277.concat(getStr2(elem));//надо изучить concat
    } else {arr277.push(elem)}
    }
    return arr277
}
console.log((getStr2(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]])).join(''))

function getStr3(arr) {
    let arr277 = []
    for (let elem of arr){
    if(typeof elem == "object"){
        arr277.push(getStr3(elem))
    } else {arr277.push(elem)}
    }
    return arr277
}
console.log((getStr3(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]])).join('').replace(/[\s,]/g, ""))