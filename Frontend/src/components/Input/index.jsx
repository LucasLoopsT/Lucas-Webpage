import { Container, InputWrapper, IconWrapper } from '../../components/Input/styles';
import React, { forwardRef } from 'react';

const Input = forwardRef(({ name, type, value, onChange, placeholder, icon, ...rest }, ref) => {
  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <InputWrapper>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <input 
          name={name}
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
