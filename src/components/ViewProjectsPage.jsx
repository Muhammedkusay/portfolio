import illustration from "/assets/illustration.webp"

function ViewProjectsPage() {

    return(
        <a href="/" className="w-full py-4 md:py-0 flex flex-col items-center justify-center border bg-gradient-to-t from-indigo-50/50 via-white to-white border-slate-200 hover:border-slate-400 rounded-3xl overflow-hidden">
            <img src={illustration} alt="view all project" className="w-10/12 md:w-80"/>
            <p className="text-xl md:text-3xl text-indigo-600 pt-6">View All Project</p>
        </a>
    )
}

export default ViewProjectsPage