const express = require('express');
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const next = require('next')

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const nextHandler = nextApp.getRequestHandler();

var x = 0;

setInterval(() => {
    io.emit('event', x++)
}, 1000);

nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
        return nextHandler(req, res)
    })

    server.listen(3000, () => {
        console.log('> listen socket on port 3000')
    });
})



