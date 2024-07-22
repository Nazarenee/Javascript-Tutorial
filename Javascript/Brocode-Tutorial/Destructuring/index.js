// extract values from array and objects,
// then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring


// ------------------EXAMPLE 1 ----------------------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);


// ------------------EXAMPLE 1 ----------------------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red","green","blue","black","white"];


[colors[0],colors[4]] =[colors[4],colors[0]];

console.log(colors  );


// ------------------EXAMPLE 1 ----------------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES
const collors = ["red","green","blue","black","white"];

const [firstColor,secondColor,thirdColor,...extraColors] =collors;

console.log(firstColor,secondColor,thirdColor);
console.log(extraColors);