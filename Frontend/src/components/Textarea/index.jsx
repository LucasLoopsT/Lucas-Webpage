import { Container, InputWrapper, IconWrapper } from '../../components/Textarea/styles';
import React, { forwardRef } from 'react';

const Textarea = forwardRef(({ nameField, type, icon, placeholder, ...rest }, ref) => {
  return (
    <Container>
      <label htmlFor={nameField}>{nameField}</label>
      <InputWrapper>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <textarea 
          name={nameField} 
          id={nameField} 
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </InputWrapper>
    </Container>
  );
});

export default Textarea;
