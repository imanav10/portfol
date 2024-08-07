import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import About from "./components/About"
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Lowres from "./Redirectiflowres";



function App() {

  return (
    <main className="bg-Transparent">
	  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dreampulse/computer-modern-web-font@master/fonts.css"/>
      <Navbar />
      <Lowres />
      <About />
      <Experience />
      <Projects />
      <Contact />

    </main>
  )
}

export default App
