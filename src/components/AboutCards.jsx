// React Icons - UI & Frameworks
import { FaLaravel, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaGithub, FaPhp, FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { SiAlpinedotjs, SiPostgresql } from "react-icons/si";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { BsDatabase } from "react-icons/bs";
import { IoCodeSlashOutline, IoLogoPython } from "react-icons/io5";

// Components
import SecondaryBtn from "./SecondaryBtn";
import ProgrammingBadge from "./ProgrammingBadge";
import CardSwap, { Card } from './CardSwap'

// Assets
import cImg from "/assets/c-icon.png";

function AboutCards() {

    return(
        <div className="mt-8 flex flex-col lg:flex-row gap-8 items-center justify-between border border-slate-300 rounded-2xl md:rounded-4xl overflow-hidden">

            <div className="w-full lg:w-[70%] mt-6 lg:mt-0 px-8 md:pr-0 flex flex-col gap-6 lg:gap-8 bg-white">
                {/* mouse gif & title */}
                <p className="text-3xl lg:text-4xl font-semibold text-slate-700">Languages & Frameworks</p>
               
               {/* paragraph */}
                <p className="text-slate-500">
                    I enjoy building user-friendly, modern, and efficient web applications from scratch or improving existing ones.
                    I love learning by doing <span className="hidden md:inline">— I often recreate real-world websites for practice and enjoy optimizing the code behind them.</span>
                </p>

                <SecondaryBtn href={'https://github.com/muhammedkusay'} target="_blank">
                    <div className="flex items-center gap-2.5">
                        <FaGithub className="text-lg"/>
                        <p>Github</p>
                    </div>
                </SecondaryBtn>
            </div>

            {/* card stack */}
            <div className="relative w-full h-[180px] md:h-[500px] overflow-hidden">
                <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={4000}
                    pauseOnHover={false}
                >
                    <Card>
                        <div className="p-4">
                            <div className="mb-4 flex items-center gap-2.5">
                                <HiOutlinePaintBrush className="text-2xl text-indigo-700" />
                                <h3>Frontend</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 md:gap-1.5">
                                <ProgrammingBadge text="React js">
                                    <FaReact />
                                </ProgrammingBadge>
                                <ProgrammingBadge text="Tailwind">
                                    <RiTailwindCssFill />
                                </ProgrammingBadge>
                                <ProgrammingBadge text="Html">
                                    <FaHtml5 />
                                </ProgrammingBadge>
                                <ProgrammingBadge text="Css">
                                    <FaCss3Alt />
                                </ProgrammingBadge>
                                <ProgrammingBadge text="Javascript">
                                    <FaJs />
                                </ProgrammingBadge>
                                <ProgrammingBadge text="Alpine js">
                                    <SiAlpinedotjs />
                                </ProgrammingBadge>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-4">
                            <div className="mb-4 flex items-center gap-2.5">
                                <BsDatabase className="text-2xl text-indigo-700" />
                                <h3>Backend</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 md:gap-1.5">
                                <ProgrammingBadge text="Laravel">
                                    <FaLaravel />
                                </ProgrammingBadge>   
                                <ProgrammingBadge text="Php">
                                    <FaPhp />
                                </ProgrammingBadge>   
                                <ProgrammingBadge text="PostgreSql">
                                    <SiPostgresql />
                                </ProgrammingBadge>
                                <ProgrammingBadge text="MySql">
                                    <GrMysql />
                                </ProgrammingBadge>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-4">
                            <div className="mb-4 flex items-center gap-2.5">
                                <IoCodeSlashOutline className="text-2xl text-indigo-700" />
                                <h3>Other</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 md:gap-1.5">
                                <ProgrammingBadge text="Git">
                                    <FaGitAlt className="text-2xl text-slate-700" />
                                </ProgrammingBadge>
                                <ProgrammingBadge text="Java">
                                    <FaJava />
                                </ProgrammingBadge>
                                <ProgrammingBadge text="Python">
                                    <IoLogoPython />
                                </ProgrammingBadge>
                                <ProgrammingBadge text="C">
                                    <img src={cImg} alt="C" className="w-6 grayscale" />
                                </ProgrammingBadge>
                            </div>
                        </div>
                    </Card>
                </CardSwap>
            </div>

        </div>
    )
}

export default AboutCards