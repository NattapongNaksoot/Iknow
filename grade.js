const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInterface.question('Enter your score 0 - 100: ', (score) => {
    readInterface.close();

    score = Number(score);

    if (score < 0 || score > 100) {
        console.log('You entered an invalid score.');
        return;    
    }

    if (score >= 80) {
        console.log('Excellent! You got A.');
    } else if (score >= 70) {
        console.log('Good job! You got A.');
    } else if (score >= 60) {
        console.log('Not bad! C is your grade.');
    } else if (score >= 50) {
        console.log('Becareful! D is your grade.');
    } else {
        console.log('Try it harder, You have F.');
    }
});