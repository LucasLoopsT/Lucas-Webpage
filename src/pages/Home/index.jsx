import { useState } from 'react';
import { Container, Hello, Paragraph, Perfil, Tech, Projects, ViewMoreButton } from './styles';
import Header from '../../components/Header/index.jsx';
import TechIcons from '../../components/TechIcons/index.jsx';
import ProjectCard from '../../components/ProjectCard/index.jsx';
// import Footer from '../../components/Footer/index.jsx';

import Lucas from '../../assets/Lucas.png';

function Home() {
  // Lista de projetos (exemplo, substitua pelos seus dados reais)
  const allProjects = [
    {
      imgURL: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio",
      description: "Vite + React Single Page Application",
    },
    {
      imgURL: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 2",
      description: "Vite + React Single Page Application",
    },
    {
      imgURL: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 3",
      description: "Vite + React Single Page Application",
    },
    {
      imgURL: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 4",
      description: "Vite + React Single Page Application",
    },
    {
      imgURL: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 5",
      description: "Vite + React Single Page Application",
    },
    {
      imgURL: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 6",
      description: "Vite + React Single Page Application",
    },
  ];

  // Estado para controlar se todos os projetos devem ser mostrados
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Função para alternar o estado de exibição dos projetos
  const handleViewMore = () => {
    setShowAllProjects(prev => !prev);
  };

  // Determina os projetos a serem exibidos
  const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, 3);

  return (
    <Container>
      <Header />

      <Hello>
        <Paragraph>
          <h3>hi guys, i’m:</h3>
          <h1>Lucas Lopes</h1>
          <h2>FullStack Developer</h2>
          <p>A proactive person, always willing to learn and practice new technologies, also working in some awesome projects, which I want to share with you.</p>
        </Paragraph>
        <Perfil>
          <img src={Lucas} alt="Lucas Lopes" />
          <div id="square">
            <div></div>
          </div>
        </Perfil>
      </Hello>

      <Tech>
        <ul>
          <TechIcons imgURL={"https://skillicons.dev/icons?i=html"} alt={"HTML"} />
          <TechIcons imgURL={"https://skillicons.dev/icons?i=js"} alt={"HTML"} />
          <TechIcons imgURL={"https://skillicons.dev/icons?i=react"} alt={"HTML"} />
          <TechIcons imgURL={"https://skillicons.dev/icons?i=vite"} alt={"HTML"} />
          <TechIcons imgURL={"https://skillicons.dev/icons?i=styledcomponents"} alt={"HTML"} />
          <TechIcons imgURL={"https://skillicons.dev/icons?i=nodejs"} alt={"HTML"} />
          <TechIcons imgURL={"https://skillicons.dev/icons?i=express"} alt={"HTML"} />
          <TechIcons imgURL={"https://skillicons.dev/icons?i=mysql"} alt={"HTML"} />
          <TechIcons imgURL={"https://skillicons.dev/icons?i=mongo"} alt={"HTML"} />
        </ul>
      </Tech>

      <Projects>
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            imgURL={project.imgURL}
            projectName={project.projectName}
            description={project.description}
          />
        ))}

        {allProjects.length > 3 && (
          <ViewMoreButton onClick={handleViewMore}>
            {showAllProjects ? "VER MENOS" : "VER MAIS"}
          </ViewMoreButton>
        )}
      </Projects>
    </Container>

  );
}

export default Home;
