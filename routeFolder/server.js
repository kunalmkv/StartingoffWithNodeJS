const http = require('http');
const routes = require('./routes');
//const fs = require('fs');
console.log(routes.someText)
const server = http.createServer(routes.handler);
// const method = req.method;
// const url = req.url;

//process.exit()
server.listen(4000);
