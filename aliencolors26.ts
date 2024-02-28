// Question 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.


let alienColor = "Green"


//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.



if (alienColor == "Yellow") {
    console.log("You earned 5 points for shooting the alien!");
    
}

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.


let alien_color :string = 'red'
if (alien_color != 'green')  {
    console.log('You just earned 10 points.');
    
}

// • Write one version of this program that runs the if block and another that runs the else block.

let alienColour = "Red"

if (alienColour == "Green") {
    console.log("Player just earned 5 points for shooting the alien") 
    
} else {
    console.log("Player just earned 10 points.");
    
}