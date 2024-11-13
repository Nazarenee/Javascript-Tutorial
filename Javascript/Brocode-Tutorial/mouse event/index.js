const myBox = document.getElementById("myBox");

myBox.addEventListener("click",changecolor);

function changecolor(event){
    event.target.style.backgroundColor = "blue";
    event.target.textContent ="what";
}




myBox.addEventListener("mouseover",evenet = (event) =>{ 
     event.target.style.backgroundColor = "yellow";
event.target.textContent ="MOUSEOVER";});




myBox.addEventListener("mouseout",evenet = (event) =>{ 
    event.target.style.backgroundColor = "yellow";
event.target.textContent ="dont do it z";});
