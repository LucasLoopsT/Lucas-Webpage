import { useState } from 'react'
import '../styles/Projects.css'

function Projects() {
  const [count, setCount] = useState(0)
  return (
    <>
      <section id="carrossel">
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
    </>
  )
}

export default Projects
