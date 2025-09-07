import { FiPlus } from "react-icons/fi";

function MacUI() {

    return(
        <div className="relative lg:w-1/2 flex flex-col gap-4 pb-4 md:pb-6 border border-slate-300 bg-white rounded-2xl md:rounded-4xl overflow-hidden">
            {/* tab & options */}
            <div className="px-4 pt-4 md:pt-6 flex justify-between items-center rounded-t-2xl md:rounded-t-4xl bg-slate-100 border-b border-b-slate-300">
                <div className="flex gap-1 items-center">
                    <h2 className="text-slate-700 text-sm md:text-md py-1 px-4 bg-white rounded-t-xl border-b-0 border border-slate-300">
                        Technical Skills Page
                    </h2>
                    <div className="text-xl text-slate-700 p-1 hover:bg-slate-200 rounded-full cursor-pointer">
                        <FiPlus />
                    </div>
                </div>
                <div className="flex gap-1">
                    <div className="size-3 rounded-full bg-emerald-500 hover:bg-emerald-300 cursor-pointer"></div>
                    <div className="size-3 rounded-full bg-orange-300 hover:bg-orange-200 cursor-pointer"></div>
                    <div className="size-3 rounded-full bg-red-500 hover:bg-red-300 cursor-pointer"></div>
                </div>
            </div>
            {/* title */}
            <p className=" text-xl md:text-2xl mt-3 px-6 text-slate-600 font-semibold">What I Know?</p>
            {/* text */}
            <p className="z-20 text-slate-700 px-6">On the frontend, I work with HTML, CSS (Tailwind), JavaScript, and have experience using React and Alpine.js.
                On the backend, I use PHP with the Laravel framework, and I manage data using MySQL or PostgreSQL.
                I'm also familiar with tools like Git, and deployment using Railway or Netlify.
            </p>
            <p className="hidden md:block z-20 text-slate-700 px-6">I’ve also worked with 
                 Python, Java, and C through academic projects, algorithmic challenges, 
                and problem-solving tasks.
            </p>

        </div>
    )
}

export default MacUI