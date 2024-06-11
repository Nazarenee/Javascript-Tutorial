// LOCAL SCOPE
function function1(){
  let x = 1;
  console.log(x);
}


function function2(){
  let x = 2;
  console.log(x);
}

function1();
function2()


//GLOBAL SCOPE 

let x = 10;
function function1(){
  console.log(x);
}

function function2(){
  console.log(x);
}