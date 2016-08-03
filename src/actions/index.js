import { ADD_CONTACT } from '../constants'
import { v4 } from 'node-uuid'

export const addContact = newContact => ({
  type: ADD_CONTACT,
  contact: { id: v4(), ...newContact }
})
