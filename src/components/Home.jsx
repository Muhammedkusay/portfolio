import Loader from "./Loader"
import NavBar from "./NavBar"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Stats from "./Stats"
import Footer from "./Footer"
import { useEffect, useState } from "react"

function Home() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const handleLoad = () => {
            setLoading(false)
        } 

        if(document.readyState == 'complete') {
            setLoading(false)
        } else {
            window.addEventListener('load', handleLoad)
        }

        return() => window.removeEventListener('load', handleLoad)

    }, [])

    if(loading) {
        return(<Loader />)
    }

    return(
        <>
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