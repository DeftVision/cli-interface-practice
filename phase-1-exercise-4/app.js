const { exec } = require('child_process');


const userInputArray = process.argv.slice(2);

const commandName = userInputArray[0];
const commandArgs = userInputArray.slice(1).join(' ');

if (!commandName) {
    console.error('whoops... you didn\'t enter an argument')
    return;
}


exec(`${commandName} ${commandArgs}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }

    console.log(`Stdout: ${stdout}`)
})