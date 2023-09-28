//https://code.mu/ru/javascript/book/prime/inbuilt/mistakes/
let num199 = 12345;
let arr199 = String(num199).split('');
let sum199 = 0;
for (let digit199 of arr199) {
	sum199 += +digit199;
}
console.log(sum199);

let num1992 = 12345;
let arr1992 = String(num1992).split('');
let prod1992 = 1;
for (let digit1992 of arr1992) {
	prod1992 *= +digit1992;
}
console.log(prod1992);
