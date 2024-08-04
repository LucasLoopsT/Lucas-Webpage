import { useEffect, useState } from 'react';
import { Container, Hello, Paragraph, Perfil, Tech, Projects, Contact } from './styles';
import Header from '../../components/Header/index.jsx';
import TechIcons from '../../components/TechIcons/index.jsx';
import ProjectCard from '../../components/ProjectCard/index.jsx';
import Footer from '../../components/Footer/index.jsx';

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

      <Hello className='Section'>
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

      <Tech className='Section'>
        <ul>
          <TechIcons imgurl={"https://skillicons.dev/icons?i=html"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=css"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=js"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=react"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=vite"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=styledcomponents"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=py"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=cs"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=nodejs"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=express"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=mysql"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=mongo"} sizeicon={60} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=git"} sizeicon={60} alt={"HTML"} />
        </ul>
      </Tech>

      <Projects className='Section'>
        <div id="P_title">
          <h2>Projects</h2>
          <p>Check it out some projects that i made or participate! I'm sure you will enjoy.</p>
        </div>
        <hr/>
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {allProjects.map((project) => (
            <SwiperSlide key={project.id}>
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
      
      <Contact className='Section'>
        <h2>Contact</h2>
        <ul>
          <TechIcons imgurl={"https://skillicons.dev/icons?i=instagram"} sizeicon={100} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=linkedin"} sizeicon={100} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=gmail"} sizeicon={100} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=github"} sizeicon={100} alt={"HTML"} />
        </ul>
      </Contact>

      <Footer/>
      
    </Container>
  );
}

export default Home;
