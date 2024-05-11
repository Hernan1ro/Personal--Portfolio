import { useState } from "react";
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import About from "./containers/About";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import { Experience } from "./containers/experience";

function App() {
  const [filter, setFilter] = useState("all");
  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [skillVisible, setSkillVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  return (
    <>
      <Header
        heroVisible={heroVisible}
        aboutVisible={aboutVisible}
        skillVisible={skillVisible}
        projectsVisible={projectsVisible}
        contactVisible={contactVisible}
        footerVisible={footerVisible}
      />
      <Hero setHeroVisible={setHeroVisible} />
      <About setAboutVisible={setAboutVisible} />
      <Skills setSkillVisible={setSkillVisible} />
      {/* <Experience setAboutVisible={setAboutVisible} /> */}
      <Projects
        setProjectsVisible={setProjectsVisible}
        filter={filter}
        setFilter={setFilter}
      />
      <Contact setContactVisible={setContactVisible} />
      <Footer
        setFilter={setFilter}
        setFooterVisible={setFooterVisible}
        footerVisible={footerVisible}
      />
    </>
  );
}

export default App;
