const numbers = [1,2,3,4,5,6];

const squares = number.map(function(element){
  return Math.pow(element,2);
});


const qubes = numbers.map(function(element){
  return Math.pow(element, 3);
});


const evenNums = numbers.filter(function(element){
  return element % 2 === 0;
});

