const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
interface.question("Please Enter your name", (name) => {
    console.log(`Hiiii... ${name} how are you?`);
    interface.close();
})

interface.on('close', () => {
    console.log('  Interface closed!!');
    process.exit(0);
})