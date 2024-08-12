const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

          
                console.log(fruits[0].name);

                fruits.push({name: "grapes", color: "purple", calorie: "62"});
                
                
                fruits.forEach(fruit => console.log(fruit.name));
                
                
                const fruitColors = fruits.map(fruit => fruit.color);
                
                console.log(fruitColors)
                
                
                const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
                
                console.log(yellowFruits);


const maxfruit = fruits.reduce((max, fruit) =>
                                fruit.calories > max.calories ? 
                                fruit : max);


console.log(maxfruit);