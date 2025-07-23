import TimelineCard from "./TimelineCard"

function Timeline() {

    return(
        <div className="mt-24 md:mt-36 lg:mt-44">
            <div className="h-full lg:w-full border-slate-300 border-l lg:border-l-0 lg:border-t flex flex-col lg:flex-row justify-between gap-10 ml-4 lg:ml-0 pl-8 lg:pl-0 lg:pt-8 text-slate-700">
                
                <TimelineCard month="Sep" year="2022" company="Firat Uni.">
                    <p className="pb-2">Started Bachelor's in Software Engineering</p>
                    <p className="pb-8">Graduation in <b>2026</b></p>
                    <img src="./src/assets/firat.png" alt="" className="w-12 mt-auto"/>
                </TimelineCard>
                <TimelineCard month="Jul" year="2024" company="Arslan Tech.">
                    <p className="pb-2">Software Engineer Intern</p>
                    <p>- Fullstack web development</p>
                    <p className="pb-8">- Real estate web application</p>
                    <div className="size-10 mt-auto bg-gradient-to-b from-rose-600 to-rose-800 text-white rounded-full font-semibold text-6xl flex justify-center items-center overflow-hidden">A</div>
                </TimelineCard>
                <TimelineCard month="Jul" year="2025" company="Intellium">
                    <p className="pb-2">Software Engineer Intern</p>
                    <p>- Fullstack web development</p>
                    <p className="pb-8">- Project Management System</p>
                    <img src="./src/assets/intellium-logo.png" alt="" className="w-32 mt-auto"/>
                </TimelineCard>

            </div>
        </div>
    )
}

export default Timeline