const http = require('http')
const server = http.createServer()
const { Server } = require('socket.io')
const io = new Server(server)