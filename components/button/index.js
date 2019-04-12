import React from 'react'
import { Button } from 'reactstrap'

export const GithubButton = ({ href = '', color = 'default' }) => {
  return (
    <Button className="btn-neutral btn-icon" color={color} href={href}>
      <span className="btn-inner--icon">
        <img alt="..." src={require('../../img/icons/github.svg')} />
      </span>
      <span className="btn-inner--text">Github</span>
    </Button>
  )
}

export const GoogleButton = ({ href = '', color = 'default' }) => {
  return (
    <Button className="btn-neutral btn-icon" color={color} href={href}>
      <span className="btn-inner--icon">
        <img alt="Google" src={require('../../img/icons/google.svg')} />
      </span>
      <span className="btn-inner--text">Google</span>
    </Button>
  )
}
