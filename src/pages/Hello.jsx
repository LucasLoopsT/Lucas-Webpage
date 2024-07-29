import { useState } from 'react'
import '../Styles/Hello.css'

function Hello
  () {
  const [count, setCount] = useState(0)
  return (
    <>
      <section id='Hello'>

        <div id="paragraph">
          <h3>hi guys, i’m:</h3>
          <h1>Lucas Lopes</h1>
          <h2>FullStack Developer</h2>
          <p>A proactive person, always willing to learn and practice new technologies, also working in some awesome projects, which i want to share with you.</p>
        </div>
        <div id='perfil'>
          <figure></figure>
          <div id="square"></div>
        </div>
      </section>
    </>
  )
}

export default Hello