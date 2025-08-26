// Components
import Footer from "./Footer";
import NavBar from "./NavBar";
import ProjectCard from "./ProjectCard";
import ProgrammingBadget from "./ProgrammingBadget";

// Icons
import { FaCss3Alt, FaGitAlt, FaHtml5, FaLaravel, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { SiSqlite, SiGooglemaps, SiPostgresql, SiAlpinedotjs, SiTensorflow } from "react-icons/si";

// Assets - Project Three
import imgAProjectThree from "/assets/project_2/A.webp";
import imgBProjectThree from "/assets/project_2/B.webp";
import imgCProjectThree from "/assets/project_2/C.webp";
import imgDProjectThree from "/assets/project_2/D.webp";
import imgEProjectThree from "/assets/project_2/E.webp";

// Assets - Project Two
import imgAProjectTwo from "/assets/project_1/A.webp";
import imgBProjectTwo from "/assets/project_1/B.webp";
import imgCProjectTwo from "/assets/project_1/C.webp";
import imgDProjectTwo from "/assets/project_1/D.webp";
import imgEProjectTwo from "/assets/project_1/E.webp";
import imgFProjectTwo from "/assets/project_1/F.webp";

// Assets - Project One
import imgAProjectOne from "/assets/project_3/A.webp";
import imgBProjectOne from "/assets/project_3/B.webp";
import imgCProjectOne from "/assets/project_3/C.webp";
import imgDProjectOne from "/assets/project_3/D.webp";
import imgEProjectOne from "/assets/project_3/E.webp";
import imgFProjectOne from "/assets/project_3/F.webp";
import imgGProjectOne from "/assets/project_3/G.webp";

// Assets - Project Four
import imgAProjectFour from "/assets/project_4/A.webp";
import imgBProjectFour from "/assets/project_4/B.webp";
import imgCProjectFour from "/assets/project_4/C.webp";
import imgDProjectFour from "/assets/project_4/D.webp";

// Assets - Project Five
import imgAProjectFive from "/assets/project_5/A.webp";


function ProjectsPage() {

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

    let project_4 = {
        title: "Gym Exercises React App",
        date: "Feb 2025",
        text: "A React-based application for exploring gym exercises, built using Material UI and integrated with RapidAPI. Users can browse exercise routines, view details, and interact with dynamic data fetched from external APIs.",
        links: ["https://github.com/Muhammedkusay/GymApp"],
        imgs: [

            imgAProjectFour,
            imgBProjectFour,
            imgCProjectFour,
            imgDProjectFour,
        ]
    }

    let project_5 = {
        title: "Object Detection Web App",
        date: "Aug 2025",
        text: "An multi-object detection app based on tensorflow js/coco-ssd model. Can detect over 80 objects with supporting of flipping the camera for phones.",
        links: [
            "https://github.com/Muhammedkusay/ObjectDetectionTF",
            "https://objectdet.netlify.app/"
        ],
        imgs: [
            imgAProjectFive,
        ]
    }

    return(
        <>
            <NavBar />
            <div className="md:w-4/5 mx-auto py-4 px-4 md:px-0">
                <h1 className="text-3xl md:text-4xl py-6">Projects</h1>
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
                    
                    {/* card */}
                    <ProjectCard project={project_5}>
                        {/* technologies logo */}
                        <div className="hidden md:flex flex-wrap gap-1 ">

                            <ProgrammingBadget >
                                <FaReact />
                            </ProgrammingBadget>   
                            <ProgrammingBadget >
                                <SiTensorflow />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <RiTailwindCssFill />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <FaGitAlt />
                            </ProgrammingBadget>
                            <ProgrammingBadget >
                                <FaHtml5 />
                            </ProgrammingBadget>
                        </div>
                    </ProjectCard>
                    
                    {/* card */}
                    <ProjectCard project={project_4}>
                        {/* technologies logo */}
                        <div className="hidden md:flex flex-wrap gap-1 ">

                            <ProgrammingBadget >
                                <FaReact />
                            </ProgrammingBadget>   
                            <ProgrammingBadget >
                                <TbApi />
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
                        </div>
                    </ProjectCard>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectsPage