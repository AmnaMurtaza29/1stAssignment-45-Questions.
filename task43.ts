//Question, 43.
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ['Albus Dumbledore', 'Severus Snape', 'Hermione Granger'];


function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}

make_great(magicians);
show_magicians(magicians);

// 43 Started

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the Great');
    }
    return greatMagicians;
}
const magicians3: string[] = ['Draco Malfoy', 'Voldemort', 'Doctor Strange']
const greatMagicians2: string[] = make_great2(magicians);
show_magicians(magicians3);
show_magicians(greatMagicians2)

