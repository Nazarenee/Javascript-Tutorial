// ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the element)

let numbers = [1,2,3,4,5];

let max = Math.max(...numbers);
let min = Math.min(...numbers);


let username = "Christian test";
let letters = [...username].join("-");




let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots","celery","potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];