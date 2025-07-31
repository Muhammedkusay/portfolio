import TimelineCard from "./TimelineCard"
import firatImg from "/public/assets/firat.png"
import arslanImg from "/public/assets/arslantek.png"
import intelliumImg from "/public/assets/intellium-logo.png"

function Timeline() {

    return(
        <div className="mt-24 md:mt-36 lg:mt-44">
            <div className="h-full lg:w-full border-slate-300 border-l lg:border-l-0 lg:border-t flex flex-col lg:flex-row justify-between gap-10 ml-4 lg:ml-0 pl-8 lg:pl-0 lg:pt-8 text-slate-700">

                <TimelineCard month="Sep" year="2022" company="Firat Uni.">
                    <p className="pb-2">Started Bachelor's in Software Engineering</p>
                    <p className="pb-8">Graduation in <b>2026</b></p>
                    <img src={firatImg} alt="" className="w-12 mt-auto"/>
                </TimelineCard>
                <TimelineCard month="Jul" year="2024" company="Arslan Tech.">
                    <p className="pb-2">Software Engineer Intern</p>
                    <p>- Fullstack web development</p>
                    <p className="pb-8">- Real estate web application</p>
                    <img src={arslanImg} alt="" className="w-11 mt-auto"/>
                </TimelineCard>
                <TimelineCard month="Jul" year="2025" company="Intellium">
                    <p className="pb-2">Software Engineer Intern</p>
                    <p>- Fullstack web development</p>
                    <p className="pb-8">- Project Management System</p>
                    <img src={intelliumImg} alt="" className="w-32 mt-auto"/>
                </TimelineCard>

            </div>
        </div>
    )
}

export default Timeline