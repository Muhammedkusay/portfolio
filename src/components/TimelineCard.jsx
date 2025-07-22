
function TimelineCard({month, year, company, children}) {

    return(
        <div className="flex-1 relative border border-slate-300 rounded-2xl p-4">
            
            <div className="absolute -left-15 top-1/2 -translate-y-1/2 lg:-top-9 lg:left-1/2 lg:-translate-x-1/2 bg-white px-2">
                <span className="hidden lg:inline pr-1">{month}</span>
                {year}
            </div>

            <h3 className="font-bold pb-2">{company}</h3>
            {children && <div className="h-[83%] flex flex-col">{children}</div>}
        </div>
    )
}

export default TimelineCard;