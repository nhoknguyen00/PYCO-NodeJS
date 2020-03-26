//Use HTTP module to read dynamic query and print on Response

const http = require('http');
const url = require('url')

http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url, true)
    res.end(`Dynamic query: ${JSON.stringify(parsedUrl.query)}`);
}).listen(3000, 'localhost');

console.log('Server is running at port 3000');