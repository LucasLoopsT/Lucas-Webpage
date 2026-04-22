import { Container, ImageContainer } from "./styles";

function ProjectCard({
  imgurl,
  projectName,
  description,
  isLoading,
  ...rest
}) {
  return (
    <Container {...rest}>
      <ImageContainer id="img" imgurl={imgurl} />
      <div id="details">
        {isLoading ? (
          <div id="spin">
            <h2>↻</h2>
          </div>
        ) : (
          <>
            <h2>{projectName}</h2>
            <p>{description}</p>
          </>
        )}
      </div>
    </Container>
  );
}

export default ProjectCard;
