import React from 'react'
import '../style.css'


const Pages = ({ children }) => {
  return (
      <ul className="pages">
        {children}
      </ul>
  )
}

export default Pages