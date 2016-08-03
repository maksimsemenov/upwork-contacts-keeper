import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import classNames from 'classnames'
import { getContacts } from '../reducer'
import { COLUMNS } from '../constants'
import './Contacts.css'

// Utils functions
const filterContacts = (contacts, query = '') => {
  if (query === '') {return contacts}
  return contacts.filter(contact =>
    (typeof contact.firstName === 'string' && contact.firstName.toLowerCase().includes(query.toLowerCase())) ||
    (typeof contact.lastName === 'string' && contact.lastName.toLowerCase().includes(query.toLowerCase())) ||
    (typeof contact.phone === 'string' && contact.phone.toLowerCase().includes(query.toLowerCase())) ||
    (typeof contact.email === 'string' && contact.email.toLowerCase().includes(query.toLowerCase())) ||
    (typeof contact.note === 'string' && contact.note.toLowerCase().includes(query.toLowerCase()))
  )
}
const sortContacts = (contacts, field = 'firstName', order = 'asc') => {
  return contacts.sort((a, b) => {
    switch (order) {
      case 'asc':
        return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0
      default:
        return a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0
    }
  }
)}

/*
 * Components
 */
const HeaderCell = ({ columnId, columnName, sorting, onClick }) => {
  const cellClasses = classNames({
    'contacts__header-cell': true,
    [`contacts__header-cell--${sorting}`]: sorting
  })
  return <th className={cellClasses} onClick={() => onClick(columnId)}>{columnName}</th>
}
HeaderCell.propTypes = {
  columnId: PropTypes.string.isRequired,
  columnName: PropTypes.string.isRequired,
  sorting: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

const Contacts = ({ contacts = [], onContactsSort, query }) => {
  const { search, sortingField, sortingOrder } = query
  const filteredContacts = filterContacts(contacts, search)
  const sortedContacts = sortContacts(filteredContacts, sortingField, sortingOrder)

  const handleContactSort = (field, sortingField, sortingOrder) => {
    const path = {
      pathname: '/',
      query: {
        ...query,
        sortingField: field,
        sortingOrder: field === sortingField ? sortingOrder === 'asc' ? 'desc' : 'asc' : 'asc'
      }
    }
    browserHistory.push(path)
  }
  return (
  <table className='contacts'>
    <thead className='contacts__header'>
      <tr className='contacts__header-row'>
        {COLUMNS.map((column, index) =>
          <HeaderCell
            {...column}
            key={index}
            sorting={column.columnId === sortingField ? sortingOrder : undefined}
            onClick={(field) => handleContactSort(field, sortingField, sortingOrder)} />
        )}
      </tr>
    </thead>
    <tbody className='contacts__body'>
      {sortedContacts.map(contact => (
        <tr key={contact.id} className='contacts__body-row'>
          <td className='contacts__body-cell contacts__body-cell--name'>{contact.firstName}</td>
          <td className='contacts__body-cell contacts__body-cell--name'>{contact.lastName}</td>
          <td className='contacts__body-cell contacts__body-cell--date'>{contact.dateOfBirth}</td>
          <td className='contacts__body-cell contacts__body-cell--phone'>{contact.phone}</td>
          <td className='contacts__body-cell contacts__body-cell--mail'>{contact.email}</td>
          <td className='contacts__body-cell contacts__body-cell--notes'>{contact.notes}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state)
})

export default connect(mapStateToProps)(Contacts)
