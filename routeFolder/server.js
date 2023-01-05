const http = require('http');
const routes = require('./routes');
//const fs = require('fs');
const server = http.createServer(routes);
// const method = req.method;
// const url = req.url;

//process.exit()
server.listen(4000);
