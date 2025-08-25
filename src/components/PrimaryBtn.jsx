
function PrimaryBtn({text, href, width, target="_self", children}) {

    return (
        <a href={href} style={{width: width}} target={target} className="flex items-center justify-center px-4 py-2.5 rounded-full text-indigo-50 bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
            <span>{text}</span>
            <span>{children}</span>
        </a>
    )
}

export default PrimaryBtn;