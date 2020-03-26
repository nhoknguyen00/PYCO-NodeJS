//Use HTTP module to read 'POST' data and print on Response

const http = require('http');

http.createServer((req,res) => {
    var resData;
    req.on('data', (data) => {
        res.end(data);
    })
}).listen(3000, 'localhost');

console.log('Server is running at port 3000');