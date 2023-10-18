//https://code.mu/ru/javascript/book/prime/functions/types/anonymous-functions-array/
let arr237 = [
    function() { return 1 },
    function() { return 2 },
    function() { return 3 },
]
console.log(arr237[2]())
console.log(arr237[2]() + arr237[1]() + arr237[0]())
for (let func of arr237){
    console.log(func())
}


