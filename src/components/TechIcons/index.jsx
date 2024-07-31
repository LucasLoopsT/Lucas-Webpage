import { Container } from './styles'

function TechIcons({imgURL, alt}) {
  return (
    <Container>
      <img src={imgURL} alt={alt}></img>
    </Container>
  )
}

export default TechIcons