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
                
                {/* make img slider , create slider component*/}
                <div className="w-1/2 border border-slate-200 rounded-3xl overflow-hidden">
                    <div>
                        <img src="./src/assets/project_1/A.png" alt="" />
                    </div>
                    <div className="p-4">
                        <h1 className="text-3xl text-slate-700 py-6">Real Estate Web Application</h1>
                        <p className="text-slate-500 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus sit veniam perspiciatis, 
                            qui praesentium delectus dignissimos alias amet similique. Numquam dolorum iste fugit totam!</p>
                                        {/* languages logo */}
                        <div className="flex flex-wrap gap-1 pb-6">

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
                        <div className="flex items-center gap-3">
                            <PrimaryBtn text="View Ripo" href="/">
                            </PrimaryBtn>
                            <SecondaryBtn text="Visit" href="/">
                                <BsBoxArrowUpRight className="text-md ml-2.5"/>
                            </SecondaryBtn>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects