import { useEffect, useState } from 'react';
import { Container, Hello, Paragraph, Perfil, Tech, Projects, ViewMoreButton } from './styles';
import Header from '../../components/Header/index.jsx';
import TechIcons from '../../components/TechIcons/index.jsx';
import ProjectCard from '../../components/ProjectCard/index.jsx';
// import Footer from '../../components/Footer/index.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';

import Lucas from '../../assets/Lucas.png';

function Home() {
  // Lista de projetos (futuramente dados virão de um banco de dados)
  const allProjects = [
    {
      id: 1,
      imgurl: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 1",
      description: "Vite + React Single Page Application",
    },
    {
      id: 2,
      imgurl: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 2",
      description: "Vite + React Single Page Application",
    },
    {
      id: 3,
      imgurl: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 3",
      description: "Vite + React Single Page Application",
    },
    {
      id: 4,
      imgurl: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 4",
      description: "Vite + React Single Page Application",
    },
    {
      id: 5,
      imgurl: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 5",
      description: "Vite + React Single Page Application",
    },
    {
      id: 6,
      imgurl: "https://www.syntonize.com/wp-content/uploads/2021/02/React-Syntonize.png",
      projectName: "Portfolio 6",
      description: "Vite + React Single Page Application",
    },

  ];

  // Reponsive Slider Config
  const [slidePerView, setSlidePerView] = useState(3)

  useEffect(() => {

    function handleRecize() {
      // Projects Display
      if (window.innerWidth < 2000) {
        setSlidePerView(3)
      }
      if (window.innerWidth < 1000) {
        setSlidePerView(2)
      } if (window.innerWidth < 700) {
        setSlidePerView(1)
      }
    }

    handleRecize()

    window.addEventListener("resize", handleRecize)
    return () => {
      window.removeEventListener("resize", handleRecize)
    }
  }, [])

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
          <TechIcons imgurl={"https://skillicons.dev/icons?i=html"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=css"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=js"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=react"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=vite"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=styledcomponents"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=py"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=cs"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=nodejs"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=express"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=mysql"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=mongo"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=github"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=git"} alt={"HTML"} />
        </ul>
      </Tech>

      <Projects>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {allProjects.map((project) => (
            <SwiperSlide key={project.id} className='Card_flex'>
              <ProjectCard
                imgurl={project.imgurl}
                projectName={project.projectName}
                description={project.description}
                alt={project.projectName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Projects>
    </Container>
  );
}

export default Home;
