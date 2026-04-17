import { Container, ImageContainer } from "./styles";

function ProjectCard({ imgurl, projectName, description, ...rest }) {
  return (
    <Container {...rest}>
      <ImageContainer id="img" imgurl={imgurl} />
      <div id="details">
        <div className="projectName">
          <h2>{projectName}</h2>
          <h2 id="spin">{projectName == "Loading" ? "↻" : null}</h2>
        </div>
        <p>{description}</p>
      </div>
    </Container>
  );
}

export default ProjectCard;
