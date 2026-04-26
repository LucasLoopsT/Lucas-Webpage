import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

import { findAll } from "../../services/projectServices.js";
import { getLocalizedProjectTexts } from "../../utils/projectLocale.js";
import {
  Container,
  Hello,
  Paragraph,
  Perfil,
  Tech,
  Projects,
  Contact,
} from "./styles";
import TechIcons from "../../components/TechIcons/index.jsx";
import ProjectCard from "../../components/ProjectCard/index.jsx";
import Preview_Default from "../../assets/Preview_Default.png";

import { Swiper, SwiperSlide } from "swiper/react";

import Lucas from "../../assets/Lucas.png";

function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  const findAllProjects = async () => {
    try {
      const response = await findAll();
      setProjects(response.data);
    } catch (error) {
      return;
    }
  };

  const openProject = (projectId) => {
    Cookies.set("projectId", projectId, { expires: 1 });
    navigate("/projeto");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Reponsive Slider Config
  const [slidePerView, setSlidePerView] = useState(2);

  useEffect(() => {
    function handleRecize() {
      if (window.innerWidth < 2000) {
        setSlidePerView(2);
      }
      if (window.innerWidth < 780) {
        setSlidePerView(1);
      }
    }
    findAllProjects();

    handleRecize();

    window.addEventListener("resize", handleRecize);
    return () => {
      window.removeEventListener("resize", handleRecize);
    };
  }, []);

  return (
    <Container>
      <Hello className="Section" id="about">
        <Paragraph>
          <h3>{t("home.hi")}</h3>
          <h1>Lucas Lopes</h1>
          <h2>{t("home.role")}</h2>
          <p>{t("home.intro")}</p>
        </Paragraph>
        <Perfil>
          <img src={Lucas} alt="Lucas Lopes" />
          <div id="square">
            <div></div>
          </div>
        </Perfil>
      </Hello>

      <Tech className="Section">
        <ul>
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=html"}
            sizeicon={60}
            title={"HTML"}
            alt={"HTML"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=css"}
            sizeicon={60}
            title={"CSS"}
            alt={"CSS"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=js"}
            sizeicon={60}
            title={"Javascript"}
            alt={"Javascript"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=react"}
            sizeicon={60}
            title={"React"}
            alt={"React"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=vite"}
            sizeicon={60}
            title={"Vite"}
            alt={"Vite"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=angular"}
            sizeicon={60}
            title={"Angular"}
            alt={"Angular"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=tailwind"}
            sizeicon={60}
            title={"Tailwind"}
            alt={"Tailwind"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=styledcomponents"}
            sizeicon={60}
            title={"Styledcomponents"}
            alt={"Styledcomponents"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=py"}
            sizeicon={60}
            title={"Python"}
            alt={"Python"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=java"}
            sizeicon={60}
            title={"Java"}
            alt={"Java"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=spring"}
            sizeicon={60}
            title={"SpringBoot"}
            alt={"SpringBoot"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=nodejs"}
            sizeicon={60}
            title={"NodeJS"}
            alt={"NodeJS"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=express"}
            sizeicon={60}
            title={"Express"}
            alt={"Express"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=aws"}
            sizeicon={60}
            title={"AWS"}
            alt={"AWS"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=mysql"}
            sizeicon={60}
            title={"MySQL"}
            alt={"MySQL"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=postgres"}
            sizeicon={60}
            title={"PostgreSQL"}
            alt={"PostgreSQL"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=mongo"}
            sizeicon={60}
            title={"MongoDB"}
            alt={"MongoDB"}
          />
          <TechIcons
            imgurl={"https://img.icons8.com/color/512/cursor-ai.png"}
            sizeicon={60}
            bgColor={"darkslategray"}
            bgColorHover={"black"}
            title={"Cursor"}
            alt={"Cursor"}
          />
          <TechIcons
            imgurl={
              "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/lovable-color.png"
            }
            sizeicon={60}
            bgColor={"darkslategray"}
            bgColorHover={"white"}
            title={"Lovable"}
            alt={"Lovable"}
          />
          <TechIcons
            imgurl={"https://skillicons.dev/icons?i=git"}
            sizeicon={60}
            title={"Git"}
            alt={"Git"}
          />
        </ul>
      </Tech>

      <Projects className="Section" id="projects">
        <div className="title">
          <h2>{t("home.projectsTitle")}</h2>
          <p>{t("home.projectsSubtitle")}</p>
        </div>
        <hr />
        {projects.length > 0 ? (
          <Swiper
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            navigation
          >
            {projects.map((project) => {
              const loc = getLocalizedProjectTexts(project, i18n.language);
              return (
                <SwiperSlide key={project._id}>
                  <ProjectCard
                    onClick={() => openProject(project._id)}
                    projectName={loc.name}
                    imgurl={project.preview}
                    description={loc.shortDescription}
                    alt={loc.name}
                  />
                </SwiperSlide>
              );
            })}
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
                isLoading
                projectName={t("home.loading")}
                imgurl={Preview_Default}
                description={t("home.searchingProjects")}
                alt={"↻"}
                id="loading-card"
              />
            </SwiperSlide>
          </Swiper>
        )}
      </Projects>

      <Contact className="Section" id="contact">
        <div className="title">
          <h2>{t("home.contactTitle")}</h2>
          <p>{t("home.contactSubtitle")}</p>
        </div>
        <hr />
        <div>
          <a href="https://www.instagram.com/lucas_loopst/" target="_blank">
            <div className="socialMidia">
              <TechIcons
                imgurl={"https://skillicons.dev/icons?i=instagram"}
                sizeicon={240}
                title={"Instagram"}
                alt={"Instagram"}
              />
              <div className="midiaText">
                <p className="tag">&lt;p&gt;</p>
                <p>{t("home.instagramCaption")}</p>
                <p className="tag">&lt;/p&gt;</p>
                <h3>Instagram</h3>
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-lopes-781b39263/"
            target="_blank"
          >
            <div className="socialMidia">
              <TechIcons
                imgurl={"https://skillicons.dev/icons?i=linkedin"}
                sizeicon={240}
                title={"Linkedin"}
                alt={"Linkedin"}
              />
              <div className="midiaText">
                <p className="tag">&lt;p&gt;</p>
                <p>{t("home.linkedinCaption")}</p>
                <p className="tag">&lt;/p&gt;</p>
                <h3>Linkedin</h3>
              </div>
            </div>
          </a>
          <a href="mailto:lucasllopes100@gmail.com" target="_blank">
            <div className="socialMidia">
              <TechIcons
                imgurl={"https://skillicons.dev/icons?i=gmail"}
                sizeicon={240}
                title={"Gmail"}
                alt={"Gmail"}
              />
              <div className="midiaText">
                <p className="tag">&lt;p&gt;</p>
                <p>{t("home.gmailCaption")}</p>
                <p className="tag">&lt;/p&gt;</p>
                <h3>Gmail</h3>
              </div>
            </div>
          </a>
          <a href="https://github.com/LucasLoopsT" target="_blank">
            <div className="socialMidia">
              <TechIcons
                imgurl={"https://skillicons.dev/icons?i=github"}
                sizeicon={240}
                title={"Github"}
                alt={"Github"}
              />
              <div className="midiaText">
                <p className="tag">&lt;p&gt;</p>
                <p>{t("home.githubCaption")}</p>
                <p className="tag">&lt;/p&gt;</p>
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
