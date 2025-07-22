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


function AboutCards() {

    return(
        <div className="flex flex-col md:flex-row gap-8 xl:gap-16 justify-between mt-18 md:mt-28">

            <div className="w-full md:w-[70%] lg:col-span-2 bg-white">

                <div className="flex flex-wrap gap-1">
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-red-500">
                        <FaLaravel className="text-2xl text-white"/>
                        <p className="hidden md:block text-white text-sm">Laravel</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-sky-400">
                        <GrMysql className="text-2xl text-white"/>
                        <p className="hidden md:block text-white text-sm">MySql</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-blue-400">
                        <SiPostgresql className="text-2xl text-white"/>
                        <p className="hidden md:block text-white text-sm">PostgreSql</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-orange-600">
                        <FaGitAlt className="text-2xl text-white"/>
                        <p className="hidden md:block text-white text-sm">Git</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-orange-500">
                        <FaHtml5 className="text-2xl text-white"/>
                        <p className="hidden md:block text-white text-sm">Html</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-blue-600">
                        <FaCss3Alt className="text-2xl text-white"/>
                        <p className="hidden md:block text-white text-sm">Css</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-yellow-400">
                        <IoLogoJavascript className="text-2xl text-white"/>
                        <p className="hidden md:block text-white text-sm">Javascript</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-cyan-500">
                        <RiTailwindCssFill className="text-2xl text-white"/>
                        <p className="hidden md:block text-white text-sm">Tailwind</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-sky-500">
                        <FaReact className="text-2xl text-white"/>
                        <p className="hidden md:block text-white text-sm">React js</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-emerald-500">
                        <SiAlpinedotjs className="text-2xl text-white"/>
                        <p className="hidden md:block text-white text-sm">Alpine js</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-amber-600">
                        <FaJava className="text-2xl text-white" />
                        <p className="hidden md:block text-white text-sm">Java</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-slate-100 border border-slate-200">
                        <img src="./src/assets/python-icon.png" alt="" className="w-6"/>
                        <p className="hidden md:block text-slate-700 text-sm">Python</p>
                    </div>
                    <div className="size-11 md:w-fit md:h-10 md:px-2.5 flex items-center justify-center md:gap-2 rounded-full bg-slate-100 border border-slate-200">
                        <img src="./src/assets/c-icon.png" alt="" className="w-6"/>
                        <p className="hidden md:block text-slate-700 text-sm">C</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[30%] overflow-hidden">
                <video src="./src/assets/phone.webm" autoPlay loop muted />
            </div>

        </div>
    )
}

export default AboutCards