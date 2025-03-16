//Components
import NavBar from "./components/Nav/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollingUp/ScrollUp";

//styling
import "./App.scss";
//Packages

function App() {
  return (
    <>
      <div className="overlay"></div>
      <NavBar />
      <Home />

      <About />
      <Projects />

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
