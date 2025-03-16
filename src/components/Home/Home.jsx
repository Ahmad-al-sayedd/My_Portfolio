import Header from '../../assets/header2.jpg'
import './Home.scss'
const Home = () => {
  return (
    
   <section id="home" className="header-content">
        <article className="header-content-article">
          <h1>
            Web
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </h1>
          <p>
            I’m a creative web developer, passionate about crafting innovative
            solutions.
          </p>
        </article>
      
         <img className='homeImg' src={Header}alt="coding-img"/>
      </section>
    
  )
}

export default Home
