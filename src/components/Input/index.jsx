import { Container, InputWrapper, IconWrapper } from '../../components/Input/styles';

const Input = ({ name, type, icon, placeholder }) => {
  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <InputWrapper>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <input type={type} name={name} id={name} placeholder={placeholder}/>
      </InputWrapper>
    </Container>
  );
}

export default Input;
