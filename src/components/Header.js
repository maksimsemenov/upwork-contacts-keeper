import React, { PropTypes } from 'react'
import Search from './Search'
import LinkButton from './LinkButton'
import './Header.css'

const Header = ({ searchQuery }) => (
  <div className='content-header'>
    <Search searchQuery={searchQuery} />
    <LinkButton to='addContact' appearance='default'>
      <svg className='content-header__add-icon' viewBox='15 12 70 82'>
        <path d='M67.822,50c0,0.908-0.736,1.644-1.644,1.644H51.644v14.534c0,0.908-0.736,1.644-1.644,1.644s-1.644-0.736-1.644-1.644  V51.644H33.822c-0.908,0-1.644-0.736-1.644-1.644s0.736-1.644,1.644-1.644h14.534V33.822c0-0.908,0.736-1.644,1.644-1.644  s1.644,0.736,1.644,1.644v14.534h14.534C67.086,48.356,67.822,49.092,67.822,50z M88.095,50c0,21.006-17.089,38.095-38.095,38.095  S11.905,71.006,11.905,50S28.994,11.905,50,11.905S88.095,28.994,88.095,50z M84.808,50c0-19.193-15.615-34.808-34.808-34.808  S15.192,30.807,15.192,50S30.807,84.808,50,84.808S84.808,69.193,84.808,50z'/>
      </svg>
      Add Contact
    </LinkButton>
  </div>
)
Header.propTypes = {
  searchQuery: PropTypes.string
}

export default Header
