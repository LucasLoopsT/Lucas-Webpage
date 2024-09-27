import { Container, InputWrapper, IconWrapper } from '../../components/Textarea/styles';
import React, { forwardRef } from 'react';

const Textarea = forwardRef(({ name, type, icon, placeholder }, ref) => {
  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <InputWrapper>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <textarea 
          type={type} 
          name={name} 
          id={name} 
          placeholder={placeholder}
          ref={ref}/>
      </InputWrapper>
    </Container>
  );
});

export default Textarea;
