import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { addContact } from '../actions'
import LinkButton from './LinkButton'
import './NewContact.css'
import './Buttons.css'

class NewContact extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this._handleSubmit.bind(this)
    this.handleBlur = this._handleBlur.bind(this)
    this.state = {
      firstName: false,
      lastName: false
    }
  }
  _handleSubmit() {
    if (this.firstName.value === '' || this.lastName.value === '') {
      if (this.firstName.value === '') {this.setState({ firstName: true })}
      if (this.lastName.value === '') {this.setState({ lastName: true })}
    } else {
      if (this.firstName.value !== '') {this.firstName.classList.remove('is-empty')}
      if (this.lastName.value !== '') {this.lastName.classList.remove('is-empty')}
      const newContact = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        dateOfBirth: this.dateOfBirth.value,
        phone: this.phone.value,
        email: this.email.value,
        notes: this.notes.value
      }
      this.props.dispatch(addContact(newContact))
      browserHistory.push('/')
    }
  }
  _handleBlur(e) {
    this.setState({
      [e.target.id]: e.target.value === ''
    })
  }
  render() {
    return (
      <div className='modal'>
        <div className='new-contact'>
          <div className='new-contact__header'>
            <h2 className='new-contact__title'>New Contact</h2>
            <LinkButton to='/' appearance='close'></LinkButton>
          </div>
          <div className='new-contact__body'>
            <form id='newContact'>
              <div className='controls-row'>
                <div className='controls-group controls-group--narrow'>
                  <label className='controls__label controls__label--required' htmlFor='firstName'>First Name</label>
                  <input
                    className={`controls__textfield${this.state.firstName ? ' is-empty' : ''}`}
                    placeholder='First Name'
                    ref={(c) => {this.firstName = c}}
                    type='text'
                    id='firstName'
                    name='firstName'
                    required={true}
                    autoFocus={true}
                    onBlur={this.handleBlur}
                  />
                </div>
                <div className='controls-group controls-group--narrow'>
                  <label className='controls__label controls__label--required' htmlFor='lastName'>Last Name</label>
                  <input
                    className={`controls__textfield${this.state.lastName ? ' is-empty' : ''}`}
                    placeholder='Last Name'
                    ref={(c) => {this.lastName = c}}
                    type='text'
                    id='lastName'
                    name='lastName'
                    required={true}
                    onBlur={this.handleBlur}
                  />
                </div>
              </div>
              <div className='controls-row'>
                <div className='controls-group controls-group--narrow'>
                  <label className='controls__label' htmlFor='phone'>Phone</label>
                  <input
                    className='controls__textfield'
                    placeholder='Phone'
                    ref={(c) => {this.phone = c}}
                    type='phone'
                    id='phone'
                    name='phone'
                  />
                </div>
                <div className='controls-group controls-group--narrow'>
                  <label className='controls__label' htmlFor='email'>Email</label>
                  <input
                    className='controls__textfield'
                    placeholder='example@example.com'
                    ref={(c) => {this.email = c}}
                    type='email'
                    id='email'
                    name='email'
                  />
                </div>
              </div>
              <div className='controls-row'>
                <div className='controls-group controls-group--narrow'>
                  <label className='controls__label' htmlFor='dateOfBirth'>Birth Date</label>
                  <input
                    className='controls__textfield'
                    ref={(c) => {this.dateOfBirth = c}}
                    type='date'
                    id='dateOfBirth'
                    name='dateOfBirth'
                  />
                </div>
              </div>
              <div className='controls-row'>
                <div className='controls-group controls-group--wide'>
                  <label className='controls__label' htmlFor='notes'>Notes</label>
                  <textarea
                    className='controls__textfield'
                    placeholder='Your notes ...'
                    ref={(c) => {this.notes = c}}
                    rows={5}
                    id='notes'
                    name='notes'
                  />
                </div>
              </div>
            </form>
          </div>
          <div className='new-contact__footer'>
            <button className='button' onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

NewContact.propTypes = {
  onSubmit: PropTypes.func
}

export default connect()(NewContact)
