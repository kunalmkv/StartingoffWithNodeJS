//step1: importing http protocol
const http = require('http');
const fs = require('fs');
const html = fs.readFileSync('./Template/index.html', 'utf-8')
//step2: create a server
const server = http.createServer((request, response) => {
    let path = request.url;
    //response.end(path);
    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        response.end(html.replace('{{%CONTENT}}', 'You are in Home Page!'));
    }
    else if (path.toLocaleLowerCase() === '/about') {
        response.end(html.replace('{{%CONTENT}}', 'You are on about page'));
    }
    else if (path.toLocaleLowerCase() === '/contact') {
        response.end('You can contact us @ 454636344');
    }
    else if (path.toLocaleLowerCase() === '/node') {
        response.end(html.replace('{{%CONTENT}}', 'You are in Node Page!'));
    }
    else {
        response.end(html.replace('{{%CONTENT}}', 'ERROR: 404  page not found!'));
    }
})

//step3: start a server
server.listen('3000', '127.0.0.1', () => {
    console.log('server has been started!!!');
});

