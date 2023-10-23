let numQ = 1
function func1Q(){
  ++num
}
func1Q()
func1Q()
func1Q()
console.log(numQ)//4

let numW = 1
function funcW(){
    return function func1W(){
      ++num
    }
}
funcW()()
funcW()()
funcW()()
console.log(numW)//4

function funcE(){
    let num = 1
      return function func1(){
        ++num
        console.log(num) 
      }
  }
  funcE()() //2
  funcE()() //2
  funcE()() //2

  function funcR(){
    let num = 1
      return function func1(){
        ++num
        console.log(num)
      }
  }
  let elemR = funcR()
  elemR()//2- адно і тое ж што і першы прыклад// гэта каструкцыя  (let elem = func()) дае магчымасць вызваць func1, таму што яна не бачна у глабальнай вобласці
  elemR()//3

  // раней я ужываў так 
  let countA = 0
  function funcA(){
    countA++
  } 
  funcA()
  funcA()
  console.log(countA)







  // прыклад "магіі замыкання" з падручніка
  function funcS(){
    let countS = 0;
    return function(){
        countS++
        console.log(countS)
    }
  }
 let newCount = funcS()//!!!!!!!!!!!магія //1) функцыя якая вяртае функцыю
//2) у пераменную запісваецца область бачнасці(пераменная) і аб'ект функцыі, якая будзе змяняць гэту пераменную калі яе вызавуць
// атрымліваецца мы вяртаемся к папярэдніму прыкладу(які я ужываЎ раней да знемста с замыканнем) толькі ён захаваны у пераменнай
 newCount()
 newCount()
 // а я шукаў замыканне і думаў што звыклыя паводзіны павінны змяніцца, 
 //замыканне нічого не змяняе у паводзінах кода, вось что мне трыба было зразумець ;) ура

 
	
	
 
        let counter = 0;
		 function() {
			console.log(counter);
			counter++;
		};
	};
}

let func = test();

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();