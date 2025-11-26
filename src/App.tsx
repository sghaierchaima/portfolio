// src/App.tsx
import React, { useState } from "react";
import type { Lang } from "./lang";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <>
      <Navbar lang={lang} onChangeLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Certifications lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Education lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default App;
