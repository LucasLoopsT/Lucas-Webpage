import { useState } from 'react'
import { Container, ImageContainer } from './styles'

function ProjectCard({imgurl, projectName, description}) {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <ImageContainer id="img" imgurl={imgurl}/>
      <div id="details">
        <h2>{projectName}</h2>
        <p>{description}</p>
      </div>
    </Container>
  )
}

export default ProjectCard
