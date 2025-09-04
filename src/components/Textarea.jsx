
function Textarea({label = "", name = "", placeholder = "", className = ""}) {

    return(
        <div className="mb-2.5 flex flex-col gap-1">
            <label htmlFor={name} className="text-sm">{label}</label>
            <textarea id={name} name={name} placeholder={placeholder} className={className ? className : "resize-y min-h-24 bg-gray-50 border border-slate-300 focus:ring-[1.5px] focus:ring-indigo-600 focus:border-white rounded-lg"}></textarea>
        </div>
    )
}

export default Textarea