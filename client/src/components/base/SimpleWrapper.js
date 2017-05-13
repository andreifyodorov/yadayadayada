import React from 'react'


export default
  (el, options) =>
      ({ children }) =>
         React.createElement(el, options, children)
