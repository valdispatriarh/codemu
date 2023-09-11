// let test = 'abcde'
// let testRevers = `${test[4]+test[3]+test[2]+test[1]+test[0]}`
// console.log(testRevers)

// testRevers= []
// for(let i = 4; i >= 0; i--){
//      testRevers.push(test[i])
//     }
// console.log(testRevers.join(''))

// let str = "abcde"
// let num  = 4
// alert(str[num])

////////////////////54

// let str = 'irfnrk123'
// console.log(+str[str.length-1])
// console.log(str[str.length-2])
// console.log(+str[str.length-3])
// ///////55
// let startr = '123456789'
// let sum = 0
// for(let i = 0; i <=startr.length-1; i++){
//     sum = sum + +startr[i]
// }
// console.log(sum)

//////56

// let num  = 123456789
// let strNum = String(num)
// let sum = 0;
// for(let i = 0; i <= strNum.length-1; i++){
//  sum = sum + +strNum[i]
// }
// console.log(sum)

// let num  = 12345
// let strNum = String(num)
// let y = 1
// for(let i = 0; i <= strNum.length-1; i++){
//  y = y * strNum[i]
// }
// console.log(y)

// let num = 123456789
// let strNum = String(num)
// let strNumRevers = []
// for(let i = strNum.length-1; i >= 0; i--){
//     strNumRevers.push(strNum[i])
// }
// console.log(+strNumRevers.join(''))

//////58
// let r = 45
// r += 3
// r -= 8
// console.log(r)

////60.5
// let num1 = 3;
// let num2 = ++num1;///let num 2 = (num1 = num1 + 1)
// alert(num1);///4
// alert(num2);///4

// let num1 = 3;
// let num2 = (num1 = num1 + 1)
// alert(num1);///4
// alert(num2);///4

// let num1 = 3;
// let num2 = num1++;
// alert(num2);
// alert(num1);

// let num1 = 3;
// let num2 = num1
// num1 = num1 + 1 
// alert(num2);
// alert(num1);

////61
// let a = Math.PI
// console.log(+a.toFixed(a))
 
///62
// alert("вам"+' '+prompt("сколько вам лет?")+' '+"лет")
///63
// let q1 = prompt('number 1')
// let q2 = prompt('number 2')
// alert(+q1 + +q2)

// let q1 = prompt('a')
// let q2 = prompt('b')
// s= q1 * q2
// alert(`s=${s}`)


// let q1 = prompt('a')
// let q2 = prompt('b')
// p= q1*2 + q2*2////преобразованіе в чісло проісходіт за счет *

// alert(`p=${p}`)

//////64
// let w = 'hi'
// document.write('<i>'+w+'</i>')
// document.write('1<br>')
// document.write('2<br>')
// document.write('3<br>')
// document.write('4<br>')
// document.write('5<br>')
///65
// let num1 = 1;
// let num2 = 2;
// let sum = num1+num2
// console.log('сумма: ' + sum);

// let a = 1;
// let b = 2;
// let c
// console.log(c);
// console.log(a + b + c);

// let num = '123';
// let sum = +num[0] + +num[1] + +num[2];
// console.log(sum);

// let num = 123;
// let strNum = String(num)
// console.log(+(strNum[0]));

// let a = 0;
// console.log(++a);

// let num = String(123);
// console.log(num.length);

// let a = 24 * 60 * 60;
// console.log(a);

// let num = 123;
// let str = String(num);
// console.log(str.length);

// let num = 123;
// let str = String(num);
// console.log(str[str.length-1]);

// let num = 123;
// let str = String(num);
// console.log(str.length);

// let num = 123;
// let str = String(num);
// console.log(str[str.length-1]);

// let a = '123';
// let b = '456';
// let s = Number(a) + +b;
// console.log(s);

// let aaa = 1;
// let bbb = 2;
// let ccc = 3;
// console.log(aaa + bbb + ccc);

///66
// alert(60*60*24*30)
// alert(60*60*24*365)
// alert(60*24)
// alert(60*24*365)

// alert(1*1024*1024*1024*10)
// alert(1*1024*1024*1024*1024)
// alert(1*1024*1024*1024)

///67
// let r = 3.14
// let s = Math.PI*r**2
// alert(s)
// alert(3.14**3)

// let a = 3.14
// let s = a**2
// alert(s)
// alert(3.14**2)

// let a = 5
// let b = 3
// let s = a*b
// alert(s)

// let a = 5
// let b = 3
// let p = (a+b)*2
// alert(p)

// let c = 0
// let f = c * 9/5 + 32;
// alert(f)

// let f = 32
// let c = (f-32) * 5/9;
// alert(c)

//////69
// let s = [1, 2, 3]
// console.log(s[0]+s[1]+s[2])

// let w = ['a', 'b', 'c', 'd']
// console.log(`'${w[0]+'+'+w[1]+'+'+w[2]+'+'+w[3]}'`)

//70
// let fg = [3232, 3232, 2323, 'erer']
// console.log(fg.length)
// console.log(fg[fg.length-1])

//71
// let fg = [3232, 3232, 2323, 'erer']
// fg[0] = 1
// fg[1] = 2
// fg[2] = 3
// fg[3] = 4
// console.log(fg)

//72
let arr = [1, 2, 3, 4]
for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i]+3
}
console.log(arr)

//73
// let s =[1, 2, 3]
// s[0]++
// s[1]++
// s[2]++
// console.log(s)

///74
// let arr = []
// arr[0]= 1
// arr[1]= 2
// arr[2]= 3
// arr[arr.length] = 4
// arr[arr.length] = 5
// console.log(arr)

///75
// let arr = [];

// arr[3] = 'a';
// arr[8] = 'b';
// alert(arr.length)

//76
// let arr = []
// arr[0]= 1
// arr[1]= 2
// arr[2]= 3
// arr[4] = 5
// arr.push(4)
// arr.push(5)
// console.log(arr)

//77
// let arr = []
// arr[0]= 1
// arr[1]= 2
// arr[2]= 3
// arr[4] = 5
// arr.push(4)
// arr.push(5)
// console.log(arr)
// let num = 3
// console.log(arr[num])

// let arr = []
// arr[0]= 1
// arr[1]= 2
// arr[2]= 3
// arr[4] = 1
// arr.push(4)
// arr.push(5)
// console.log(arr)
// let num = 5
// let num2 = 4
// console.log(arr[num])
// console.log(arr[num]+arr[num2])

//78
// let n = [1, 2, 3, 4, 5]
// delete n[0]
// delete n[2]
// console.log(n)
// console.log(n.length)

//79
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length-1]);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[0]);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);

//80

// let w = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday '
// }
// console.log(w[1], w[2], w[3], w[4], w[5], w[6], w[7])
// console.log(w)
// alert(w)

//82
// let user = {
//     name: 'Uladislau',
//     surname: 'Isachkou',
//     patronymic: 'Mikolaevich'
// }
// console.log(`${user['surname']+' '+user['name']+ ' '+user['patronymic']}`)

//83
// let date = {
//     day: 29,
//     mouth: 8,
//     year: 2023
// }    
// console.log(`${date.day+'-'+date.mouth+'-'+date.year}`)
 
//84
// let obj = {
// 	'1a': 1,
// 	'b2': 2,
// 	'c-c': 3,
// 	'd 4': 4,
// 	'e5': 5
// };

// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);

//85
// let obj = {a: 1, b: 2, c: 3};
// obj.a ='!'
// obj['b'] ='!'
// console.log(obj)

// let obj = {a: 1, b: 2, c: 3};
// obj.a *= obj.a
// obj.b *= obj.b
// obj.c *= obj.c
// console.log(obj)

//86
// let q ={}
// q.a = 1
// q.b = 2
// q.c = 3
// console.log(q)

//87
// let pop = {
//     q: 3,
//     w: 5,
//     e: 9
// }
// console.log(pop.q, pop.w, pop.e)

// let pop = {
//     2: 9,
//     1: 3,
//     3: 5,  
// }
// console.log(pop[2], pop[1], pop[3])

//88
// let q ={}
// q.a = 1
// q.b = 2
// q.c = 3
// console.log(q)

// let arr = Object.keys(q)
// console.log(arr)

// let obj = {x: 1, y: 2, z: 3};
// let arr = Object.keys(obj);
// console.log(arr)

//89
// let d = {
//     212: 'WEW',
//     KDWK: 'DSKJD'
// }
// console.log(Object.keys(d).length)

//90
// let keykey = 'a'
// let keykey1 = '1'
// let q = {
//     kforkfork: 'diejdie',
//     ikdiikf: 'e3e3e3',
//     a: 'sdwedew',
//     1: 'adsds'
// }
// console.log(q.keykey)
// console.log(q[keykey])
// console.log(q.a)
// console.log(q['a'])

// console.log(q.keykey1)
// console.log(q[keykey1])
// //console.log(q.1)
// console.log(q['1'])

//91
// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);

//92
// let obj = {x: 1, y: 2, z: 3};

// let prop = 'x';
// console.log(obj[prop]);

// let obj = {x: 1, y: 2, z: 3};

// let prop = 'x';
// console.log(obj[prop]);

//93
// let keykey = 'q2'
// let f = {
//     kf: 'dkfk',
//     jf:'ddd',
//     [keykey +'q2']: 'dd'
// }
// console.log(f)

// let key = 'x';
// let obj = {
// 	[key]: 1,
// 	y: 2,
// 	z: 3
// };
// console.log(obj)

// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';

// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3
// };
// console.log(obj)

//94
// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';

// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3
// };
// console.log('y' in obj)
// console.log('x' in obj)
// console.log('a' in obj)

// let obj = {x: 1, y: 2, z: 3};
// delete obj.y ////////отлічается от поведенія в массіве
// console.log(obj);
// console.log(Object.keys(obj));

//96
// console.log(typeof{})
// console.log( typeof {x: 1, y: 
// 	2, z: 3} ); 
// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj );

// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj['x'] );

//97
// console.log( typeof [] );

//98
// let d = {
//     212: 'WEW',
//     KDWK: 'DSKJD'
// }
// let r = []
// console.log(Array.isArray(d))
// console.log(Array.isArray(r))

//99
// let test = {x: 1, y: 2, z: 3};
// console.log(typeof(test.x));

// let test1 = [1, 2, 3];
// let test2 = 1;

// console.log(test1[test2]);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[1] = 'b';

// console.log(arr1);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[0] = 'b';

// console.log(arr2);

//101
// const obj = {a: 1, b: 2, c: 3};
// obj.a = '!';
// console.log(obj)

// const arr = ['a', 'b', 'c'];
// arr[1] = '!';
// console.log(arr);
 
// const arr = ['a', 'b', 'c'];
// arr = [1, 2, 3];
// console.log(arr);

// const arr = ['a', 'b', 'c'];
// arr = ['a', 'b', 'c'];
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// const res = arr[1] + arr[2];

// console.log(res);

//103
// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);
// console.log(obj.x);

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);

// let obj = {x: 1, y: 2, z: 3};
// let sum = obj['x'] + obj['y'] + obj['z'];
// console.log(sum);

// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);

//105
// const test = 10
// if(test <= 10){
//     alert('ok')
// } else{
//     alert('no')
// }

//106

// const test = 10
// if(test != 10){
//     alert('ok')
// } else{
//     alert('no')
// }

//108
// let q = 1
// let w = 1
// if(q > w){
//     alert('q  more w')
// } else{
//     alert('q no more w')
// }
// if(q != w){
//     alert('q no w')
// } else{
//     alert('q ravno w')
// }

//109
// const q ='qwe'
// const w ='qwe'
// if(q == w){
//     alert('q ravno w')
// } else{
//     alert('q no w')
// }

//110
// const q ='12'
// const w =12
// if(q == w){
//     alert('q ravno w')
// } else{
//     alert('q no w')
// }


//113
// const q =3
// if(q > 0 && q < 5){
//     alert('+++')
// } else{
//     alert('---')
// }

// const q =10
// if(q >= 10 && q <= 20){
//     alert('+++')
// } else{
//     alert('---')
// }

// const q1 =0
// const q2 =5
// if(q1 < 0 && q2 > 3){
//     alert('+++')
// } else{
//     alert('---')
// }

//114
// let num1 = -10;
// let num2 = -10;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = 0;
// let num2 = 0;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = 0;
// let num2 = 5;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = 5;
// let num2 = 5;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = -5;
// let num2 = 15;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// let num = 2;

// if (num == 0 || num == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 2;

// if (num == 0 || num == 1 || num 
// 	== 2) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//116
// let num = 3;
		
// if ((num > 5 && num < 10) || num == 20) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 3;
		
// if (num > 5 || (num > 0 && num < 3)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 3;
		
// if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//117
//118
// const test = true
// if(test == false){
//     alert('+')
// }else{
//     alert('-')
// }

// let test = 1;
		
// if (test != true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//120
// let test = true;

// if (test === true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = true;

// if (Boolean(test)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//121
// let test = true;

// if (test == false) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = true;

// if (!test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = true;

// if (test != true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = true;

// if (!test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = true;

// if (test != false) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = true;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//123
// let test1 = true;
// let test2 = true;

// if (test1 && test2) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test1 = true;
// let test2 = true;

// if (test1 && !test2 ) { 
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

///127
// const day = ''
// if(day >= 1 && day <= 10){
//     alert(111)
// } else if(day >= 11 && day <= 20 ){
//     alert(222)
// } else if(day >= 21 && day <= 31 ){
//     alert(333)
// } else {
//     alert(' ты ввел какое-либо не допустимое значение')
// }

// const day = ''
// if(day >= 1 && day <= 10){
//     alert(111)
// }
// if(day >= 11 && day <= 20 ){
//     alert(222)
// }
// if(day >= 21 && day <= 31 ){
//     alert(333)
// } else {
//     alert(' ты ввел какое-либо не допустимое значение')
// }

//128
// let num = 98
// if (num >=10 && num <= 99){
//     let x = String(num)
//     alert(x)
//     let sum = +x[0]+ +x[1]
//     alert(sum)
//     if(sum <= 9){
//         alert('111')
//     } else {
//         alert('222')
//     }
// }

//129
// let lang = 'ru';

// if (lang == 'ru') {
// 	console.log('рус');
// } else if (lang == 'en') {
// 	console.log('анг');
// } else if (lang == 'de') {
// 	console.log('нем');
// } else {
// 	console.log('язык не поддерживается');
// }

// let lang = 't';
// switch(lang){
//     case 'ru': console.log('рус'); 
//     break;

//     case 'en': console.log('анг');
//     break;

//     case 'de': console.log('нем');
//     break;
    
//     default: console.log('язык не поддерживается');
// }

//131
// let num = 1;
// let res;
// if (num >= 0) {
// 	res = '1';
// } else {
// 	res = '2';
// }
// console.log(res);

// let num = -8;
// let res = num >=0 ? '1' : '2'
// console.log(res);

//132
// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log(a == b)
function l(...args) {
    console.log(...args);
}
// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// l(a > b)
// let a = 2 ** 4;
// let b = 4 ** 2;
// l(a != b)

//133
// let ok = confirm('Вам исполнилось 18 лет?');
// if(ok){
//     alert("Пора съезжать от родителей")
// } else {
//     alert("Доступ запрещен")
// }

//134
// let age = 97;
// let adult = null 
// if (age >= 18) {
// adult = true;
// } else {
// adult = false;
// }

// l(adult);

//135
// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }


// console.log(adult);

//135
// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }

// console.log(adult);
// let age = 22;
// let res;

// if (age >= 18) {
// 	if (age <= 23) {
// 		 res = 'от 18 до 23';
// 	} else {
// 		 res = 'больше 23';
// 	}
// } else {
// 	 res = 'меньше 18';
// }

// console.log(res);

// let age = 19;
// let res;

// if (age >= 18) {
// 	if (age <= 23) {
// 		res = 'от 18 до 23';
// 	} else {
// 		res = 'больше 23';
// 	}
// } else {
// 	res = 'меньше 18';
// }

// console.log(res);
//136
// let min = 38;

// if (min >= 0 && min <= 19) {
// 	console.log('1 треть');
// }

// if (min >= 20 && min <= 39) {
// 	console.log('2 треть');
// }

// if (min >= 40 && min <= 59) {
// 	console.log('3 треть');
// }
//137
// let arr = [5, 9, 6]
// if(arr.length == 3 ){
//     l(arr[0]+arr[1]+arr[2])
// }
//138

// let a = 'ajgirjti'
// if(a[0] == 'a'){
//     l('+++')
// }

// let str = 'jgrehiuhiux'
// if(str[str.length-1] == 'x'){
//     l('+++++++++++')
// }

// let str1 = 'asbljfojrwr'
// let first = str1[0]
// if(first == 'a' || first == 'b'){
//     l('++')
// }

//139
// let num = 6464645084070
// let strToNum = String(num)
// if(strToNum[strToNum.length-1] == 0){
//     l('+++++!')
// }

// let num = 8574368756487538652
// let strToNum = String(num)
// let last = strToNum[strToNum.length-1]
// if(last == 0 ||
//     last == 2 ||
//     last == 4 ||
//     last == 6 ||
//     last == 8 ){
//         l('/2')
//     }
//140
// let num = 1050501845
// if(num % 2 == 0){
//     l('/2')
// }else{
//     l('!/2')
// }
//  let kdk = 3
//  if(kdk % 3 == 0){
//     l('/3')
//  } else{
//     l('!/3')
//  }
//141
// let num1 = 1;
// let num2 = 2;

// if (num1 + num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = '1';
// let num2 = '2';

// if (num1 + num2 == 12) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = '1';
// let num2 = '2';

// if (Number(num1 + num2) === 12) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 123;
// let str = String(num)
// if (str[0] === '1') {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 2123;
// let str = String(num)

// if (str[0] == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 2123;

// if ((String(num))[0] == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 2123;
// let first = String(num)[0];

// if (first == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 14;

// if ((String(num)).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 122;
// let str = String(num);

// if (str.length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 122;

// if ((String(num)).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 12;

// if (String(num).length == String(2)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 142;

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = '123033'; 
// let sum1 = +num[0] + +num[1] + 
// 	+num[2]; 
// let sum2 = +num[3] + +num[4] + 
// 	+num[5]; 

// if (sum1 == sum2) {
// 	console.log('суммы равны');
// } else {
// 	console.log('суммы не равны');
// }

//142
// let month = 9
// if(month === 12 || month === 1 || month === 2){
//     l('Winter')
// }
// if(month === 3 || month === 4 || month === 5){
//     l('Spring')
// }
// if(month === 6 || month === 7 || month === 8){
//     l('Summer')
// }
// if(month === 9 || month === 10 || month === 11){
//     l('Fall')
// }

// let month = 8
// let season = Math.floor((month % 12) / 3)
// let seasons = ['winter', 'spring', 'summer', 'fall']
// l(seasons[season])    

// let a = 'gjgqbsfhasdb'
// if(a[0] == 'j'){
//     l('ok')
// } else{
//     l('no')
// }
// let n = 7198234
// if(String(n)[0] == 9 ||
//     String(n)[0] == 8 ||
//     String(n)[0] == 7 ){
// l('ok')
// } else{
//     l('no')
// }
// let num = 234
// let sum
// let str  = String(num)
// l(+str[0] + +str[1] + +str[2])
// let num = 234540
// let str = String(num)
// let sum1 = +str[0] + +str[1] + +str[2]
// let sum2 = +str[3] + +str[4] + +str[5]
// if(sum1 === sum2 ){
//     l('ok')
// } else {
//     l('no')
// }
//144
// let arr = [1, 2, 3, 4, 5];
// let newArr =[]
// let elem
// for ( elem of arr) {
//     ++elem
//     newArr.push(elem)

// }
// console.log(newArr)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for(let elem of arr){
//     l(elem)
// }
//145
// let obj = {x: 1, y: 2, z: 3};
// for(let key in obj){
//     l(key)
//     l(obj[key])
// }

// let i = 1;

// while (i <= 5) {
// 	console.log(i);
// 	++i;
// }
//146
// let num = 500;

// while (num > 10) {
//     console.log(num);
// 	num = num / 2;
// }
// let num = 1
// while (num <= 100){
//     l(num)
//     num++
// }
// let num = 11
// while (num <= 33){
//     l(num)
//     num++
// }
// let num = 32
// let count = 0
// while(num <= 1000){
//     num = num * 3
//     ++count
// } 
// l(num, count)
//147
// for (let i  = 1; i <= 100; i++){
//     l(i)
// }
// for (let i  = 11; i <= 33; i++){
//     l(i)
// }
// for(let i= 0; i<=100; i++){
//     if(i % 2 === 0){
//         l(i)
//     }
// }

// for(let i = 1; i <=99; i++){
//     if(i % 2 !== 0)
//     l(i)
// }
// for (let i = 100; i >=0; i--){
//     l(i)
// }
//148
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for(let i  = 0; i < arr.length; i++){
//     l(arr[i])
// }
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for(let i =1; i <= arr.length-2;i++){
//     l(arr[i])
// }
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for(let i = arr.length-1; i>= 0; i--){
//     l(arr[i])
// }
// let arr = ['a', 'b', 'c', 'd', 'e'];
		
// for (let i = 0; i < arr.length; 
// 	i++) { 
// 	console.log(arr[i]);
// }
//149
// let arr = [2, 5, 9, 15, 1, 4];
// for ( elem of arr){
//     if(elem > 3 && elem < 10){
//         l(elem)
//     }
    
// }
// let obj = {a: 1, b: 2, c: 3, d: 
// 	4, e: 5}; 

//     for(elem in obj){
//         if(obj[elem] % 2 !==0){
//             l(obj[elem])
//         }
//     }
// let sumD2 = 0;
// for(let i = 2; i <= 100; i++){
//     if(i % 2 === 0){
//         sumD2 += i
//     }
// }
// l(sumD2)

// let sum = 0
// for ( let i = 1; i <= 99; i++){
//     if(i % 2 !== 0){
//         sum = sum + i
//     }
// }
// l(sum)

// let p = 1
// for(let i = 1; i <=20; i++){
//     p = p*i
// }
// l(p)

//151
// let arr = [2, 5, 9, 3, 1, 4];
// let sum = 0
// for(let elem of arr){
//   sum = sum + elem
// }
// l(sum)


// let arr = [2, 5, 9, 3, 1, 4];
// let sumD2 = null
// for(let elem of arr){
//     if(elem % 2 === 0 ){
//         sumD2 = sumD2 + elem
//     }
// }
// l(sumD2)

// let arr = [2, 5, 9, 3, 1, 4];
// let sum = null 
// for (let elem of arr){
//     sum = sum + elem**2
// }
// l(sum)

// let arr = [2, 5, 9, 3, 1, 4];
// let p = 1
// for (let elem of arr){
//   p= p*elem
// }
// l(p)

// let str = ''
// for(let i = 9; i >= 1; i--){
//     str = str + '-' + i
// }
// l(str)
//153
// for( let i = 10; i <= 1000; i++){
//     l(String(i)[0])
// }
// for(let i = 10; i<= 1000; i++){
//     l(+String(i)[0] + +String(i)[1])
// }
// for(let i = 10; i<= 1000; i++){
//     if(String(i)[0] == 1){
//         l(i)}
// }
// for(let i = 10; i<= 1000; i++){
//     if(+String(i)[0] + +String(i)[1] == 5){
//         l(i)
//     }
// }
//154
// let arr = [4, 4, 9, 0, 3, 3]
// for (let elem of arr){
//     l(elem)
//     if (elem === 0){
//         break
//     }
// }
//154
// let arr = [4, 4, 9, 0, 3, -6, 3]
// let sum = 0

// for (let elem of arr){
//     if(elem < 0){
//         break
//     }
//     sum = sum + elem
// }
// l(sum)
// let arr = [4, 4, 9, 0, 3, -6, 3]
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] === 3){
//         l(i+1)
//         break
//     }
// }
// let i = 1 
// let sum = 0
// let count = 0
// while(sum <= 100){
//     sum = sum+i
//     count++
//     i++
// }
// l(count)
// let sum = 0
// let count = 0
// for(let i = 1; i <= 1000000; i++){
//     if(sum > 100){
//         break
//     }
//     sum = sum + i
//     count++
// }
// l(count)

//155
// let arr = [1, 2, 3, 4, 5, 6, 7, 
// 	8, 9]; 

// for (let elem of arr) {
// 	let result;
	
// 	if (elem % 2 === 0) {
// 		result = elem * elem;
// 	} 
//     else if (elem % 3 === 0) {
// 		result = elem * elem * elem;
// 	} else{
//         continue
//     }

	
// 	console.log(result); 
		
// }
//156
// for (let i = 1; i<=9; i++){
//     for(let j =1; j<=3; j++){
//         document.write(i)
//     }
// }
// let arr =[]
// for (let i = 11; i<=33; i += 7 ){
//     for(let j = 1; j<=3; j++){
//         arr.push(i++)
//     }
// }
// l(arr.join(' '))
//159
// let arr = []
// for (let i =1; i<=10; i++){
//     arr.push(i)
// }
// l(arr)

// let arr = []
// for (let i =1; i<=10; i++){
//     arr.push('x')
// }
// l(arr)

// let arr = [1, 2, -4, 6, -4, 3, 0, -5]
// let newArr = []
// for (let elem of arr){
//     if(elem >=0){
//         newArr.push(elem)
//     }
// }
// l(newArr)

// let arr = [1, 2, 3]
// for (let i =0; i < arr.length; i++){
//  arr[i] = arr[i]+10
// }
// l(arr)
//161
// let arr1 = ['пн', 'вт', 'ср', 'чт', 
// 	'пт', 'сб', 'вс']; 
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {}
// for(let i = 0; i <= 6; i++){
//     let key = arr1[i]
//    let value = arr2[i]
//    obj[key] = value
// }
// l(obj)
// l(Object.keys(obj).length)

// let obj = {a: 1, b: 2, c: 3, d: 
// 	4, e: 5};

// let objD2 = {}
// let arr1 = []
// let arr2 = []
// for(let elem in obj){
//     if(obj[elem] % 2 === 0){
//     arr1.push(elem)
//     arr2.push(obj[elem])   
// }}
//  l(arr1, arr2)

// objD2[arr1[0]] = arr2[0]
// objD2[arr1[1]] = arr2[1]
// l(objD2)

// let obj = {a: 1, b: 2, c: 3, d: 
// 	4, e: 5}; 
// let objRevers ={}
// let arr1 =[]
// let arr2 =[]
// for(let el in obj){
//     arr1.push(obj[el])
//     arr2.push(el)
// }
// for(let i =0; i<=4; i++){
//     let key = arr1[i]
//     let value = arr2[i]
//     objRevers[key] = value
// }
// l(objRevers)
//162
// let obj = {x: 1, y: 2, z: 3};
// for(let el in obj){
//     obj[el] = obj[el]**2
// }
// l(obj)

// let obj = {x: 1, y: 2, z: 3};
// for(let el in obj){
//     obj[el] = ++obj[el]
// }
// l(obj)

//163
// let arr = ['a', 'b', 'd', 'e'];
// let flag = false
// for(let elem of arr){
//     if(elem == "c"){
//         flag = true
//     }
// }
// if(flag){
//     l('+++')

// }else{l('---')}

// let num = 9
// let flag = true
// if(num <=1 || 
//     num % 2 == 0 || 
//     num % 3 == 0 ){
//     flag= false
// }
// let i = 5
// while(i*i <= num){
//     if( num % i == 0 ||
//         num % (i+2) == 0 ){
//             flag = false
//         }
//         i +=6
// }
// if( num == 2 ||
//     num == 3 ){
//     flag= true}
// if(flag){
//     l('+++')
// } else l('---')

// let num = 9;
// let flag = true;

// if (num == 2 || num == 3) {
//     flag = true;
// } else if (num <= 1 || num % 2 == 0 || num % 3 == 0) {
//     flag = false;
// } else {
//     let i = 5;
//     while (i * i <= num) {
//         if (num % i == 0 || num % (i + 2) == 0) {
//             flag = false;
//             break;  // Выход из цикла, если найден делитель
//         }
//         i += 6;
//     }
// }

// if (flag) {
//     l('+++');
// } else {
//     l('---');
// }

// let arr = [10, 20, 30, 40, 21, 32, 
// 	51];
//     let sum = 0
// for(let elem of arr){
//     let str = String(elem)
//   if(str[0] == 1 || str[0]==2){
//     sum = sum + elem
//   }

// }
// l(sum)

// let obj = {a: 10, b: 20, c: 30, 
// 	d: 40, e: 50}; 
// let sum = 0;

// for (let elem in obj) {
//     let str = String(obj[elem])
//     l(str)
// 	if (str[0] === '1' || str[0]
// 		=== '2') { 
// 		sum += +str;
// 	}
// }

// console.log(sum);
//166
// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// }
// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }
// let i = 0;

// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }
// let res = 0;

// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }

// console.log(res);

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	arr[+elem -1] = elem ** 2;
// }

// // console.log(arr);

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let elem in obj) {
// 	sum += +obj[elem];
// }
// console.log(sum);

// let arr = [1, 2, 4, 5];
// let res = '';
// let flag = false

// for (let elem of arr) {
// 	if (elem == 3) {
// 		flag = true
// }
// }
// if (flag) {
//     res = '+++';
// } else {
//     res = '---';
// }
// console.log(res);


// let arr = [1, 2, 3, 4, 5];
// let res = false;
// for (let elem of arr) {
//     l(typeof elem)
// 	if (elem === 3) {
// 		res = true;
// 		break;
// 	}
// }1
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6, 7, 
// 	8, 9]; 
// let res = []
// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		res.push(elem);
// 	}
// }

//console.log(res);
//167
// for(let i =100; i >=1; i--){
//     l(i)
// }
// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         l(i)
//     }
// }
// let arr =[]
// for(let i = 1; i <= 10; i++){
//    arr.push(i) 
//     }
//     l(arr)
// let arr = [1, 3, 3, 6, 78, 3, 0, -8, 22]
// for (let elem of arr){
//     if (elem > 0 && elem < 10){
//         l(elem)
//     }
// }

// let arr = [5, 1, 3, 3, 6, 78, 3, 0, -8, 22, 5]
// let flag  = false
// let count = 0 
// for (let elem of arr){
//     if(elem === 5){
//         flag = true
//         ++count
//         break
//     }
// }
// l(flag, count)

// let arr = [5, 1, 3, 3, 6, 78, 3, 0, -8, 22, 5]
// let sum = 0
// for (let elem of arr){
//     sum += elem*elem
// }
// l(sum)

// let arr = [5, 1, 3, 3, 6, 78, 3, 0, -8, 22, 5]
// let sum = 0
// for (let elem of arr){
//     sum += elem
// }
// l(sum/arr.length)

// let num = 44
// let p = 1
// for(let i = 1; i <= num; i++){
//     p *= i
// }
// l(p)
 
// let arr =[]
// for(let i =10; i>= 1; i--){
//     arr.push(i)
// }
// l(arr)

// let arr = [3, 4, -5, -4, 4]
// let sum = 0
// for(let elem of arr){
//     if(elem >= 0){
//         sum += elem
//     }
// }
// l(sum)

// let arr = [10, 20, 30, 50, 235, 3000];
// for(let elem of arr){
//     let str = String(elem)
//     if(str[0] == '1' ||
//        str[0] == '2' ||
//        str[0] == '5' ){
//         l(elem)
//        }
// }

// let arr = [10, 20, 30, 50, 235, 3000];
// for(let i = arr.length-1; i >= 0; i--){
//     l(arr[i])
// }

// let arr = [0, 3, 3, 4, 8, 5, 8, 0]//еслі ціфры не повторяются
// for(let i = arr.length-1; i >= 0; i--){
//     if(i === arr[i]){
//         l(arr[i])
//     }
// }

// let arr = [0, 3, 3, 4, 8, 5, 8, 0]
// for(let elem of arr){
//     document.write(`${elem} <br>`)
// }

// let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// for(let i = 0; i <= week.length - 3; i++){
//     document.write(week[i])
// }
// document.write(`<b>${week[5]}</b>`)
// document.write(`<b>${week[6]}</b>`)



// let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// let day = 1
// for(let i = 0; i <= week.length - 1; i++){
//     if( i === day){
//         document.write('<i>'+week[i]+ '</i>')
//     }else{
//         document.write(week[i])
//     }
    
// }

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
//  for(let elem in obj){
//     obj[elem] = +((obj[elem]*1.1).toFixed(0))
//  }
//  l(obj)

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
//  for(let elem in obj){
//     if(obj[elem] <= 400){
//     obj[elem] = +((obj[elem]*1.1).toFixed(0))
//     }
//  }
//  l(obj)


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {}
// for(let i = 0; i <= arr1.length-1; i++){
//     let key = arr1[i]
//     let value = arr2[i]
//     obj[key] = value
// }
// l(obj)

// let obj = {1: 6, 2: 7, 3: 8, 4: 
// 	9, 5: 10};
//     let sum1 = 0
//     let sum2 = 0 
// for(let elem in obj){
//     sum1 += +elem
// l(sum1)

//     sum2 += obj[elem]
//     l(sum2)
// }
// l(sum1/sum2)

// let obj = {'a': 1, 'b': 2, 'c': 3, 
// 	'd': 4, 'e': 5};
//     let arr1 = []
//     let arr2 = [] 
// for( let elem in obj){
// arr1.push(elem)
// arr2.push(obj[elem])
// }
// l(arr1, arr2)

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let arr = []
// for(let elem in obj){
//     if(String(obj[elem])[0] == 1 || String(obj[elem])[0] == 2){
//         arr.push(obj[elem])
//     }
// }
// l(arr)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {}
// for(let i = 0; i <= arr.length-1; i++){
//     obj[arr[i]] = i+1

// }
// l(obj)

// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// l(arr[3][2], arr[1][1], arr[2][0], arr[0][0])




// let arr = [[1, 2], [3, 4], [5, 6]]
// let sum = arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0]+ arr[2][1]
// l(sum)

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];
// let sum = arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0]+ arr[1][0][1] + arr[1][1][0] + arr[1][1][1]
// l(sum)

// let arr = [
//     [1, 2, 3, [4, 5, [6, 7]]],
//     [8, [9, 10]]
// ];
// let sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1]
// l(sum)
// let arr = [
//     [1, 2, 3, 4, 5], 
//     [6, 7, 8],
//     [9, 10]
//     ]; 

// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		console.log(elem);
// 	}
// }



// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0
// for(let subArr of arr){
//     for(let elem of subArr){
//         sum = sum + elem
//     }
// }
// l(sum)

// let arr = [[[1, 2], [3, 4]], [[5, 
// 	6], [7, 8]]]; 

//     let sum = 0
//     for(let subArr of arr){
//         for(let elem of subArr)
//             for(let elem2 of elem){
//             sum = sum + elem2
//         }
//     }
//     l(sum)

// let arr = [[1, 2, 3, 4, 5], [6, 
// 	7, 8], [9, 10]]; 

// for (let i = 0; i < arr.length; 
// 	i++) { 
// 	for (let j = 0; j < arr[i].length; j++) { 
// 		console.log(arr[i][j]);
// 	}
// }

// let arr = [[[1, 2], [3, 4]], [[5, 
// 	6], [7, 8]]]; 
//  let sum = 0

//  for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         for (let k = 0;  k < arr[i][j].length; k++){
//         sum = sum + arr[i][j][k]
//     }
//  }
// }
//  l(sum)

// let arr = []
// for(let i = 0; i < 3; i++){
//     arr[i] = []
//     for(let j = 0; j < 5; j++){
//         arr[i].push(j + 1)
//     }
// }
// l(arr)


// let arr = []
// for(let i = 0; i < 3; i++){
//     arr[i] = []
//     for(let j = 0; j < 4; j++){
//         arr[i].push('x')
//     }
// }
// l(arr)

// let arr = []
// for(let i = 0; i < 3; i++){
//     arr[i] = []
//     for(let j = 0; j < 2; j++){
//     arr[i][j] = []
//         for(let k = 0; k < 5; k++){
//         arr[i][j].push(k + 1)
//     }
// }
// }
// l(arr)

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

//[[1, 2], [3, 4], [5, 6], [7, 8]]
// let arr = []
// let count = 1
// for(let i = 0; i <4 ; i++){
//     arr[i] = []
//     for(let j = 0; j < 2; j++){
//         arr[i].push(count++)
//     }
// }
// l(arr)

// [[2, 4, 6], [8, 10, 12], [14, 
// 	16, 18], [20, 22, 24]] 
// let arr = []
// let count = 2
// for(let i = 0; i <4 ; i++){
//     arr[i] = []
//     for(let j = 0; j <3 ; j++){
//         arr[i].push(count)
//         count = count + 2
//     } 
// }
// l(arr)

// let arr = []
// let count = 1
// for(let i = 0; i <2 ; i++){
//     arr[i] = []
//     for(let j = 0; j < 2; j++){
//         arr[i][j] = []
//             for(let k = 0; k < 2; k++){
//                 arr[i][j].push(count++)
//             }
//     }
// }
// l(arr)

// let arr = [];
// let k = 1
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k);
// 		k++;
// 	}
// }

// console.log(arr);
// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++);
// 	}
// }

// console.log(arr);
// let obj = {
// 	key11: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key22: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key33: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let sum = obj.key11.key1 + obj.key11.key2 + obj.key11.key3 +
//           obj.key22.key1 + obj.key22.key2 + obj.key22.key3 +
//           obj.key33.key1 + obj.key33.key2 + obj.key33.key3
// l(sum)


// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',,ke
// 		3: 'c3',
// 	},
// }
// l(obj[2][2], obj[3][1])

// let obj = {
// 	key1: {
// 		a: 1, b: 2, c: {d: 3, e: 4,}, f: 5,
//     },
// 	key2: {
// 		g: 6, h: 7,
// 	},
// }
// l(obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f + obj.key2.g + obj.key2.h)

// let obj = {
// 	a: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	b: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	c: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }

// for (let key in obj) {
// 	let subObj = obj[key];
	
// 	for (let subKey in subObj) {
// 		console.log(subObj[subKey]);
// 	}
// }

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// let sum  = 0 
// for (let key in obj) {
// 	let subObj = obj[key];
	
// 	for (let subKey in subObj) {
// 		sum = sum + subObj[subKey];
// 	}
// }
// l(sum)

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }

// let sum = 0;
// for(let key in obj){
//     let subObj = obj[key]
//         for(let subKey in subObj){
//             let subSubObj  = subObj[subKey]
//                 for(let subSubKey in subSubObj){
//                     sum = sum + subSubObj[subSubKey]
//                 }
//         }
// }
// l(sum)

// let students = {
// 	'group1': ['name11', 'name12', 
// 		'name13'], 
// 	'group2': ['name21', 'name22', 
// 		'name23'], 
// 	'group3': ['name31', 'name32', 
// 		'name33'], 
// };
// l(students.group3[0])

// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 		'data43',
// 	],
// };

// for(let key in data){
//     for(let elem of data[key]){
//         l(elem)
//     }
// }

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];
// for(let obj of data){
//     for(let key in obj ){
//         l(obj[key])
//     }
// }

// let data = [
// 	{
// 		1: [
// 			'data111',
// 			'data112',
// 			'data113',
// 		],
// 		2: [
// 			'data121',
// 			'data122',
// 			'data123',
// 		],
// 	},

// 	{
// 		1: [
// 			'data211',
// 			'data212',
// 			'data213',
// 		],
// 		2: [
// 			'data221',
// 			'data222',
// 			'data223',
// 		],
// 	},
// 	{
// 		1: [
// 			'data411',
// 			'data412',
// 			'data413',
// 		],
// 		2: [
// 			'data421',
// 			'data422',
// 			'data423',
// 		],
// 	},
// ];
// for(let obj of data){
//     for(let key in obj ){
//         for(let arr of obj[key])
//         l(arr)
//     }
// }
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// for(let employe of employees){
//     l(employe.name + ' ' + employe.salary)
// }
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// let sum = 0

// for(let employe of employees){
//     sum = sum + employe.salary
// }
// l(sum)

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];

// for(let employe of employees){
//     if(employe.age >= 30){
//         l(employe.salary)
//     }
// }
