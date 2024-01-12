import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Queote from "../components/Queote"
import Skills from "../components/Skills"

const Home = () => {
    return (
        <>
            <Hero />
            <Queote />
            <Projects />
            <Skills/>
            <About />
            <Contact />
        </>
    )
}

export default Home