import React from 'react'
import Content from './Content'
import './App.css'

const App = ({ children, ...rest }) => (
  <div className='app'>
    <div className='app_header'>
      <h1 className='app_title'>Contacts Keeper</h1>
    </div>
    <Content {...rest} />
    {children}
  </div>
)

export default App
