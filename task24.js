//Question 24.
//// Question 24.
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var gameOne = "Football";
var gameTwo = "Basketball";
var gameThree = "Football";
var gameFour = "Baseball";
console.log(gameOne === gameThree);
console.log(gameOne === gameFour);
//• Tests using the lower case function
console.log("AMNA".toLowerCase() === "amna");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(19 === 19);
//inequality
console.log(19 != 29);
//greater than and less than
console.log(25 >= 25);
//less than or equal to
console.log(19 <= 20);
//• Tests using "and" and "or" operators
console.log(10 === 10 && 10 > 8);
// or operator
console.log(10 === 10 || 10 > 8);
//• Test whether an item is in a array
var hobbies = ['Reading', 'Writing', 'Baking'];
console.log(hobbies.includes('Baking'));
//• Test whether an item is not in a array
var ingredients = ['All Purpose Flour', 'Cocoa Powder', 'Baking Powder'];
console.log(ingredients.includes('Vanilla essence'));
