const fs = require('fs');
//function requestHandler(req,res){}
const requestHandler = (req, res) => {
    const method = req.method;
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');

        res.write('<body>');
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message"><button type="submit"> send</button>');
        res.write('<form action="/about" method="POST">')
        res.write('<input type="button" name="about" value="about">');
        res.write('</form>');
        res.write('</body >');
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
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title> My first Page </title></head>');
            res.write('<body><h1> Hello My name is kunal Mishra</h1></body>');
            res.write('</html>');
            res.end();
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        })



    }


}
module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}