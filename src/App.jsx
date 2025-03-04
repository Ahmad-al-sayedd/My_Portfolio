//Components
import NavBar from './components/Nav/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
//styling
import './App.scss'
//Packages



function App() {

  return (
    <>
    <NavBar />
    <Home />
    <main>
      <About/>
      <Projects/>
    </main>
   <Footer/>
    </>
  )
}

export default App
