// read from food and drinks files. link to node's file system module
var fs = require('fs');

/**
 * Synchronous(Blocking) Process
 */
// open up the food.txt fle, read the values
var food = fs.readFileSync('food.txt','utf8');

// log food to the console:
console.log('FOOD');

console.log(food);

// same calls for drinks:
var drinks = fs.readFileSync('drinks.txt','utf8');
console.log('\nDRINKS');
console.log(drinks);