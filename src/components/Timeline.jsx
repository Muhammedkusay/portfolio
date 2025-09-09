import TimelineCard from "./TimelineCard"
import firatImg from "/assets/firat.png"
import arslanImg from "/assets/arslantek.png"
import intelliumImg from "/assets/intellium-logo.png"

function Timeline() {

    return(
        <div className="mt-32 md:mt-44 lg:mt-52">
            <div className="h-full lg:w-full border-slate-300 border-l lg:border-l-0 lg:border-t flex flex-col lg:flex-row justify-between gap-10 ml-4 lg:ml-0 pl-8 lg:pl-0 lg:pt-8 text-slate-700">

                <TimelineCard month="Sep" year="2022" company="Firat Uni." url={"https://firat.edu.tr"}>
                    <p className="pb-2">Started Bachelor's in Software Engineering</p>
                    <p>- Graduation in <b>2026</b></p>
                    <p className="pb-3">- Current GPA <b>3.44</b></p>
                    <div className="flex items-start gap-1">
                        <span>-</span>
                        <p className="pb-3">
                            Learned programming fundamentals then progressed to advanced programming like oop and data structures.
                        </p>
                    </div>
                    <div className="flex items-start gap-1">
                        <span>-</span>
                        <p className="pb-3">
                            Developed several projects to strengthen my knowledge, including projects based on OOP, databases, and machine learning.
                        </p>
                    </div>
                    <img src={firatImg} alt="" className="w-12 mt-auto"/>
                </TimelineCard>
                
                <TimelineCard month="Jul" year="2024" company="Arslan Tech.">
                    <p className="pb-3">Software Engineer Intern</p>
                    <p className="pb-3">- Fullstack web developer</p>
                    <div className="flex items-start gap-1">
                        <span>-</span>
                        <p className="pb-3">
                            Contributed to the development of a real estate web application for property
                            listings, search, and management.
                        </p>
                    </div>
                    <div className="flex items-start gap-1">
                        <span>-</span>
                        <p className="pb-6">
                            Assisted in creating and maintaining database models and relationships to support
                            property details, users, and listings.
                        </p>
                    </div>
                    <img src={arslanImg} alt="" className="w-11 mt-auto"/>
                </TimelineCard>

                <TimelineCard month="Jul" year="2025" company="Intellium" url={"https://intellium.com.tr"}>
                    <p className="pb-3">Software Engineer Intern</p>
                    <p className="pb-3">- Fullstack web developer</p>
                    <div className="flex items-start gap-1">
                        <span>-</span>
                        <p className="pb-3">
                            Worked on a project management system for manage projects, track progress and
                            visualize data through interactive charts
                        </p>
                    </div>
                    <div className="flex items-start gap-1">
                        <span>-</span>
                        <p className="pb-6">
                            Collaborated with cross-functional teams to ideate and prototype innovative
                            solutions for web development projects
                        </p>
                    </div>
                    <img src={intelliumImg} alt="" className="w-32 mt-auto"/>
                </TimelineCard>

            </div>
        </div>
    )
}

export default Timeline