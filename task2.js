// Question2
var personName = '';
personName = prompt('What is your Name') || '';
if (personName !== null && personName !== '') {
    alert("Assalamualaikum ".concat(personName, ", . would you like to have a cup of coffe with me today."));
}
else {
    alert('Please fill your name!');
}
