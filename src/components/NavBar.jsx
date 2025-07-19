import ContactBtn from "./ContactBtn.jsx";
import LargeLogo from "./LargeLogo.jsx";

function NavBar() {

    return(
        <nav>
            <header className="md:w-4/5 mx-auto py-4 px-4 md:px-0 flex items-center justify-between">
                <LargeLogo size="3xl"/>
                <ContactBtn />
            </header>
        </nav>
    )
}

export default NavBar;