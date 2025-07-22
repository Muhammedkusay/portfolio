import Title from "./Title"
import Messaging from "./Messaging"
import MacUI from "./MacUI"
import AboutCards from "./AboutCards"
import Timeline from "./Timeline"

function About() {

    return(
        <section id="about" className="px-4 md:px-0 pt-16 md:pt-18 md:mt-32 min-h-[1200px]">
            <Title text={"About Me"} />
            <div className="w-full md:w-3/4 mx-auto mt-12 md:mt-28">
                <div className="flex flex-col lg:flex-row gap-8 justify-between">
                    <Messaging />
                    <MacUI />
                </div>
                <AboutCards />
                <Timeline />
            </div>
        </section>
    )
}

export default About