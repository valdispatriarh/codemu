//https://code.mu/ru/javascript/book/prime/functions/recursion/multi-structures/

function showValueIsPrimitive(obj) {
    for(let elem in obj){
        if(typeof obj[elem] == "object"){
            showValueIsPrimitive(obj[elem])
        } else {console.log(obj[elem])}
    }
}
showValueIsPrimitive({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})

let newArr = []
function getArrPrimitive(arr){
    for(let elem of arr){
        if(typeof elem == "object"){
            getArrPrimitive(elem)
        } else{newArr.push(elem)}
    }
}
getArrPrimitive([1, [2, 7, 8], [3, 4, [5, [6, 7]]]])
console.log(newArr)

