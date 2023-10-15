//https://code.mu/ru/javascript/book/prime/functions/variables/names-coincidence/
let num111 = 1;
function func111() {
	num111 = 2;
}
func111();
console.log(num111);


let num222 = 1;
function func222q() {
	let num222 = 2;
}
func222q();
console.log(num222);