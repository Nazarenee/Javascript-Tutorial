const fullName = "Christian meg";

//let firstName = fullName.slice(0,9);
//let lastName = fullName.slice(10,13);

//let firstChar = fullName.slice(0,1);
//let lastChar = fullName.slice(-1);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" "));


const email = "testmail@gmail.com";

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);



console.log(firstName);
console.log(lastName);
email.slice(0,email.indexOf("@"))
console.log(extension);