//https://code.mu/ru/javascript/book/prime/functions/closures/counter/
function func261(){
    let num = 2
    return () => { 
        num--
        if (num < 0) {
            return 'отсчет окончен'
        }
        return num
    }
}
let counter261 = func261()
console.log(counter261())
console.log(counter261())
console.log(counter261())
console.log(counter261())

function test() {
    let counter = 0;
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func2612 = test();
let func123 = func2612();
let func234 = func2612();
func123();
func234();
func123();
func234();


