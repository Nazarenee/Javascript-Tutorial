/*
let age = 25;
let price = 10.99;
let gpa = 2.1;
let firstname = "Christian"
let online = true;

console.log(typeof firstname);
console.log(firstname)
console.log(`you are ${age} years old`);
console.log(`the price is $${price}`);
console.log(`your gpa is ${gpa}`);
console.log(typeof online);
console.log(`My friend is currently online: ${online}`);
*/

let fullName = "christian";
let age = 22;
let isStudent = true;


document.getElementById("p1").textContent = `Your name is ${fullName} `;
document.getElementById("p2").textContent = `Your are ${age} years old`;
document.getElementById("p3").textContent = `You are a student: ${isStudent}`;