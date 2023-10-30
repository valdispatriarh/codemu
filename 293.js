https://code.mu/ru/javascript/book/prime/rest/digits-sum/
function findAverage293(...rest) {
    if(rest.length == 0) {return 0}
    let res293 = rest.reduce((acc, elem) => acc + elem)
    return res293 / rest.length
}
console.log(findAverage293(4, 4, 4, 4, 8, 8, 8, 8))

function testConcat(...rest) {
    return [].concat(...rest)
}
let res293 = testConcat([4, 5], [5, 5], [6, 6])
console.log(res293)