import { useState } from 'react'
import { Container } from './styles'
import Lucas from '../../assets/Lucas.png'
function Hello
  () {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <section id='Hello'>

        <div id="paragraph">
          <h3>hi guys, i’m:</h3>
          <h1>Lucas Lopes</h1>
          <h2>FullStack Developer</h2>
          <p>A proactive person, always willing to learn and practice new technologies, also working in some awesome projects, which i want to share with you.</p>
        </div>
        <div id='perfil'>
          <img src={Lucas} alt="Lucas Lopes" />
          <div id="square">
            <div></div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Hello