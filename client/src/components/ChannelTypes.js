import React from 'react'

import '../style.css'
import SimpleWrapper from './base/SimpleWrapper.js'


const Li = SimpleWrapper('li', {className: "channels"})
const Ul = SimpleWrapper('ul', {className: "channels"})

export default ({ children }) => <Li><Ul>{children}</Ul></Li>


