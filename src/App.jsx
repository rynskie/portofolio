import { Footer } from "flowbite-react";
import About from "./Components/About";
import Background from "./Components/Background";
import Contact from "./Components/Contact";
import Header from "./Components/Header"
import Projects from "./Components/Projects";

const App = () => {
  return (
    <>
     <Header />
     <About />
     <Background />
     <Projects />
     <Contact />
     <Footer />
    </>
  )
}

export default App;