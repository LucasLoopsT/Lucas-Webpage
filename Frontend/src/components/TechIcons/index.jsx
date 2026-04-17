import { Container } from "./styles";

function TechIcons({ imgurl, bgColor, bgColorHover, sizeicon, alt, title }) {
  const bg1 = bgColor ? bgColor : "transparent";
  const bg2 = bgColorHover ? bgColorHover : "transparent";
  return (
    <Container
      sizeicon={sizeicon}
      title={title}
      bgColor={bg1}
      bgColorHover={bg2}
    >
      <img src={imgurl} alt={alt}></img>
    </Container>
  );
}

export default TechIcons;
