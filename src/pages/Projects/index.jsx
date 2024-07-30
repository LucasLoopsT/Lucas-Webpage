import { useState } from 'react'
import { Container } from './styles'

function Projects() {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <section id="Projects">
        <article>
          <figure></figure>
          <div>
            <h2>Projeto1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </article>
        <article>
          <figure></figure>
          <div>
            <h2>Projeto2</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </article>
        <article>
          <figure></figure>
          <div>
            <h2>Projeto3</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </article>
      </section>
    </Container>
  )
}

export default Projects
