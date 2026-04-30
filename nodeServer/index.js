const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

app.use(express.static(path.join(__dirname, '../')));

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('leave', users[socket.id]);
        delete users[socket.id];
    });
});

http.listen(process.env.PORT || 8000, () => {
    console.log('Server running on port', process.env.PORT || 8000);
});