//https://code.mu/ru/javascript/book/prime/destructuring/arrays/intro/

//аб'яднаў усе 15 тэм заданні маленькія і вельмі падобныя, лічу што няма сэнсу глядзець

let arr296 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr296
console.log(position)

let arr2962 = ['John', 'Smit', 'development', 'programmer', 2000];

let [,, department2, position2] = arr2962
console.log(position2)

let arr2963 = ['John', 'Smit', 'development', 'programmer', 2000];

let [name3, surname3, ...info] = arr2963
console.log(info)

let arr2964 = ['John', 'Smit', 'development'];

let [name4, surname4, department4, position4 = 'trainee'] = arr2964
console.log(position4)


function funcDay() {
	return (new Date).getDate();
}
function funcMonth() {
	return (new Date).getMonth() + 1
}
let arrNew = [1996]
let [year1, month1 = funcMonth(), day1 = funcDay()] = arrNew;
console.log(year1 + '-' + month1 + '-' + day1)

let options = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color: c, width: w, height: h} = options
console.log(c, h, w)

let options2 = {
	width2:  800,
	height2: 900,
};
let {width2: w2, height2: h2, color2: c2 = 'black'} = options2;
console.log(w2, c2, h2)

function func296d([nameQ, surnameQ, departmentQ, positionQ, salaryQ]) {
	console.log(nameQ, surnameQ, departmentQ, positionQ, salaryQ)
}
func296d( ['John', 'Smit', 'development', 'programmer', 2000] );

function funcASD([name7, surname7, ...info7]) {
	console.log(name7, surname7, info7)
}
funcASD( ['John', 'Smit', 'development', 'programmer', 2000] );

function funcLk([nameLk, surnameLk, departmentLk, positionLk = 'джуниор' ]) {
	console.log(nameLk, surnameLk, departmentLk, positionLk)
}
funcLk( ['John', 'Smit', 'development'] );

function f(departmentF, [nameF, surnameF], [yearF, monthF, dayF]) {
	console.log(departmentF, nameF, surnameF, yearF, monthF, dayF)
}
f( 'development', ['John', 'Smit'], [2018, 12, 31] );

function fnc({colorA, widthA, heightA}) {
	console.log(colorA, widthA, heightA)
}
fnc( {colorA: 'red', widthA: 400, heightA: 500} );

function fc({colorG = 'black', widthG, heightG}) {
    console.log(colorG, widthG, heightG)
}
fc({colorG:undefined, widthG: 400, heightG: 500});

