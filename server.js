const express = require('express');
const http = require('http');
const socketID = require('socket.io');

const port = 4001;

const app = express();

const server = http.createServer(app);

const io = socketID(server);

io.on('connection', socket => {
  console.log('user connected');
  socket.on('update list', (list) => {
    console.log('List Updated' + list);
    io.sockets.emit('update list', list);
  });

  socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
