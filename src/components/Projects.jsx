import Title from "./Title"
import PrimaryBtn from "./PrimaryBtn"
import SecondaryBtn from "./SecondaryBtn"
import ProgrammingBadget from "./ProgrammingBadget"
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaLaravel } from "react-icons/fa"
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si"


function Projects() {

    return(
        <section id="projects" className="px-4 md:px-0 pt-16 md:pt-18 md:mt-32 min-h-[1200px]">
            <Title text={"Projects"} />
            <div className="w-full md:w-3/4 mx-auto mt-12 md:mt-28">
            
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                    {/* card, make img slider , create slider component*/}
                    <div className="w-full lg:w-1/2 border border-slate-200 rounded-3xl overflow-hidden">
                        <div>
                            <img src="./src/assets/project_1/A.png" alt="" />
                        </div>
                        <div className="h-full p-4 flex flex-col gap-3 lg:gap-6">
                            {/* title */}
                            <h1 className="text-3xl text-slate-700">Real Estate Web Application</h1>
                            {/* text */}
                            <p className="text-slate-500">
                                A full-featured property listing platform built with Laravel, 
                                allowing users to post, browse, and filter real estate listings. 
                                <span className="hidden md:inline">It supports advanced search, map integration via Google Maps API, 
                                and a modern UI using Tailwind CSS and Flowbite.</span>
                            </p>
                            {/* languages logo */}
                            <div className="flex flex-wrap gap-1">

                                <ProgrammingBadget className="text-xs">
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
                                <PrimaryBtn text="View Repo" href="/">
                                </PrimaryBtn>
                                <SecondaryBtn text="Visit" href="/">
                                    <BsBoxArrowUpRight className="text-md ml-2.5"/>
                                </SecondaryBtn>
                            </div>
                        </div>
                    </div>
                    
                    {/* card, make img slider , create slider component*/}
                    <div className="w-full lg:w-1/2 flex flex-col border border-slate-200 rounded-3xl overflow-hidden">
                        <div>
                            <img src="./src/assets/project_1/A.png" alt="" />
                        </div>
                        <div className="h-full p-4 flex flex-col gap-3 lg:gap-6">
                            {/* title */}
                            <h1 className="text-3xl text-slate-700">Real Estate Web Application</h1>
                            {/* text */}
                            <p className="text-slate-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus sit veniam perspiciatis, 
                                qui praesentium delectus dignissimos alias amet similique. Numquam dolorum iste fugit totam!
                            </p>
                            {/* languages logo */}
                            <div className="flex flex-wrap gap-1 mt-auto">

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
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects