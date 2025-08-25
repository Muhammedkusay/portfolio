import Title from "./Title"
import ProjectCard from "./ProjectCard"
import ProgrammingBadget from "./ProgrammingBadget"
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaLaravel } from "react-icons/fa"
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSqlite, SiGooglemaps, SiPostgresql, SiAlpinedotjs } from "react-icons/si";
import imgAProjectThree from "/assets/project_2/A.webp";
import imgBProjectThree from "/assets/project_2/B.webp";
import imgCProjectThree from "/assets/project_2/C.webp";
import imgDProjectThree from "/assets/project_2/D.webp";
import imgEProjectThree from "/assets/project_2/E.webp";
import imgAProjectTwo from "/assets/project_1/A.webp";
import imgBProjectTwo from "/assets/project_1/B.webp";
import imgCProjectTwo from "/assets/project_1/C.webp";
import imgDProjectTwo from "/assets/project_1/D.webp";
import imgEProjectTwo from "/assets/project_1/E.webp";
import imgFProjectTwo from "/assets/project_1/F.webp";
import imgAProjectOne from "/assets/project_3/A.webp"
import imgBProjectOne from "/assets/project_3/B.webp"
import imgCProjectOne from "/assets/project_3/C.webp"
import imgDProjectOne from "/assets/project_3/D.webp"
import imgEProjectOne from "/assets/project_3/E.webp"
import imgFProjectOne from "/assets/project_3/F.webp"
import imgGProjectOne from "/assets/project_3/G.webp"
import ViewProjectsPage from "./ViewProjectsPage"

function Projects() {
    
    let project_1 = {
        title: "Project Management System",
        date: "Aug 2025",
        text: "A project management application developed using Laravel, Tailwind CSS, Alpine.js, and Chart.js. It allows users to create and manage projects, track progress, and visualize data through interactive charts",
        links: ["https://github.com/Muhammedkusay/taskflow"],
        imgs: [
            imgAProjectOne,
            imgBProjectOne,
            imgCProjectOne,
            imgDProjectOne,
            imgEProjectOne,
            imgFProjectOne,
            imgGProjectOne,
        ]
    }

    let project_2 = {
        title: "Real Estate Web Application",
        date: "Jul 2024",
        text: "A full-featured real estate platform developed with Laravel and Tailwind CSS. Allows users to post and browse property listings with detailed information, includinglocation via Google Maps integration. ",
        links: ["https://github.com/Muhammedkusay/Emlakbul/tree/master"],
        imgs: [
            imgAProjectTwo,
            imgBProjectTwo,
            imgCProjectTwo,
            imgDProjectTwo,
            imgEProjectTwo,
            imgFProjectTwo,
        ]
    }
    
    let project_3 = {
        title: "Blog Platform",
        date: "Jul 2025",
        text: "A dynamic blog system built with Laravel, Tailwind CSS, and Alpine.js. Users can create, edit, and manage posts with file upload support. The platform includes authentication to manage user accounts and access.",
        links: ["https://github.com/Muhammedkusay/Medium-clone"],
        imgs: [

            imgAProjectThree,
            imgBProjectThree,
            imgCProjectThree,
            imgDProjectThree,
            imgEProjectThree,
        ]
    }

    return(
        <section id="projects" className="px-4 md:px-0 pt-16 md:pt-18 md:mt-32 min-h-[1200px]">
            <Title text={"Projects"} />
            <div className="w-full md:w-3/4 mx-auto mt-12 md:mt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
                    
                    {/* card */}
                    <ProjectCard project={project_1}>
                        {/* technologies logo */}
                        <div className="hidden md:flex flex-wrap gap-1 ">
                            <ProgrammingBadget >
                                <FaLaravel />
                            </ProgrammingBadget>   
                            <ProgrammingBadget >
                                <SiPostgresql />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <FaGitAlt />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <FaHtml5 />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <FaCss3Alt />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <IoLogoJavascript />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <SiAlpinedotjs />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <RiTailwindCssFill />
                            </ProgrammingBadget>
                        </div>
                    </ProjectCard>

                    {/* card */}
                    <ProjectCard project={project_2}>
                        {/* technologies logo */}
                        <div className="hidden md:flex flex-wrap gap-1 ">

                            <ProgrammingBadget >
                                <FaLaravel />
                            </ProgrammingBadget>   
                            <ProgrammingBadget >
                                <GrMysql />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <FaGitAlt />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <FaHtml5 />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <IoLogoJavascript />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <RiTailwindCssFill />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <SiGooglemaps />
                            </ProgrammingBadget>
                        </div>
                    </ProjectCard>

                    {/* card */}
                    <ProjectCard project={project_3}>
                        {/* technologies logo */}
                        <div className="hidden md:flex flex-wrap gap-1 ">

                            <ProgrammingBadget >
                                <FaLaravel />
                            </ProgrammingBadget>   
                            <ProgrammingBadget >
                                <SiSqlite />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <FaGitAlt />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <FaHtml5 />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <IoLogoJavascript />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <SiAlpinedotjs />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <RiTailwindCssFill />
                            </ProgrammingBadget>
                        </div>
                    </ProjectCard>

                    {/* view all projects card */}
                    <ViewProjectsPage />
      
                </div>
            </div>
        </section>
    )
}

export default Projects