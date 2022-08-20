const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("express"));

// default URL for website
// app.use('/', function(req,res){
//    res.sendFile(path.join(__dirname+'/express/index.js'));
//  });

  function requestListener(req, res) {
    let forwarded = req.headers['x-forwarded-for']
    let ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    res.writeHead(200);
    res.end(ip);
  }

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

requestListener();

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);
