import StartAnimation from "./StartAnimation"
import NavBar from "./NavBar"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Stats from "./Stats"
import Footer from "./Footer"

function Home() {

    return(
        <>
            {/* <StartAnimation /> */}
            <NavBar />
            <Hero />
            <About />
            <Projects />
            <Stats />
            <Footer />
        </>
    )
}

export default Home