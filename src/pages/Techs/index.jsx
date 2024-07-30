import { useState } from 'react'
import { Container } from './styles'

function Techs
  () {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <section id="Techs">
        <ul id="Icons">
          <li><img src="https://skillicons.dev/icons?i=html" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=css" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=js" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=react" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=vite" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=styledcomponents" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=nodejs" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=express" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=mysql" alt="" /></li>
          <li><img src="https://skillicons.dev/icons?i=mongo" alt="" /></li>
        </ul>
      </section>
    </Container>
  )
}

export default Techs