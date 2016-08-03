import { combineReducers } from 'redux'
import { ADD_CONTACT } from '../constants'

const contacts = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.contact]
    default:
      return state
  }
}

const contactsKeeper = combineReducers({
  contacts
})

export default contactsKeeper

/*
 * Selectors
 */
export const getContacts = state => state.contacts
