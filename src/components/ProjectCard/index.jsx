import { useState } from 'react'
import { Container, ImageContainer } from './styles'

function ProjectCard({imgURL, projectName, description}) {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <ImageContainer id="img" imgURL={imgURL}/>
      <div id="details">
        <h2>{projectName}</h2>
        <p>{description}</p>
      </div>
    </Container>
  )
}

export default ProjectCard
