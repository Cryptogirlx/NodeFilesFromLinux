

const http = require('http');

const PORT = 8000;

const fs = require('fs')


function SayHelloElf(req,res){

    res.setHeader('Content-type','text/html')

    if(req.url === "/"){
        res.statusCode = 200;
        res.end('<h2>Yo, Im Zsofie </h2>')
    } 
    else if(req.url === "/about") {
        res.statusCode = 200;
        res.end('<h1>Im cool</h1>') 
    } 
    else { 
        res.statusCode = 404;
        res.end('<h2>Page not found</h2>') 

    }
}
const server = http.createServer(SayHelloElf);

server.listen(PORT);

