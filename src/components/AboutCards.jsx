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
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { ImQuotesLeft } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa6";
import { SiCodecrafters } from "react-icons/si";


function AboutCards() {

    return(
        <div className="flex flex-col md:flex-row gap-8 xl:gap-16 justify-between mt-18 md:mt-28">
            <div className="w-full py-4 md:py-12 xl:py-20 md:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-4">
                
                <div className="w-full flex flex-col gap-4 p-3 md:p-4 border border-slate-200 rounded-2xl md:rounded-4xl bg-white hover:translate-x-3 hover:shadow-lg hover:-translate-y-3 transition-all shadow-sm">
                    <div className="flex gap-2 items-center text-xl md:text-2xl">
                        <div className="w-fit p-2 md:p-3 text-white bg-gradient-to-br from-indigo-300 to-indigo-600 rounded-xl shadow-sm">
                            <FaGraduationCap />
                        </div>
                        <h3 className="font-semibold text-slate-600">Education</h3>
                    </div>
                    <p className="ml-3 mt-3 text-slate-500 text-lg"><b>Firat University</b><br/>Bachelor’s in Software Engineering.<br/>2022 - present </p>
                    <div className="size-12 mt-auto md:size-14 flex items-center justify-center">
                        <img src="./src/assets/firat.png" alt="" />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-4 p-3 md:p-4 border border-slate-200 rounded-2xl md:rounded-4xl bg-white hover:translate-x-3 hover:shadow-lg hover:-translate-y-3 transition-all shadow-sm">
                    <div className="flex gap-2 items-center text-xl md:text-2xl">
                        <div className="w-fit p-2 md:p-3 text-white bg-gradient-to-br from-indigo-300 to-indigo-600 rounded-xl shadow-sm">
                            <LuMonitorDot />
                        </div>
                        <h3 className="font-semibold text-slate-600">What I Do</h3>
                    </div>
                    <p className="text-slate-500">I specialize in building clean, performant, and user-friendly web applications;</p>
                    <ul className="text-slate-500 list-disc pl-6">
                        <li>Full-Stack Development</li>
                        <li>Responsive Web Design</li>
                        <li>UI/UX Implementation</li>
                        <li>API Integration</li>
                    </ul>
                    <div className="flex gap-1">
                        
                    </div>
                </div>

                <div className="w-full lg:col-span-2 flex flex-col gap-4 p-3 md:p-4 border border-slate-200 rounded-2xl md:rounded-4xl bg-white hover:translate-x-3 hover:shadow-lg hover:-translate-y-3 transition-all shadow-sm">
                    <div className="flex gap-2 items-center text-xl md:text-2xl">
                        <div className="w-fit p-2 md:p-3 text-white bg-gradient-to-br from-indigo-300 to-indigo-600 rounded-xl shadow-sm">
                            <SiCodecrafters />
                        </div>
                        <h3 className="font-semibold text-slate-600">Coding</h3>
                    </div>
                    <p className="text-slate-500">
                        <b>Frontend Development</b> – I build responsive, user-friendly UIs using React & Tailwind CSS.
                        <b> Backend Development</b> – I develop secure and scalable APIs using Laravel.
                        <b> Full-Stack Integration</b> – I connect frontend and backend for complete web app functionality.
                    </p>
                    <div className="flex flex-wrap gap-1 mt-auto">
                        <div className="size-9 md:size-10 flex items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-500">
                            <FaLaravel className="text-xl md:text-2xl text-white"/>
                        </div>
                        <div className="size-9 md:size-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-300 to-sky-400">
                            <GrMysql className="text-xl md:text-2xl text-white"/>
                        </div>
                        <div className="size-9 md:size-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-400">
                            <SiPostgresql className="text-xl md:text-2xl text-white"/>
                        </div>
                        <div className="size-9 md:size-10 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600">
                            <FaGitAlt className="text-xl md:text-2xl text-white"/>
                        </div>
                        <div className="size-9 md:size-10 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-orange-400">
                            <FaHtml5 className="text-xl md:text-2xl text-white"/>
                        </div>
                        <div className="size-9 md:size-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
                            <FaCss3Alt className="text-xl md:text-2xl text-white"/>
                        </div>
                        <div className="size-9 md:size-10 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400">
                            <IoLogoJavascript className="text-xl md:text-2xl text-white"/>
                        </div>
                        <div className="size-9 md:size-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600">
                            <RiTailwindCssFill className="text-xl md:text-2xl text-white"/>
                        </div>
                        <div className="size-9 md:size-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-300 to-sky-600">
                            <FaReact className="text-xl md:text-2xl text-white"/>
                        </div>
                        <div className="size-9 md:size-10 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500">
                            <SiAlpinedotjs className="text-xl md:text-2xl text-white"/>
                        </div>
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