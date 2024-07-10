let firstCard;
let secondCard;
let newCard;
let sum;
let msg = "";

function startGame() {
  firstCard = parseInt(prompt("Enter card value: "), 10);
  secondCard = parseInt(prompt("Enter card value: "), 10);
  sum = firstCard + secondCard;

  document.getElementById("cards").textContent = firstCard + " " + secondCard;
  document.getElementById("sum").textContent = sum;

  if (sum < 21) {
    msg = "Do you want to draw a new card?";
  } else if (sum === 21) {
    msg = "Wohoo! You've got Blackjack!";
  } else {
    msg = "You're out of the game!";
  }

  console.log(msg);

  document.getElementById("result").textContent = msg;
}


function nCard(){
  newCard = parseInt(prompt("Enter new card value: "), 10);

  sum = sum + newCard;

  document.getElementById("cards").textContent = firstCard + " " + secondCard + " " + newCard;

  document.getElementById("sum").textContent = sum;

  if (sum < 21) {
    msg = "Do you want to draw a new card?";
  } else if (sum === 21) {
    msg = "Wohoo! You've got Blackjack!";
  } else {
    msg = "You're out of the game!";
  }

  console.log(msg);

  document.getElementById("result").textContent = msg;
  
}


