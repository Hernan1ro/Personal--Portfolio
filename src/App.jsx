import { useState } from "react";
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import About from "./containers/About";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects filter={filter} setFilter={setFilter} />
      <Contact />
      <Footer filter={filter} setFilter={setFilter} />
    </>
  );
}

export default App;
