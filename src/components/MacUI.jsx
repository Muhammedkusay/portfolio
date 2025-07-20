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
import { SiPostgresql } from "react-icons/si";
import { ImQuotesLeft } from "react-icons/im";


function MacUI() {

    return(
        <div className="relative lg:w-1/2 flex flex-col gap-4 pb-4 md:pb-6 border border-slate-200 bg-gradient-to-br from-white to-slate-50 rounded-2xl md:rounded-4xl shadow-sm overflow-hidden">
            {/* tab & options */}
            <div className="px-4 pt-4 md:pt-6 flex justify-between items-center rounded-t-2xl md:rounded-t-4xl bg-slate-200 border-b border-b-slate-300">
                <div className="flex gap-1 items-center">
                    <h2 className="text-slate-700 text-sm md:text-md py-1 px-4 bg-white rounded-t-xl border-b-0 border border-slate-300">
                        Languages <span className="hidden md:inline">& Frameworks</span>
                    </h2>
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
            {/* title & img*/}
            <div className="flex items-center justify-between text-xl md:text-2xl mb-3 px-6 text-slate-600 font-semibold">
                <p>What I Know?</p>
                <div className="w-9 md:w-9 rounded-full overflow-hidden border-2 border-slate-400">
                    <img src="./src/assets/profile_2.jpg" alt="" />
                </div>
            </div>
            {/* text */}
            <p className="z-20 text-slate-700 px-6">On the frontend, I work with <b>HTML</b>, <b>CSS (Tailwind)</b>, <b>JavaScript</b>, and have experience using  <b>React</b> and <b>Alpine.js</b>.
                On the backend, I use <b>PHP</b> with the <b>Laravel</b> framework, and I manage data using <b>MySQL</b> or <b>PostgreSQL</b>.
                I'm also familiar with tools like <b>Git</b>, and deployment using <b>Railway</b> or <b>Netlify</b>.
            </p>
            <p className="hidden md:block z-20 text-slate-700 px-6">I’ve also worked with 
                <b> Python</b>, <b>Java</b>, and <b>C</b> through academic projects, algorithmic challenges, 
                and problem-solving tasks.
            </p>
            {/* quote */}
            <div>
                <ImQuotesLeft className="absolute -z-0 text-8xl right-8 -bottom-12 md:-bottom-6 text-indigo-400"/>
            </div>

            {/* <div className="flex flex-wrap justify-center gap-3 px-6">
                <FaLaravel className="text-3xl md:text-4xl text-red-600"/>
                <FaReact className="text-3xl md:text-4xl text-sky-600"/>
                <FaHtml5 className="text-3xl md:text-4xl text-orange-600"/>
                <FaCss3Alt className="text-3xl md:text-4xl text-blue-600"/>
                <FaJs className="text-3xl md:text-4xl text-yellow-400"/>
                <RiTailwindCssFill className="text-xl md:text-4xl text-sky-500"/>
                <SiMysql className="text-3xl md:text-4xl text-slate-700"/>
                <SiPostgresql className="text-xl md:text-3xl text-sky-700"/>
                <FaGitAlt className="text-3xl md:text-4xl text-orange-600"/>
                <SiAlpinedotjs className="text-3xl md:text-4xl text-emerald-600"/>
            </div>
    
            <div className="flex gap-3 justify-center px-6">
                <img src="./src/assets/python-icon.png" alt="" className="size-7 md:size-8" />
                <FaJava className="text-2xl md:text-3xl text-orange-500"/>
                <img src="./src/assets/c-icon.png" alt="" className="size-7 md:size-8" />
            </div> */}


        </div>
    )
}

export default MacUI