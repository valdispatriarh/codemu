//https://code.mu/ru/javascript/book/prime/functions/nested/callbacks-nuances/
function cube254(num) {
	return num ** 3;
}
function each254(arr, callback) {
    let result = []
    for(let elem of arr){
        result.push(callback(elem))
    }
    return result
}
console.log(each254([1, 2], cube254))