// NUMBER GUESSING GAME
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// console.log(answer);
let attempts = 0;
let guess;
let running = true;
while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`)
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("please enter a number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert(`The number should be between ${minNum} and ${maxNum}`);
    } else {
        ++attempts;
        if (guess < answer) {
            window.alert("Too low, Try again higher!");
        } else if (guess > answer) {
            window.alert("Too high, Try again lower!");
        } else {
            window.alert(`Yeah buddy! You got it right, it's ${answer} \n It took you ${attempts} attempts`)
            running = false;
        }
    }
    console.log(typeof guess, guess);
}

