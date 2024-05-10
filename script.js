// The initial numbers that must be verified.
const n1 = 6;
const n2 = 17;
const n3 = 24;
const n4 = 3;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

//i think this is the other part of part 1??? I am using the === sign to check if all the values of the variables are equal to each other. if it comes up false, that means that the values are different, making the numbers unique.
const isUniquePt2 = (n1 === n2 && n1 === n3 && n1 === n4 && n2 === n3 && n2 === n4 && n3 === n4);
console.log("Are these numbers all the same? " + isUniquePt2)

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//this is where my part of code one begins
//i checked by using the && operator if the numbers were all divisible by 5 (they were not)
let isDivisibleByFive = (n1 / 5 && n2 / 5 && n3/5 &&  n4/5) === true;

console.log(isDivisibleByFive)
console.log(`Are these numbers divisible by 5? ${isDivisibleByFive}` )

//now checking if the first number is greater than the last Num
const isFirstGreaterThanLast = (n1 > n4);
console.log(isFirstGreaterThanLast);
// console.log


//doing the arithmetic chains :)
const subNums = n2 - n1;
const multiplyNums = subNums * n3;
const moduloNums = multiplyNums % n4;

console.log(subNums, multiplyNums, moduloNums);
console.log('Using arithmetic chains: ' + subNums + ", " + multiplyNums + ", " + `${moduloNums}.`);


/** Part 2:
 * In order to do this part, I decided to create variables to hold the information that was already given to me.
 */
const milesToDestination = 1500;
const gasPrice = 3;
const fuelBudget = 175;
const fiftyFiveMPH = 30;
const sixtyMPH = 28;
const seventyFiveMPH = 23;

//i could make this into a function 

//to determine how many gallons of gas were needed to get to the destination, I created the equation variable as well as the price per gallon variable. By using the let keyword, I can change these values as I work through the rest of the equation.
let gasEquation = milesToDestination / fiftyFiveMPH;
let pricePerGallons = gasEquation * 3;
let hoursOfTravel = milesToDestination / 55

console.log(gasEquation);
console.log(pricePerGallons);
console.log(hoursOfTravel);

console.log("It would take " + hoursOfTravel + ' hours to get to where we want to on 55 miles per hour.' )

gasEquation = milesToDestination / sixtyMPH;
pricePerGallons = gasEquation * 3;
hoursOfTravel = milesToDestination / 60

console.log(gasEquation);
console.log(pricePerGallons);
console.log(hoursOfTravel);



gasEquation = milesToDestination / seventyFiveMPH;
pricePerGallons = gasEquation * 3;
hoursOfTravel = milesToDestination / 75

console.log(gasEquation);
console.log(pricePerGallons);
console.log(hoursOfTravel);


//part three future exploration: 

function makeItEasier(miles, MPH){
  let gasEquat = milesToDestination / MPH;
  let pricePerG = gasEquat * 3;
  let hoursOfTrav = milesToDestination / miles;
  let budgetFriendly = (gasPrice <= pricePerG);

  // console.log 
  console.log('Is this trip budget friendly? ' + budgetFriendly);
}

makeItEasier(55, fiftyFiveMPH)


















