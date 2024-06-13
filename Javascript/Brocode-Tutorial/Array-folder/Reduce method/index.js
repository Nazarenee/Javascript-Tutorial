const prices = [5,30,10,25,15,20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous,next){
  return previous + next;
}


const grades = [70,50,90,80,65,95];

const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(previous, next){
  return Math.max(previous, next);
}