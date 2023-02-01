const express = require('express')
const app = express();
const port = process.env.PORT
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);

const io = new Server(httpServer,  {
    cors: {
        origin: ["http://127.0.0.1:5173", "http://localhost:5173", "https://dev-coin.web.app"]
    }});

    io.on('connection', (socket) => {
        console.log(`⚡: ${socket.id} user just connected!`);
        socket.on('transfer', (socket) => {
            io.emit('new-transfer', JSON.stringify(socket))
        });

        ;
    });

httpServer.listen(port);

