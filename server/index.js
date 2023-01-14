
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a browser connected');

    socket.on('score:change', (team, action) => {
        console.log('score:change', team, action);
        io.emit('score:change', team, action);
    });

    socket.on('timeout:toggle', team => {
        console.log('timeout:toggle', team);
        io.emit('timeout:toggle', team);
    });

    socket.on('time:change', (action, value) => {
        console.log('time:change', action, value);
        io.emit('time:change', action, value);
    });

    socket.on('name:change', (team, value) => {
        console.log('name:change', team, value);
        io.emit('name:change', team, value);
    });

    socket.on('color:change', (team, value) => {
        console.log('color:change', team, value);
        io.emit('color:change', team, value);
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080'));
