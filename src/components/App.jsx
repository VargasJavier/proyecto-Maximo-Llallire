// SASS
import NavBAr from "./header/navBar/NavBar";
import "../assets/scss/base/App.scss";

// COMPONENTS
import Presentation from "./header/presentation/Presentation";
import Skills from "./main/Skills";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Service from "./service/Service";
import Projects from './projects/Projects';
function App() {
  return (
    <>
      <NavBAr />
      <Presentation />
      <Skills />
      <Service />
      <Projects/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
