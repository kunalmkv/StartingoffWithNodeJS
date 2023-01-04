const http = require('http');

const server = http.createServer(function (req, res) {

    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"> send</button></form></body > ');
        res.write('</html>');
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
