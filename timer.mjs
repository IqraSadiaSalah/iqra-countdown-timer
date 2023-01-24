#! /usr/bin/env node
// import chalk from 'chalk';
import inquirer from 'inquirer';
// import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
let playerName;
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function invitation() {
    let rainbowText = chalkAnimation.rainbow("CountDown- Timer");
    await sleep();
    rainbowText.stop();
}
async function askPlayerName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: "input",
        message: "What is your name?",
        default() {
            return "Name";
        }
    });
    playerName = answers.player_name;
}
async function timer() {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'countdownValue',
            message: 'Enter the countdown value in seconds:',
        }
    ])
        .then((answers) => {
        let countdown = parseInt(answers.countdownValue);
        const timer = setInterval(() => {
            console.log(countdown);
            countdown--;
            if (countdown === 0) {
                clearInterval(timer);
                console.log("Time's up!");
            }
        }, 1000);
    });
}
console.clear();
await invitation();
await askPlayerName();
await timer();
