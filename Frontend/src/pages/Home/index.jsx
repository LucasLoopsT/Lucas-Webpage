import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { findAll } from '../../services/projectServices.js';
import { Container, Hello, Paragraph, Perfil, Tech, Projects, Contact } from './styles';
import TechIcons from '../../components/TechIcons/index.jsx';
import ProjectCard from '../../components/ProjectCard/index.jsx';
import Preview_Default from '../../assets/Preview_Default.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import Lucas from '../../assets/Lucas.png';

function Home() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  const findAllProjects = async () => {
    try {
      const response = await findAll();
      setProjects(response.data)
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.log(error.response.data.message);
      } else {
        console.log("Erro ao buscar projetos.");
      }
    }
  };

  const openProject = (projectId) => {
    Cookies.set('projectId', projectId, { expires: 1 });
    navigate('/projeto');
  }

  // Reponsive Slider Config
  const [slidePerView, setSlidePerView] = useState(2)

  useEffect(() => {

    function handleRecize() {
      if (window.innerWidth < 2000) {
        setSlidePerView(2)
      } if (window.innerWidth < 780) {
        setSlidePerView(1)
      }
    }
    findAllProjects();

    handleRecize();

    window.addEventListener("resize", handleRecize)
    return () => {
      window.removeEventListener("resize", handleRecize)
    }

  }, [])

  return (
    <Container>
      <Hello className='Section' id="about">
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
          <TechIcons imgurl={"https://skillicons.dev/icons?i=html"} sizeicon={60} title={"HTML"} alt={"HTML"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=css"} sizeicon={60} title={"css"} alt={"CSS"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=js"} sizeicon={60} title={"js"} alt={"Javascript"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=react"} sizeicon={60} title={"react"} alt={"react"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=vite"} sizeicon={60} title={"vite"} alt={"vite"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=styledcomponents"} sizeicon={60} title={"styledcomponents"} alt={"styledcomponents"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=py"} sizeicon={60} title={"python"} alt={"python"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=cs"} sizeicon={60} title={"C#"} alt={"C#"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=nodejs"} sizeicon={60} title={"NodeJS"} alt={"NodeJS"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=express"} sizeicon={60} title={"Express"} alt={"Express"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=mysql"} sizeicon={60} title={"MySQL"} alt={"MySQL"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=mongo"} sizeicon={60} title={"MongoDB"} alt={"MongoDB"} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=git"} sizeicon={60} title={"Git"} alt={"Git"} />
        </ul>
      </Tech>

      <Projects className='Section' id="projects">
        <div className="title">
          <h2>Projects</h2>
          <p>Check it out some projects that i made or participate! I'm sure you will enjoy.</p>
        </div>
        <hr />
        {projects.length > 0 ? (
          <Swiper
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            navigation
          >
            {projects.map((project) => (
              <SwiperSlide>
                <ProjectCard
                  key={project._id}
                  onClick={() => openProject(project._id)}
                  projectName={project.name}
                  imgurl={project.preview}
                  description={project.shortDescription}
                  alt={project.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            navigation
            id="swiper-loading"
          >
            <SwiperSlide id="swiper-slide-loading">
              <ProjectCard
                projectName={"Loading ⟳"}
                imgurl={Preview_Default}
                description={"Searching projects..."}
                alt={"↻"}
                id="loading-card"
              />
            </SwiperSlide>
          </Swiper>
        )}
      </Projects>

      <Contact className='Section' id="contact">
        <div className="title">
          <h2>Contact</h2>
          <p>These are social midias and other websites you can find me!</p>
        </div>
        <hr />
        <div>
          <a href='https://www.instagram.com/lucas_loopst/' target='_blank'>
            <div className="socialMidia">
              <TechIcons imgurl={"https://skillicons.dev/icons?i=instagram"} sizeicon={240} title={"Instagram"} alt={"Instagram"} />
              <div className='midiaText'>
                <p>&lt;p&gt;</p>
                <p>I’m low-profile, but you can still find me there.</p>
                <p>&lt;/p&gt;</p>
                <h3>Instagram</h3>
              </div>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/lucas-lopes-781b39263/' target='_blank'>
            <div className="socialMidia">
              <TechIcons imgurl={"https://skillicons.dev/icons?i=linkedin"} sizeicon={240} title={"Linkedin"} alt={"Linkedin"} />
              <div className='midiaText'>
                <p>&lt;p&gt;</p>
                <p>Let's connect professionally!</p>
                <p>&lt;/p&gt;</p>
                <h3>Linkedin</h3>
              </div>
            </div>
          </a>
          <a href='mailto:lucasllopes100@gmail.com' target='_blank'>
            <div className="socialMidia">
              <TechIcons imgurl={"https://skillicons.dev/icons?i=gmail"} sizeicon={240} title={"Gmail"} alt={"Gmail"} />
              <div className='midiaText'>
                <p>&lt;p&gt;</p>
                <p>Reach out for collaborations via email.</p>
                <p>&lt;/p&gt;</p>
                <h3>Gmail</h3>
              </div>
            </div>
          </a>
          <a href='https://github.com/LucasLoopsT' target='_blank'>
            <div className="socialMidia">
              <TechIcons imgurl={"https://skillicons.dev/icons?i=github"} sizeicon={240} title={"Github"} alt={"Github"} />
              <div className='midiaText'>
                <p>&lt;p&gt;</p>
                <p>Check out my projects and contributions.</p>
                <p>&lt;/p&gt;</p>
                <h3>Github</h3>
              </div>
            </div>
          </a>
        </div>
      </Contact>
    </Container>
  );
}

export default Home;
