import React from 'react'
import { Button } from 'reactstrap'
import keys from '../../../config'
import GithubIcon from '../../../img/icons/github.svg'
import GoogleIcon from '../../../img/icons/google.svg'

export const GithubButton = ({ color = 'default' }) => {
  return (
    <Button
      color={color}
      className="btn-neutral btn-icon"
      href={`${
        process.env.NODE_ENV === 'development'
          ? `${keys.dev.SERVER_URL}/auth/github`
          : `${keys.prod.SERVER_URL}/auth/github`
      }`}
    >
      <span className="btn-inner--icon">
        <img alt="Github" src={GithubIcon} />
      </span>
      <span className="btn-inner--text">Github</span>
    </Button>
  )
}

export const GoogleButton = ({ color = 'default' }) => {
  return (
    <Button
      color={color}
      className="btn-neutral btn-icon"
      href={`${
        process.env.NODE_ENV === 'development'
          ? `${keys.dev.SERVER_URL}/auth/google`
          : `${keys.prod.SERVER_URL}/auth/google`
      }`}
    >
      <span className="btn-inner--icon">
        <img alt="Google" src={GoogleIcon} />
      </span>
      <span className="btn-inner--text">Google</span>
    </Button>
  )
}
