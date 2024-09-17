import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Skill />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
