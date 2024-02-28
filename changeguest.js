// Question 15.
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


var changeGuestList = ['Dada Abu Muhammad Yaqoob', 'Arfa Karim', 'Sir Zia'];
// for(let i=0; i<changeGuestList.length; i++){
//     console.log('Dear.' + changeGuestList[i] + ', \n\n It is our pleasure to invite you in our party. \n\nThank You!\n\n');
// }
var absentGuest = 'Sir Zia';
var newGuest = 'Nana abu Muhammad Khan';
changeGuestList[2] = newGuest;
// for(let i=0; i<changeGuestList.length; i++){
//     console.log('Dear.' + changeGuestList[i] + ', \n\n It is our pleasure to invite you in our party. \n\nThank You!\n\n');
// }
console.log("Mr. ".concat(absentGuest, " is not coming to the party."));
// More Guests: starting code for 16th question
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

console.log('Good News! We have more space left so we are inviting 3 more guests.');
changeGuestList.unshift('Dr. Abdul Qadeer Khan');
changeGuestList.splice(2, 0, 'Dr. Muhammad Iqbal');
changeGuestList.push('Ishtiaque Ahmed');
changeGuestList[2] = newGuest;
for (var i = 0; i < changeGuestList.length; i++) {
    console.log('Dear.' + changeGuestList[i] + ', \n\n It is our pleasure to invite you in our party. \n\nThank You!\n\n');
}
// Code for 17th Question.
// Shrinking Guest List
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

console.log('Sorry we dont have enough space only two people will be invited.');
while (changeGuestList.length > 2) {
    var removedGuest = changeGuestList.pop();
    console.log("Sorry Dear. ".concat(removedGuest, ", we are not able to invite you for dinner."));
}
for (var i = 0; i < changeGuestList.length; i++) {
    console.log('Dear.' + changeGuestList[i] + ', \n\n It is our pleasure to invite you in our party. \n\nThank You!\n\n');
}
changeGuestList.splice(0, 2);
console.log(changeGuestList);
