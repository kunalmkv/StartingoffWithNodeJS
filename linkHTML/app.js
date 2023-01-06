//step1: importing http protocol
const http = require('http');
const fs = require('fs');
const html = fs.readFileSync('./Template/index.html', 'utf-8')
//step2: create a server
const server = http.createServer((request, response) => {
    console.log('a new request received');
    response.end(html);
    console.log(request);
    console.log(response);

})

//step3: start a server
server.listen('3000', '127.0.0.1', () => {
    console.log('server has been started!!!');
});

