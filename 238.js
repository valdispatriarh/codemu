//https://code.mu/ru/javascript/book/prime/functions/types/anonymous-functions-object/
let obj238 = {
    func1: function() { return 1 },
    func2: function() { return 2 },
    func3: function() { return 3 },
}
console.log(obj238.func1()+obj238.func2()+obj238.func3())
for (let func in obj238) {
    console.log(obj238[func]())
}
