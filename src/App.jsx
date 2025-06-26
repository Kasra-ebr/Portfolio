import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProjectsSection from "./Components/ProjectsSection";
import Service from "./Components/Service";
import Technologies from "./Components/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <ProjectsSection />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
