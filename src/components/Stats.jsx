import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Stats() {

    return(
        <div className="w-full md:w-3/4 p-4 md:p-0 mx-auto mt-12 md:mt-28">
            <h3 className="text-xl md:text-2xl mb-6 md:mb-12 flex items-center gap-2">
                <span><FaGithub className="text-2xl md:text-3xl text-slate-700"/></span>
                Github Stats
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-3 md:gap-2">
                {/* <img className="w-full" src="https://github-readme-stats.vercel.app/api?username=muhammedkusay&show_icons=true"/> */}
                <img className="w-full md:w-full mx-auto" src="https://github-readme-stats.vercel.app/api?username=muhammedkusay&show_icons=true&hide=issues&count_private=true&hide_rank=true&theme=default"/>
                <img className="w-full md:w-full mx-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=muhammedkusay&layout=compact&theme=light&langs_count=6&hide=css,scss"/>
                <a href="https://github.com/muhammedkusay" target="_blank" className="w-full h-full min-h-32 flex items-center justify-center text-gray-600 bg-gray-50 border border-dashed border-gray-400 rounded-lg hover:bg-gray-100 hover:text-gray-900">
                    View More
                    <span className="ml-2"><BsBoxArrowUpRight /></span>
                </a>
            </div>
        </div>
    )
}

export default Stats