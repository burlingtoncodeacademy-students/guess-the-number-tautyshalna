const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
/*-------------------------Globals---------------------*/
function randoNumb(min,max)
let range = max-min + 1
return min + Math.floor(Math.random() * range) 

start();
/*------------------------Function Block-----------------------*/
async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
 let compGuess = randoNumb(min,max)
 let answer = await ask('Is your number ' +
 compGuess + "?")
 console.log(compGuess)


 
 
  // Now try and complete the program.
 
 
  // process.exit();
}

