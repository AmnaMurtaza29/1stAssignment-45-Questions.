//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let users :string [] = ['Admin', 'Zara', 'Sara', 'Musayib', 'Arsal']
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

for (let user of users) {
    if (user === 'Admin') { 
        console.log("Hello Admin, Welcome to dashboard, would you like to see a status report?") ;
        
    }  else {
        console.log(`Hello ${user} thank you for logging in again.`);
        
    }
}