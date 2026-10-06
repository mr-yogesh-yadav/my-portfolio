import './App.css'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Education from "./pages/Education";
import Mouse from "./components/Mouse"
import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer"
function App() {
  return (
    <>
    <Mouse/>
      <Navbar />
        <Hero />
        <About />
        <Skills/>
        <Projects />
        <Education/>
        <Contact />
        <Footer/>
    </>
  )
}
export default App
