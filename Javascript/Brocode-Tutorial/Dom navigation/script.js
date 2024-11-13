/*const element = document.querySelectorAll("ul");


element.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "red";
});



const byID = document.getElementById("fruits");

byID.lastElementChild.style.backgroundColor = "blue";

const apple = document.getElementById("apple");


apple.nextElementSibling.style.backgroundColor ="red";


const potatoes = document.getElementById("potatoes");

potatoes.previousElementSibling.style.backgroundColor ="blue";
*/


const element = document.getElementById("apple");
const parent = element.parentElement;

parent.style.backgroundColor = "yellow";


const element2 = document.getElementById("desserts");
 
const children = element2.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor ="red";
})