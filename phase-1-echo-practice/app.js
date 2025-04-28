const {exec} = require('child_process');

console.log(process.argv)
const userMessageArray = process.argv.slice(2);
const userMessage = userMessageArray.join(' ');

console.log(userMessage)

exec(`echo ${userMessage}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }

    console.log(`Stdout: ${stdout}`);
});
