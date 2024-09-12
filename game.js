// Array for button colors
const buttonColors = ["red", "blue", "green", "yellow"];

// Empty Array for game pattern
const gamePattern = [];

let randomChosenColor;

// Function to select a random color (same length as array), store it and add (push) it to the game pattern array
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * buttonColors.length);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
}

nextSequence();
console.log(gamePattern);


// # + gamePattern = btn red(or any color chosen in the 
//nextSequence function, onclick then added with a function to 
//fadein and fade out to "flash" the element)
$("#" + gamePattern).on("click", function() {
    $("#" + gamePattern).fadeOut(50).fadeIn(50);
});

// $("#" + gamePattern).click(function(event){
//     alert("a yellow button was clicked");
// });

// fade toggle for button click event