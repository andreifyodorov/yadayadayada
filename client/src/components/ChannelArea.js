import React from 'react'

import '../style.css'
import SimpleWrapper from './base/SimpleWrapper.js'


const ChannelArea = SimpleWrapper('li', {className: "channelArea"})

export default ({ children }) => (
  <ChannelArea>
    <div className="header">{"Channels"}</div>
    {children}
  </ChannelArea>
)


