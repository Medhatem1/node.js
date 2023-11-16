var greeting = 'Hello World'
console.log(greeting)
const http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000)
console.log('Server running at http://localhost:3000')
const fs=require('fs');
fs.writeFile('welcome.txt','hello node',function(err){
    if (err){
        return console.error(err)
    }
    console.log('data writing successfuly')
    fs.readFile('welcome.txt', function(err,data){
        if (err){
            return console.error(err);
        }
        console.log(data.toString())
    })
} )

const fs = require('fs');

fs.readFile('hello.txt', (err, data) => {
  if (err) { return console.error(err)};
  console.log('File content:', data);
});

