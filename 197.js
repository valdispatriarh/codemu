//https://code.mu/ru/javascript/book/prime/inbuilt/array/searching/
let str197 = [1, 2, 3, 4, 5];
if(str197.includes(3)){
    console.log('yes')
} else {
    console.log('no')
}

let str1972 = [1, 2, 3, 4, 5];
let res = str1972.find(function(elem1972){
   return elem1972 === 3
})
if(res){
    console.log('yes')
} else {
    console.log('no')
}

let str1973 = [1, 2, 3, 4, 5];
if(str197.indexOf(3) !== -1){
    console.log('yes')
} else {
    console.log('no')
}


let str1974 = [1, 2, 3, 4, 5];
if(str1974.lastIndexOf(3) !== -1){
    console.log('yes')
} else {
    console.log('no')
}
