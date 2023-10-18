//https://code.mu/ru/javascript/book/prime/functions/nested/passing-functions-parameters/
function test242(func) {
	console.log(func(3));
}
test242(function(num){
        return num**3
    }
)

function test2422(ffunc){
    console.log(ffunc(3))
}
test2422(function func(num){
    return num**3
})

function test2423(ffunc){
    console.log(ffunc(3))
}
test242(function func(num){
    return num**3
})


