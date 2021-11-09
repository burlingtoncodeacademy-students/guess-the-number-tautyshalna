const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}
/*-------------------------Globals---------------------*/
function randoNumb(min, max) {
    let range = max - min + 1
    return min + Math.floor(Math.random() * range)
}

function smartGuess(min, max) {
    return Math.floor((min + max) / 2)
}

start();

/*------------------------Function Block-----------------------*/

async function start() {
    let min = 1
    let max = 100
    console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
    let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
    console.log('You entered: ' + secretNumber);
    let compGuess = smartGuess(min, max)
    let answer = await ask('Is your number ' + compGuess + "?")
    if (answer === "y") {
        let answer = await ask ("Do You Wish to play again?");
        if (answer === "y"){
            console.log(start())
        }
        else { 
            process.exit()
        }
    } else {
        while (answer !== "y") {
            let hiLow = await ask("Is it higher or lower? (h/l)")
            if (hiLow === "h") {
                min = compGuess + 1
                compGuess = smartGuess(min, max)
            } else if (hiLow === "l") {
                max = compGuess - 1
                compGuess = smartGuess(min, max)
            }
            answer = await ask("Is you number " + compGuess + "?")
        }
    }
    if (answer === "y") {
        let answer = await ask ("Do You Wish to play again? (y/n)");
        if (answer === "y"){
            console.log("async function")
        } else {
        console.log("BYE!")
        }
    }
    process.exit();

}