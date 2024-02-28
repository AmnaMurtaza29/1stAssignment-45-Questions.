//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "large", text: string = " I love Typescript"):void {
    console.log(`I want to order ${size} sized T-shirt that says${text}`);
    
}
make_shirt();
make_shirt('medium');

make_shirt('small', ' Code, drink Tea, Sleep and Repeat')