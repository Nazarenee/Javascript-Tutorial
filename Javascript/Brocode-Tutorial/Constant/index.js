const PI = 3.14159;
let radius;
let circumference;

/*
This wouldnt work. Since PI is a const meaning a variable which value you cant change, this would give u a error
PI = 420.69;
*/


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2* PI * radius;

    document.getElementById("myH3").textContent = `Your circumference is ${circumference} cm`;
}