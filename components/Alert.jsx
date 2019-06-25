import React from 'react'
import { Alert as Al } from 'reactstrap'

const Alert = ({ type = 'default', text }) => (
  <Al className={`alert-${type}`}>{text}</Al>
)

export default Alert
