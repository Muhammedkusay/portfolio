
function TimelineCard({month, year, company, img, children}) {

    return(
        <div className="flex-1 relative border border-slate-300 rounded-2xl p-4 overflow-hidden">
            
            <div className="absolute -left-15 top-1/2 -translate-y-1/2 lg:-top-9 lg:left-1/2 lg:-translate-x-1/2 bg-white px-2">
                <span className="hidden lg:inline pr-1">{month}</span>
                {year}
            </div>

            <h3 className="font-bold pb-2 text-sm">{company}</h3>
            {children && <div className="h-[83%] flex flex-col text-sm">{children}</div>}

            <img src={img} alt="" className="w-44 absolute -bottom-1/3 -right-1/5 opacity-10" />
        </div>
    )
}

export default TimelineCard;