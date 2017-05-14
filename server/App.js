import {
  TYPE_USER,
  TYPE_ROOM,

  SET_USERNAME,
  ADD_CHATROOM,
  SEND_MESSAGE,

  SRV_SEND_MESSAGE,
  SRV_REFRESH,

  sendMessageFromServer,
  refreshFromServer,

  DEFAULT_CHANNEL
} from '../client/src/actions.js'


export default class App {
  static users = new Map()
  static chatrooms = new Set([DEFAULT_CHANNEL.id])

  loggedIn = false
  username = undefined


  constructor(socket) {
    this.socket = socket
    socket.on('action', this.dispatchAction)
    socket.on('disconnect', this.logout)
  }

  send(action) {
    // console.log("sent to user %s: ", this.username, action)
    this.socket.emit('action', action)
  }

  broadcast(action) {
    // console.log("sent to everyone but %s: ", this.username, action)
    this.socket.broadcast.emit('action', action)
  }

  dispatchAction = action => {
    switch (action.type) {
      case SET_USERNAME:
        return this.login(action)

      case ADD_CHATROOM:
        return this.addChatroom(action)

      case SEND_MESSAGE:
        return this.dispatchMessage(action)

      default:
        console.log("Unknown action type %s", action.type)
    }
  }

  login({ payload: username }) {
    if (this.loggedIn) return

    this.loggedIn = true
    console.log(`user ${username} logged in`)

    this.username = username
    App.users.set(username, this)

    // this.nodelist.send().broadcast()
    let nodelist = refreshFromServer(TYPE_USER, App.users.keys())
    this.send(nodelist)
    this.broadcast(nodelist)

    // this.echolist.send()
    let echolist = refreshFromServer(TYPE_ROOM, App.chatrooms)
    this.send(echolist)
  }

  addChatroom({ payload: chatroom }) {
    this.chatrooms.add(chatroom)

    // this.echolist.send().broadcast()
    let echolist = refreshFromServer(TYPE_ROOM, App.users.keys())
    this.send(echolist)
    this.broadcast(echolist)
  }

  dispatchMessage(action) {
    action.type = SRV_SEND_MESSAGE

    let { payload: { channel } } = action

    switch (channel.type) {
      case TYPE_USER:
        let userTo = channel.id
        message.channel.id = this.username
        return App.users[userTo].send(action)

      case TYPE_ROOM:
        return this.broadcast(action)

      default:
        console.log("Unknown channel type %s", channel.type)
    }
  }

  logout = () => {
    this.loggedIn = false

    App.users.delete(this.username)
    // notify everyone we left
    this.broadcast(refreshFromServer(TYPE_USER, App.users.keys()))  // this.nodelist.broadcast()
  }

}
