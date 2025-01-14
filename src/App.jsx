import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import Social from "./components/Social";
import Email from "./components/Email";
import { useState, useEffect } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import InteractiveDottedBackground from "./components/InteractiveDottedBackground";
import FooterX from "./components/FooterX";
import Loader from "./components/PrecessionLoader"; // Import your Loader component

function App() {
  const [loading, setLoading] = useState(true); // State for the loader

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 20); // Hide loader after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <div>
        <InteractiveDottedBackground />
        <Social />
        <Email />
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="work">
          <Experience />
        </section>
        <section id="projects">
          <Work />
        </section>
        <OtherProjects />
        <section id="contact">
          <Contact />
        </section>
        <FooterX />
      </div>
    </BrowserRouter>
  );
}

export default App;
