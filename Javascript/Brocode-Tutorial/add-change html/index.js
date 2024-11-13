const newh1 = document.createElement("h1");

newh1.textContent ="I like pizza";
newh1.id = "myH1";
newh1.style.color ="tomato";
newh1.style.textAlign = "center";


document.body.append(newh1)


//const box2 = document.getElementById("box2");

//document.body.insertBefore(newh1,box2);

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newh1,boxes[0]);


// REMOVE HTML ELEMENT

document.body.removeChild(newh1);
