// Question2
let personName :string =  '';

personName = prompt('What is your Name') || '';

if (personName !== null && personName !== '') {

    alert(`Assalamualaikum ${personName}, . would you like to have a cup of coffe with me today.`)
} else {
    alert('Please fill your name!')
}