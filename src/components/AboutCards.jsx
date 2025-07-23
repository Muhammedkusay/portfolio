import { LuMonitorDot } from "react-icons/lu";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { SiAlpinedotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import ProgrammingBadget from "./ProgrammingBadget";
import MacUI from "./MacUI";


function AboutCards() {

    return(
        <div className="flex flex-col md:flex-row gap-8 xl:gap-16 justify-between mt-24 md:mt-32 lg:mt-40">

            <div className="pt-16 w-full lg:w-[70%] lg:col-span-2 flex flex-col md:gap-6 lg:gap-12 bg-white">
                {/* mouse gif & title */}
                <div className="flex gap-4 items-center">
                    <img src="./src/assets/mouse.gif" alt="" className="w-28"/>
                    <p className="text-3xl lg:text-4xl font-semibold text-slate-700">Languages & Frameworks</p>
                </div>
               
               {/* paragraph */}
                <p className="my-6 lg:mt-8 text-slate-600 text-lg">
                    I enjoy building user-friendly, modern, and efficient web applications from scratch or improving existing ones.
                    I love learning by doing <span className="hidden md:inline">— I often recreate real-world websites for practice and enjoy optimizing the code behind them.</span>
                </p>

                {/* languages logo */}
                <div className="flex flex-wrap gap-1">

                    <ProgrammingBadget text="Laravel">
                        <FaLaravel />
                    </ProgrammingBadget>   
                    <ProgrammingBadget text="MySql">
                        <GrMysql />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="PostgreSql">
                        <SiPostgresql />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="Git">
                        <FaGitAlt className="text-2xl text-slate-700" />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="Html">
                        <FaHtml5 />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="Css">
                        <FaCss3Alt />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="Javascript">
                        <IoLogoJavascript />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="Tailwind">
                        <RiTailwindCssFill />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="React js">
                        <FaReact />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="Alpine js">
                        <SiAlpinedotjs />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="Java">
                        <FaJava />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="Python">
                        <img src="./src/assets/python-icon.png" alt="Python" className="w-6 grayscale" />
                    </ProgrammingBadget>
                    <ProgrammingBadget text="C">
                        <img src="./src/assets/c-icon.png" alt="C" className="w-6 grayscale" />
                    </ProgrammingBadget>
                </div>
            </div>

            {/* phone */}
            <div className="w-full lg:w-[30%] overflow-hidden">
                <video src="./src/assets/phone.webm" autoPlay loop muted />
            </div>

        </div>
    )
}

export default AboutCards