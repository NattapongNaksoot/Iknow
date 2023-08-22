const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInterface.question('Enter a number: ', number => {
    // Convert string to integer
    number = parseInt(number);

    if (number % 2 == 1) {
        console.log(`${number} is odd number.`);
    } else {
        console.log(`${number} is even number.`);
    }

    readInterface.close();    
});