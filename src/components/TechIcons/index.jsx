import { Container } from './styles'

function TechIcons({imgurl, sizeicon, alt}) {
  return (
    <Container sizeicon={sizeicon}>
      <img src={imgurl} alt={alt}></img>
    </Container>
  )
}

export default TechIcons