import React from 'react'
import '../style.css'


const Chat = ({ children }) => {
  return (
      <li className="chat page">
        {children}
      </li>
  )
}

export default Chat