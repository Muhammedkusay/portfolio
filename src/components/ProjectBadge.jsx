
function ProjectBadge({text, children}) {

    return(
        <div className="size-11 flex items-center justify-center gap-0.5 rounded-full bg-slate-50 border border-slate-500">

            {children && <span className="text-2xl text-slate-700">{children}</span>}
            {text && <p className="hidden md:block text-slate-700 text-sm">{text}</p>}
        </div>
    )
}

export default ProjectBadge