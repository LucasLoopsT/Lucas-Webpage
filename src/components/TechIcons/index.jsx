import { Container } from './styles'

function TechIcons({imgurl, alt}) {
  return (
    <Container>
      <img src={imgurl} alt={alt}></img>
    </Container>
  )
}

export default TechIcons