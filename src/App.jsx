import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import Social from "./components/Social";
import Email from "./components/Email";
// import Spotlight from "./components/Spotlight";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import InteractiveDottedBackground from "./components/InteractiveDottedBackground";
import FooterX from "./components/FooterX";
import { useRef } from "react";

function App() {
  const imageRef = useRef(null);
  return (
    <BrowserRouter>
      <div>
        {/* <Spotlight /> */}
        <InteractiveDottedBackground imageRef={imageRef} />
        <Social />
        <Email />
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About ref={imageRef} />
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
