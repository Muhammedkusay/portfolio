
function SecondaryBtn({text, href, children}) {

    return (
        <a href={href} className="flex items-center w-fit px-4 py-2.5 rounded-full text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-gray-200 cursor-pointer">
            <span>{text}</span>
            <span>{children}</span>
        </a>
    )
}

export default SecondaryBtn;