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


// ------------------EXAMPLE 2 ----------------------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red","green","blue","black","white"];


[colors[0],colors[4]] =[colors[4],colors[0]];

console.log(colors  );


// ------------------EXAMPLE 3 ----------------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES
const collors = ["red","green","blue","black","white"];

const [firstColor,secondColor,thirdColor,...extraColors] =collors;

console.log(firstColor,secondColor,thirdColor);
console.log(extraColors);

// ------------------EXAMPLE 4 ----------------------
// EXTRACT VALUES FROM OBJECTS
const person1 = {
firstName: "Spongebob",
lastName: "Squarepants",
age: 30,
job: "fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
    }

    const {firstName,lastName,age,job="Unemployed"} = person1;
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
    


    // ------------------EXAMPLE 5 ----------------------
   // DESTRUCTURE IN FUNCTION PARAMETERS


   function displayPerson({firstName,lastName,age,job="Unemployed"}){
console.log(`name : ${firstName} ${lastName} `);
console.log(`age : ${age}`)
console.log(`job : ${job}`)
   }

   displayPerson(person1);

   