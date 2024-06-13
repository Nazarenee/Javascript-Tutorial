// Rest parameters ... is used in parameters. allow a function work with a variable number of arguments by bundling them into an array


function sum(...numbers){
  let result = 0;
  for(let number of numbers){
    result+= number;
  }
  return result;
}

const total = sum(1,3,5,6,3,2);

console.log(`Your total is $${total}`);



function combineStrings(...strings){
  return strings.join(" ");
}

const fullname =combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullname);