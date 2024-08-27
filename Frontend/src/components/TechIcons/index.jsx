import { Container } from './styles'

function TechIcons({imgurl, sizeicon, alt, title}) {
  return (
    <Container sizeicon={sizeicon} title={title}>
      <img src={imgurl} alt={alt}></img>
    </Container>
  )
}

export default TechIcons