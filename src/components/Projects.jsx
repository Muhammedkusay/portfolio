import Title from "./Title"
import PrimaryBtn from "./PrimaryBtn"
import SecondaryBtn from "./SecondaryBtn"
import ProjectCard from "./ProjectCard"
import ProgrammingBadget from "./ProgrammingBadget"
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaLaravel } from "react-icons/fa"
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si"
import imgA from "/assets/project_1/A.webp";
import imgB from "/assets/project_1/B.webp";
import imgC from "/assets/project_1/C.webp";
import imgD from "/assets/project_1/D.webp";
import imgE from "/assets/project_1/E.webp";
import imgF from "/assets/project_1/F.webp";

function Projects() {
    
    let project_1 = [
        imgA,
        imgB,
        imgC,
        imgD,
        imgE,
        imgF,
    ]

    return(
        <section id="projects" className="px-4 md:px-0 pt-16 md:pt-18 md:mt-32 min-h-[1200px]">
            <Title text={"Projects"} />
            <div className="w-full md:w-3/4 mx-auto mt-12 md:mt-28">
            
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                    
                    {/* card, make img slider , create slider component*/}
                    <ProjectCard imgs={project_1}>

                        <div className="h-full p-4 flex flex-col gap-3 lg:gap-6">
                            <div className="mt-auto">
                                {/* title */}
                                <h1 className="text-3xl text-slate-700">Real Estate Web Application</h1>
                                {/* date */}
                                <p className="text-slate-500">Jul 2024</p>
                            </div>
                            {/* text */}
                            <p className="text-slate-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus sit veniam perspiciatis, 
                                qui praesentium delectus dignissimos alias amet similique. Numquam dolorum iste fugit totam!
                            </p>
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
                                    <FaCss3Alt />
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
                            {/* links */}
                            <div className="flex items-center gap-3">
                                <PrimaryBtn width="100%" text="View Repo" href="/">
                                </PrimaryBtn>
                                <SecondaryBtn width="100%" text="Visit" href="/">
                                    <BsBoxArrowUpRight className="text-md ml-2.5"/>
                                </SecondaryBtn>
                            </div>
                        </div>
                    </ProjectCard>
                    {/* card, make img slider , create slider component*/}
                    <ProjectCard imgs={project_1}>

                        <div className="h-full p-4 flex flex-col gap-3 lg:gap-6">
                            <div className="mt-auto">
                                {/* title */}
                                <h1 className="text-3xl text-slate-700">Real Estate Web Application</h1>
                                {/* date */}
                                <p className="text-slate-500">Jul 2024</p>
                            </div>
                            {/* text */}
                            <p className="text-slate-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus sit veniam perspiciatis, 
                                qui praesentium delectus dignissimos alias amet similique. Numquam dolorum iste fugit totam!
                            </p>
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
                                    <FaCss3Alt />
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
                            {/* links */}
                            <div className="flex items-center gap-3">
                                <PrimaryBtn width="100%" text="View Repo" href="/">
                                </PrimaryBtn>
                                <SecondaryBtn width="100%" text="Visit" href="/">
                                    <BsBoxArrowUpRight className="text-md ml-2.5"/>
                                </SecondaryBtn>
                            </div>
                        </div>
                    </ProjectCard>
                </div>

            </div>
        </section>
    )
}

export default Projects