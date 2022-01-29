let max = parseInt(prompt("Welcome. Enter max number"));
while (!max) {
    max = parseInt(prompt("Enter a valid number:"));
}
let targetNum = Math.floor(Math.random() * max) + 1;
console.log(targetNum);

let guess = prompt("Guess the number:");
let count = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    if (guess > targetNum) {
        guess = prompt("Too high. Take another guess");
    } else {
        guess = prompt("Too low. Take another guess");
    }

    count++;
}
if (guess === 'q') {
    console.log("You Quit The Game!")
} else {
    console.log(`It took you ${count} guesses and the correct guess is ${guess}`);
}