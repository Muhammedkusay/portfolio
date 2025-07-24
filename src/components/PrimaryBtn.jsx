
function PrimaryBtn({text, href, children}) {

    return (
        <a href={href} className="flex items-center w-fit px-4 py-2.5 rounded-full text-indigo-50 bg-gradient-to-br from-indigo-400 to-indigo-600 hover:from-40% cursor-pointer">
            <span>{text}</span>
            <span>{children}</span>
        </a>
    )
}

export default PrimaryBtn;