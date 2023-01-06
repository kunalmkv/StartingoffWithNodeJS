const fs = require('fs');
fs.readFile('./start.txt', 'utf-8', (error1, data1) => {
    console.log(data1);
    fs.readFile(`./${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log(data2);
        fs.readFile('./append.txt', 'utf-8', (error3, data3) => {
            console.log(data3);
            fs.writeFile('./output.txt', `${data2} \n \n ${data3} \n \n Date created : ${new Date()}`, () => {
                console.log("File written successfully");
            })
        })
    })
})