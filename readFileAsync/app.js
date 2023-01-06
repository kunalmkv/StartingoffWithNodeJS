const fs = require('fs');
fs.readFile('./input.txt', 'utf-8', (error1, data1) => {
    console.log(data1);
    fs.readFile(`./${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log(`ERROR: ${error2}`)
        console.log(data2);
        fs.readFile(`./${data2}.txt`, 'utf-8', (error3, data3) => {
            console.log(data3);
        })
    })
})