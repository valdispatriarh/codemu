
//https://code.mu/ru/javascript/book/prime/inbuilt/string/replacing/
let str192 = '1-2-3-4-5'
let newStr192 = str192.replace(/-/g, '.')
console.log(newStr192)

let str1922 = '1-2-3-4-5'
while(str1922.includes('-')){
    str1922 = str1922.replace('-', '.')
}
console.log(str1922)

let str1923 = '1-2-3-4-5'
str1923 = str1923.replaceAll('-', '.')
console.log(str1923)

