//https://code.mu/ru/javascript/book/prime/enumeration/map/
let arr279 = [1, 4, 49, 64, 9, 16 ,25, 36, 49]
let newArr279 = arr279.map(function(elem){return Math.sqrt(elem)})
console.log(newArr279)

let arr2792 = ['ma', 'pa']
let newArr2792 = arr2792.map(function(elem){return elem + '!' })
console.log(newArr2792)

let arr2793 = ['ma', 'pa']
let newArr2793 = arr2793.map(function(elem){return elem.split('').reverse().join('') })
console.log(newArr2793)

let arr2794 = ['123', '456', '789'];
let newArr2794 = arr2794.map(function(elem){return elem.split('')})
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){ 
        newArr2794[i][j] = Number(newArr2794[i][j])
    }
}
console.log(newArr2794)
console.log('[[1, 2, 3],[4, 5, 6],[7, 8, 9]]')

let arr2794Q = ['123', '456', '789'];
let newArr2794Q = arr2794Q.map(function(elem){return elem.split('')})
let qNewArr2794Q = newArr2794Q.map(function(elem){
                                    return elem.map(function(str){return Number(str)})})
console.log(qNewArr2794Q)

let arr2795 = [1, 4, 49, 64, 9, 16 ,25, 36, 49]
let newArr2795 = arr2795.map(function(elem, index){return elem * index})
console.log(newArr2795)

