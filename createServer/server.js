const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    const method = req.method;
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"> send</button></form></body > ');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })

        //res.writeHead(302,{});
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first Page </title></head>');
    res.write('<body><h1> Hello My name is kunal Mishra</h1></body>');
    res.write('</html>');
    res.end();
    //process.exit();
});
server.listen(3000);
