let changeGuestList :string[] = ['Dada Abu Muhammad Yaqoob', 'Arfa Karim', 'Sir Zia'];

// for(let i=0; i<changeGuestList.length; i++){

//     console.log('Dear.' + changeGuestList[i] + ', \n\n It is our pleasure to invite you in our party. \n\nThank You!\n\n');
    
// }

let absentGuest :string = 'Sir Zia' ;
let newGuest :string = 'Nana abu Muhammad Khan' ;

changeGuestList[2] = newGuest ;

// for(let i=0; i<changeGuestList.length; i++){
//     console.log('Dear.' + changeGuestList[i] + ', \n\n It is our pleasure to invite you in our party. \n\nThank You!\n\n');
    
// }

console.log(`Mr. ${absentGuest} is not coming to the party.`);


// More Guests: starting code for 16th question



console.log('Good News! We have more space left so we are inviting 3 more guests.');

changeGuestList.unshift('Dr. Abdul Qadeer Khan') ;
changeGuestList.splice(2, 0, 'Dr. Muhammad Iqbal') ;
changeGuestList.push('Ishtiaque Ahmed')

changeGuestList[2] = newGuest ;

for(let i=0; i<changeGuestList.length; i++){
    console.log('Dear.' + changeGuestList[i] + ', \n\n It is our pleasure to invite you in our party. \n\nThank You!\n\n');
    
}

// Code for 17th Question.
// Shrinking Guest List

console.log('Sorry we dont have enough space only two people will be invited.');
 while (changeGuestList.length > 2) {
    let removedGuest = changeGuestList.pop();
    console.log(`Sorry Dear. ${removedGuest}, we are not able to invite you for dinner.`);
    
}

for(let i=0; i<changeGuestList.length; i++){
    console.log('Dear.' + changeGuestList[i] + ', \n\n It is our pleasure to invite you in our party. \n\nThank You!\n\n');
    
}

changeGuestList.splice(0,2);

console.log(changeGuestList);

