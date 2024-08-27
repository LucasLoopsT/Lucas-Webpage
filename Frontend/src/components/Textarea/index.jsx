import { Container, InputWrapper, IconWrapper } from '../../components/Textarea/styles';

const Textarea = ({ name, type, icon, placeholder }) => {
  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <InputWrapper>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <textarea type={type} name={name} id={name} placeholder={placeholder}/>
      </InputWrapper>
    </Container>
  );
}

export default Textarea;
