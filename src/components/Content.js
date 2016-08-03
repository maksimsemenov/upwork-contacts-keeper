import React from 'react'
import Header from './Header'
import Contacts from './Contacts'
import './Content.css'

const Content = ({ fixed, location }) => (
  <div className={`content${fixed ? ' is-fixed' : ''}`}>
    <Header searchQuery={location.query ? location.query.search : ''} />
    <Contacts query={location.query} />
  </div>
)

export default Content
