//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = ['Hadeed', 'farha', 'sara', 'Nuh', 'Dawood'];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var newUsernames = ['farha', 'Zara', 'Huda', 'sara', 'Ibrahim'];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, newUsernames_1 = newUsernames; _i < newUsernames_1.length; _i++) {
    var user = newUsernames_1[_i];
    if (current_users_lower.includes(user.toLowerCase())) {
        console.log("Sorry ".concat(user, " that name is taken."));
    }
    else {
        console.log("Yes ".concat(user, ", this username is available."));
    }
}