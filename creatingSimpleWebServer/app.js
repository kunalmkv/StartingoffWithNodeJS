//step1: importing http protocol
const http = require('http');
//step2: create a server
const server = http.createServer((request, response) => {
    console.log('a new request received');
    response.end('<h1>hello from the server side!</h1>');
    console.log(request);
    console.log(response);

})

//step3: start a server
server.listen('3000', '127.0.0.1', () => {
    console.log('server has been started!!!');
});

