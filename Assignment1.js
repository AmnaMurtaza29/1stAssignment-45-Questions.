"use strict";
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = '';
personName = prompt('What is your name?') || '';
if (personName !== null && personName !== '') {
    alert(`Assalamulaikum ${personName}, would you like to have a cup of coffee with me today.`);
}
else {
    alert('You have to fill your name !');
}
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//let personName = "Maryam";
//personName.toLocaleLowerCase
