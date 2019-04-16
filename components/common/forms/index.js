import React from 'react'

import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap'

export const InputField = ({
  type = 'text',
  className = '',
  placeholder = '',
  iconClassName = '',
  ...rest
}) => {
  return (
    <FormGroup className={className}>
      <InputGroup className="input-group-alternative">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className={iconClassName} />
          </InputGroupText>
        </InputGroupAddon>
        <input
          type={type}
          placeholder={placeholder}
          className="form-control"
          {...rest}
        />
      </InputGroup>
    </FormGroup>
  )
}
