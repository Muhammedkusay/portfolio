
function ProgrammingBadget({text, children}) {

    return(
        <div className="size-24 md:size-21 flex flex-col items-center justify-center gap-0.5 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-300">

            {children && <span className="text-2xl text-slate-700">{children}</span>}
            {text && <p className="text-slate-700 text-sm">{text}</p>}
        </div>
    )
}

export default ProgrammingBadget