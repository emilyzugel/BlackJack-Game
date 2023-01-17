let messageEl = document.getElementById("message-el");

let min = 1;
let max = 11;

function play() {
    let firstCard = Math.floor(Math.random() * (max - min) + max);
    let secondCard = Math.floor(Math.random() * (max - min) + min);
    let sum = firstCard + secondCard;
    console.log(sum);

    if (sum < 21) {
        console.log("Do you want to draw a new card? 🤔");
        messageEl.textContent =
            sum + "~ " + "Do you want to draw a new card? 🤔";
    } else if (sum === 21) {
        console.log("Wohoo! You've got Blackjack! 🥳");
        messageEl.textContent = sum + "~ " + "Wohoo! You've got Blackjack! 🥳";
    } else {
        console.log("You're out of the game! 😭");
        messageEl.textContent = sum + "~ " + "You're out of the game! 😭";
    }
}

function changeImg() {}
