const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url ,req.method);

  res.setHeader('./docs/views/index',(err,data) =>{
    if(err){
      console.log(err);
    res.end();
    }
    else{
      res.write(data);
      res.end();
    }
  });

  //set headers

res.setHeader('content-Type','text/plain');

res.write('evans welcome');
res.end();
});

server.listen(3000,'localhost', () =>{
  console.log('listerning for requests on port 3000');
});
