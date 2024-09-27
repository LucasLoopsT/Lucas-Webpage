import { Container, InputWrapper, IconWrapper } from '../../components/Input/styles';
import React, { forwardRef } from 'react';

const Input = forwardRef(({ nameField, type, placeholder, icon, ...rest }, ref) => {
  return (
    <Container>
      <label htmlFor={nameField}>{nameField}</label>
      <InputWrapper>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <input 
          nameField={nameField}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </InputWrapper>
    </Container>
  );
});

export default Input;
