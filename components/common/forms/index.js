import React from 'react'

import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap'

export const InputField = ({
  type = 'text',
  placeholder = '',
  className = '',
  iconClassName = '',
}) => {
  return (
    <FormGroup className={className}>
      <InputGroup className="input-group-alternative">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className={iconClassName} />
          </InputGroupText>
        </InputGroupAddon>
        <Input type={type} placeholder={placeholder} />
      </InputGroup>
    </FormGroup>
  )
}
