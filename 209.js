//https://code.mu/ru/javascript/book/prime/functions/basis/return-loop-applying/
function func209(num){
    let count209 = 0
    let res = num
    while (res >= 10){
    res = res/2
    count209++
    }
    return count209
}
console.log(func209(20))
console.log(func209(-2))
console.log(func209(200))
console.log(func209(1000000))
console.log(func209(9))

