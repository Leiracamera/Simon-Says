const buttonColors = ["red", "blue", "green", "yellow"]; // Array for button colors

let gamePattern = []; // Empty Array for game pattern 
let userClickedPattern = []; // Array of buttons pushed

let started = false;
let level = 0;

// Start the game and user interact with page
$(document).keypress(function() {
    if (!started) { // Check if game has not started yet
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        }
    });

    // Function for user clicks
    $(".btn").click(function() {
        let userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);

        playSound(userChosenColor); // add the buttons pushed to the empty array
        animatePress(userChosenColor); // Animate the button when pressed by user

        console.log("User Patter: ", userClickedPattern); // log the array as it fills
        checkAnswer(userClickedPattern.length-1);
    });

    function checkAnswer(currentLevel) {
        console.log("User Pattern Length: ", userClickedPattern.length);
        console.log("Game Pattern Length: ", gamePattern.length);
        
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            console.log("Success");
    
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    
        } else {
            $("#level-title").text("Game Over, Press Any Key to Restart ");
            $(document.body).addClass("game-over");

            setTimeout(function() {
                $(document.body).removeClass("game-over");
            }, 200);
            playSound("wrong")
            startOver();
            console.log("Wrong");
        }
    }

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

// Function to select a random color (same length as array), store it and add (push) it to the game pattern array
function nextSequence() {

    userClickedPattern = [];
    
    level++;
    $("#level-title").text("Level " + level);
    
    console.log("When level title is changed:", level);

    let randomNumber = Math.floor(Math.random() * buttonColors.length); // creates num 0-3

    randomChosenColor = buttonColors[randomNumber]; 
    gamePattern.push(randomChosenColor); 

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

// Function for animation on user click
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}