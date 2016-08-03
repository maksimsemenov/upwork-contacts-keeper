import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import './Search.css'

const Search = ({ searchQuery }) => {
  const handleSearchChange = (e) => {
    const path = {
      pathname: '/',
      query: { search: e.target.value }
    }
    browserHistory.push(path)
  }
  return (
    <input
      className='search'
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder='Search...' />
  )
}

Search.propTypes = {
  searchQuery: PropTypes.string,
}

export default Search
