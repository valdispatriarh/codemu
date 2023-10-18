//https://code.mu/ru/javascript/book/prime/functions/nested/arrow-functions-applying/
function filter(arr, callback) {
	let res = [];

	for (let elem of arr) {
		if ( callback(elem) === true ) {
			res.push(elem);
		}
	}
	
	return res;
}

let result = filter([1, 2, 3, 4, 5], 
	function(elem) { 
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result)

let result2 = filter([1, 2, 3, 4, 5], elem => elem > 2);
console.log(result2)
