const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


const port = process.env.PORT || 80;

server.listen(port, () => {  
  console.log('listening on *:'+ port);
});


app.use(express.static(__dirname+ '/template'));

app.get('/', (req, res) => {  
  res.sendFile(__dirname + '/template/index.html');
});


app.post('/objup', (req, res) => {  
  io.emit('objup');
  res.end('object is going up');
});

app.post('/objdown', (req, res) => {  
  io.emit('objdown');
  res.end('object is going down');
});
