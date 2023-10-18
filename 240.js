//https://code.mu/ru/javascript/book/prime/functions/nested/functions-as-parameters/
function sumFunc(func1, func2, func3){
    console.log(func1() + func2() + func3())
}
sumFunc(function(){return 1},
        function(){return 2},
        function(){return 3}
)