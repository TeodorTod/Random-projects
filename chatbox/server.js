const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('message', (msg) => {
        console.log('Message received:', msg);
        // Broadcast the message to all clients, including the sender
        io.emit('message', msg);
    });
});



http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
