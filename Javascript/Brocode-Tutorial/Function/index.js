 function add(x, y){
  return x +y;
 }

function substract(x,y){
  return x-y;
}


function isEven(number){
 /* if(number % 2 ===0){
    return true;
  } else{
    return false;
  }*/
  return number % 2 ===0 ? true : false;
}

function isValidEmail(email){
/*if(email.includes("@")){
  return true;
} else{
  return false;
}*/
return email.includes("@") ? true : false;
}








console.log(add(2,3));
console.log(substract(2,3));
console.log(isEven(3));
console.log(isValidEmail("check@fake.com"));
