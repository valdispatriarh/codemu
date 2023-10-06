//https://code.mu/ru/javascript/book/prime/functions/basis/parameters/
function showNum201(num) {
    console.log(num**3)
}
showNum201(2)

function checkPositiveOrNegative(num201){
    if(num201 >= 1){
        console.log('+++')
    } else if(num201 < 0){
        console.log('---')
    } else {
        console.log('zero')
    }
}
checkPositiveOrNegative(1)
checkPositiveOrNegative(0)
checkPositiveOrNegative(-1)
