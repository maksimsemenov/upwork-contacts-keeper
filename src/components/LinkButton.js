import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import './Buttons.css'

const LinkButton = ({ children, appearance, ...rest }) => {
  const btnClases = classNames({
    'button': true,
    [`button--${appearance}`]: appearance
  })
  return (
  <Link {...rest} style={{ lineHeight: 0 }}>
    <button className={btnClases}>{children}</button>
  </Link>
)}

LinkButton.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  appearance: PropTypes.oneOf(['default', 'close', 'cancel']),
  children: PropTypes.node
}

export default LinkButton
