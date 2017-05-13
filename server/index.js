import express from 'express'
import { createServer } from 'http'
import socketio from 'socket.io'

import serverApp from './App.js'


const app = express()
const server = createServer(app)
const port = process.env.PORT || 3000

const io = socketio(server)
io.on('connection', socket => new serverApp(socket))

server.listen(port, () => console.log('Server listening at port %d', port))
