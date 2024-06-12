let fruits = ["apple", "orange", "banana","pear"];


fruits.sort();

for(let i = 0; i < fruits.length; i++){
console.log(fruits[i]);
}

for(let fruit of fruits){
  console.log(fruit);
}




//fruits.push("cocunut"); add element to end of array
//fruits.pop(); remove last element 
//fruits.unshift("mango"); add element to the beginning
//fruits.shift(); remove element in the beginning

let index = fruits.indexOf("orange");
//console.log(index);

