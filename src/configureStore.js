import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
import contactsKeeper from './reducer'

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(contactsKeeper, persistedState)

  store.subscribe(throttle(() => {
    saveState({
      contacts: store.getState().contacts
    })
  }), 2000)

  return store
}
export default configureStore
