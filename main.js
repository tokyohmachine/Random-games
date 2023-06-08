// left side
var images = ['Images/dice1.png', 'Images/dice2.png', 'Images/dice3.png', 'Images/dice4.png', 
'Images/dice5.png', 'Images/dice6.png'];

var random1 = Math.floor(Math.random() * images.length);

var randomImage1 = images[random1];

var diceImageleft = document.getElementById('leftDiceImage').setAttribute("src", randomImage1);


// right side
var images2 = ['Images/dice1.png', 'Images/dice2.png', 'Images/dice3.png', 'Images/dice4.png', 
'Images/dice5.png', 'Images/dice6.png'];

var random2 = Math.floor(Math.random() * images2.length);

var randomImage2 = images2[random2];

var diceImageright = document.getElementById('rightDiceImage').setAttribute("src", randomImage2);


// change h1
var h1 = document.querySelector('h1');

if (randomImage1 === randomImage2) {
    h1.innerHTML = 'Draw!';
} else if (randomImage1 > randomImage2) {
    h1.innerHTML = '🚩 Player 1 Wins!';
} else if (randomImage1 < randomImage2) {
    h1.innerHTML = 'Player 2 Wins 🚩!';
} else {
    h1.innerHTML = 'No one wins 😔!';
}


// if statement, querySelector() and the innerHTML property to change the text in the h1.