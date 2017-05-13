import express from 'express'
import { createServer } from 'http'
import socketio from 'socket.io'

import { SET_USERNAME, SEND_MESSAGE, SRV_SEND_MESSAGE } from './client/src/actions.js'


const app = express()
const server = createServer(app)
const io = socketio(server)
const port = process.env.PORT || 3000

server.listen(port, () => console.log('Server listening at port %d', port))


class App {
  static users = {}
  static chatRooms = ['main']
  loggedIn = false

  constructor(socket) {
    this.socket = socket
    socket.on('action', this.dispatch)
  }

  dispatch = action => {
    switch (action.type) {
      case SET_USERNAME:
        return this.login(action.username)

      case SEND_MESSAGE:
        action.type = SRV_SEND_MESSAGE
        return this.broadcast(action)

      default:
        console.log("Unknown action type %s", action.type)
    }
  }

  login(username) {
    if (this.loggedIn) return

    console.log(`user ${username} logged in`)

    this.username = username
    this.loggedIn = true
    App.users[username] = this

    // console.log(Reflect.ownKeys(App.users))
    // this.broadcast(refreshUserlist(Reflect.ownKeys(App.users)))
  }

  send(action) {
    this.socket.emit('action', action)
  }

  broadcast(action) {
    this.socket.broadcast.emit('action', action)
  }
}

io.on('connection', socket => new App(socket))
