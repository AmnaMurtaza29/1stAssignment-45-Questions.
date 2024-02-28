//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians :string [] = ['Albus Dumbledore', 'Severus Snape', 'Hermione Granger']

function show_magicians(magicians:string[]) :void {
    
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
        
    }
}

show_magicians(magicians)