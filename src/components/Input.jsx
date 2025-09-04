
function Input({label = "", type = "text", name = "", placeholder = "", className = ""}) {

    return(
        <div className="mb-2.5 flex flex-col gap-1">
            {label != "" && <label htmlFor={name} className="text-sm">{label}</label>}
            <input id={name} type={type} name={name} placeholder={placeholder} className={className ? className : "bg-gray-50 focus:bg-white border border-slate-300 focus:ring-[1.5px] focus:ring-indigo-600 focus:border-white rounded-lg"}/>
        </div>
    )
}

export default Input