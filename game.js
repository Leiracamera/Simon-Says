// Array for button colors
const buttonColors = ["red", "blue", "green", "yellow"];

// Empty Array for game pattern
const gamePattern = [];

let randomChosenColor; // Declare globally 

const userClickedPattern = []; // Array of buttons pushed

// Function to select a random color (same length as array), store it and add (push) it to the game pattern array
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * buttonColors.length); // creates num 0-3
    randomChosenColor = buttonColors[randomNumber]; // ranchocolor = buttoncolors(yel,red etc array)at the randnum index
    gamePattern.push(randomChosenColor); // empty array filled with randchocol. 

    // Animate a "flash" on button that matches randomChosenColor
    $("#" + randomChosenColor).fadeOut(50).fadeIn(50);

    // Play sound of selected button
    playSound(randomChosenColor);

    console.log("Game Pattern: ", gamePattern); // for debugging
}

// Function to play sound
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play().catch(function(error) {
        console.log("Audio failed to play: ", error);
    });
}
 
// Start the game and user interact with page
$(document).on("keypress", function() {
    nextSequence();
});

$(".btn").on("click", function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor); // add the buttons pushed to the empty array
    console.log(userClickedPattern); // log the array as it fills
});












// // Animate "on click" event
// $("#" + gamePattern).on("click", function() {
//     $("#" + gamePattern).fadeOut(50).fadeIn(50);
// });

// // Play sound of button selected
// let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
// audio.play();