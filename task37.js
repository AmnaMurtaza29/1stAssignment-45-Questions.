//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = " I love Typescript"; }
    console.log("I want to order ".concat(size, " sized T-shirt that says").concat(text));
}
make_shirt();
make_shirt('medium');
make_shirt('small', ' Code, drink Tea, Sleep and Repeat');
