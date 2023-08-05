import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./static/css/App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import JobTimeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  const [activeSection, setActiveSection] = useState("intro");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="mx-auto center overflow-y-scroll bg-cover bg-scroll bg-bottom bg-no-repeat shadow-lg">
      <div className="mx-auto min-h-screen font-sans transition-all h-screen">
        <Navbar onNavClick={handleNavClick} activeSection={activeSection} />
        <Header />
        <AnimatePresence>
          <motion.div exit={{ opacity: 0 }} key={activeSection}>
            <div className="bg-slate-50/95 pt-5 px-10 mt-5 pb-5 min-h-[510px] items-center">
              {activeSection === "intro" && <AboutMe />}
              {activeSection === "skills" && <Skills />}
              {activeSection === "projects" && <Projects />}
              {activeSection === "certifications" && <Certifications />}
              {activeSection === "timeline" && <JobTimeline />}
              {activeSection === "contact" && <Contact />}
            </div>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;
