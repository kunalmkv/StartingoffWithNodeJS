const fs = require('fs');
var mess = '';
const requestHandler = (req, res) => {
    const method = req.method;
    var mess = ' ';
    const url = req.url;
    if (url === '/') {
        fs.readFile('message.txt', 'UTF-8', (error1, data1) => {
            for (let i = 0; i < data1.length; i++) {
                if (data1[i] == '+') {
                    mess += ' ';
                }
                else {
                    mess += data1[i];
                }
            }
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write('<body>');
            res.write(`<body> ${mess} <br></body>`);
            res.write('<form action="/message" method="POST">')
            res.write('<input type="text" name="message"><button type="submit"> send</button>');
            res.write('</form>');
            res.write('</body >');
            res.write('</html>');
            return res.end();

        })

    }
    else if (url === '/message' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });



    }
    else {
        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');

        res.write('<body>');
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message"><button type="submit"> send</button>');
        res.write('</form>');
        res.write('</body >');
        res.write('</html>');
        return res.end();
    }


}
module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}