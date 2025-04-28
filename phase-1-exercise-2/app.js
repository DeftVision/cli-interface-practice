const { exec } = require('child_process');

const userInputArray = process.argv.slice(2);
const userInput = userInputArray.join(' ');

exec(`mkdir "${userInput}"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`)
        return
    }

    if (stderr) {
        console.error(`Stderr: ${stderr}`)
        return
    }

    console.log(`Stdout: ${stdout}`)
})