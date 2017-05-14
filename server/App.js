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

  usernamesAction() {
    return this._wrapper(refreshFromServer(TYPE_USER, App.users.keys()))
  }

  chatroomsAction() {
    return this._wrapper(refreshFromServer(TYPE_ROOM, App.chatrooms))
  }

  _wrapper(action) {
    let wrapped = {
      send: () => {
        this.send(action)
        return wrapped
      },
      broadcast: () => {
        this.broadcast(action)
        return wrapped
      }
    }
    return wrapped
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
    // console.log('user %s logged in', username)

    this.username = username
    App.users.set(username, this)

    this.usernamesAction().send().broadcast()
    this.chatroomsAction().send()
  }

  addChatroom({ payload: chatroom }) {
    App.chatrooms.add(chatroom)
    this.chatroomsAction().send().broadcast()
  }

  dispatchMessage(action) {
    action.type = SRV_SEND_MESSAGE

    let { payload: { channel } } = action

    switch (channel.type) {
      case TYPE_USER:
        let userTo = App.users.get(channel.id)
        action.payload.channel.id = this.username
        return userTo.send(action)

      case TYPE_ROOM:
        return this.broadcast(action)

      default:
        console.log("Unknown channel type %s", channel.type)
    }
  }

  logout = () => {
    this.loggedIn = false

    App.users.delete(this.username)
    this.usernamesAction().broadcast()  // notify everyone user left
  }

}
