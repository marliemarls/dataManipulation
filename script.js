//here I am declaring all my variables as consts because these are all immutable (to me)
const num = 2;
const num2 = 7;
const myName = "Marlie";
const faveColor = "blue";
const cats = 3;

/**
 * What I'm doing below is basically manipulating the equation variable as I declared it with let, making it a mutable variable. 
 * This allowed me to manipulate the equation to perform the arithmetic operators 
 * as well as console.log equation without having to create a new variable to test the operators. 
 */

let equation = num * num2;

console.log(equation);

equation = num + num2;

console.log(equation);

equation = num2 - num;

console.log(equation);

equation = num2 % num;

console.log(equation);

equation = num2 / num;

console.log(equation);

//below here I began to test the comparison operators with num & num2 

console.log(num < num2);
console.log(num > num2);
console.log(num <= num2);
console.log(num >= num2);

console.log(num2 < num || num < num2);
console.log(num2 < num && num < num2);

// finally, I began to create strings with the use of string concatenation as well as string interpolation. 
//I decided to create a new variable for the interpolation to create a more fluid paragraph

const myPosition = "Jr Developer."

console.log(`Hi my name is ${myName}, and I have ${cats} cats. My favorite color is ${faveColor}.`);
console.log("When I went to work today, I said \"Good morning\" to all my coworkers.");
console.log("I work at PeopleShores as a " + myPosition)