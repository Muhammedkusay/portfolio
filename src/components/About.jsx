import Title from "./Title"
import Messaging from "./Messaging"

import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiAlpinedotjs } from "react-icons/si";
import { FiPlus } from "react-icons/fi";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

function About() {

    return(
        <section id="about" className="px-4 md:px-0 pt-16 md:pt-28 min-h-[900px]">
            <Title text={"About Me"} />
            <div className="w-full md:w-3/4 mx-auto mt-12 md:mt-20 flex flex-col md:flex-row gap-4 justify-between">
                <Messaging />
                <div className="md:w-1/2 flex flex-col gap-4 py-4 md:py-6 border border-slate-200 bg-gradient-to-br from-white to-slate-100 rounded-2xl md:rounded-4xl shadow-sm">
                    <div className="px-4 flex justify-between items-center border-b border-b-slate-300">
                        <div className="flex gap-1 items-center">
                            <h2 className="text-slate-700 text-md md:text-lg bg-slate-100 py-1 px-4 rounded-t-xl border-b-0 border border-slate-300">Languages & <span className="hidden md:inline">Frameworks</span></h2>
                            <div className="text-xl text-slate-700 p-1 hover:bg-slate-100 rounded-full cursor-pointer">
                                <FiPlus />
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div className="size-3 rounded-full bg-emerald-500 hover:bg-emerald-300 cursor-pointer"></div>
                            <div className="size-3 rounded-full bg-orange-300 hover:bg-orange-200 cursor-pointer"></div>
                            <div className="size-3 rounded-full bg-red-500 hover:bg-red-300 cursor-pointer"></div>
                        </div>
                    </div>
                    <p className="text-slate-700 px-6">On the frontend, I work with <b>HTML</b>, <b>CSS (Tailwind)</b>, <b>JavaScript</b>, and have experience using  <b>React</b> and <b>Alpine.js</b>.
                        On the backend, I use <b>PHP</b> with the <b>Laravel</b> framework, and I manage data using <b>MySQL</b>.
                        I'm also familiar with tools like <b>Git</b>, and deployment using <b>Railway</b> or <b>Netlify</b>.
                    </p>
                    <div className="flex gap-3 px-6">
                        <FaLaravel className="text-2xl md:text-4xl text-red-600"/>
                        <FaReact className="text-2xl md:text-4xl text-sky-600"/>
                        <FaHtml5 className="text-2xl md:text-4xl text-orange-600"/>
                        <FaCss3Alt className="text-2xl md:text-4xl text-blue-600"/>
                        <FaJs className="text-2xl md:text-4xl text-yellow-400"/>
                        <RiTailwindCssFill className="text-xl md:text-4xl text-sky-500"/>
                        <SiMysql className="text-2xl md:text-4xl text-slate-600"/>
                        <FaGitAlt className="text-2xl md:text-4xl text-orange-600"/>
                        <SiAlpinedotjs className="text-2xl md:text-4xl text-emerald-600"/>
                    </div>
                    <p className="text-slate-700 px-6">I’ve also worked with 
                        <b>Python</b>, <b>Java</b>, and <b>C</b> through academic projects, algorithmic challenges, 
                        and problem-solving tasks.
                    </p>
                    <div className="flex gap-3 px-6">
                        <FaPython className="text-2xl md:text-4xl text-blue-400"/>
                        <FaJava className="text-2xl md:text-4xl text-orange-400"/>
                        <p className="text-2xl font-bold md:text-4xl text-blue-500">C</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About