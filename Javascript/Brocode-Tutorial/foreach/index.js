let fruits = ["apple","orange","banana","cocunut"];


fruits.forEach(capitalize);
fruits.forEach(display);



function upperCase(element,index,array){
array[index] = element.toUpperCase();
}


function lowerCase(element,index,array){
  array[index] = element.toLowerCase();
  }


function display(element){
  console.log(element);
}


function capitalize(element,index,array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}