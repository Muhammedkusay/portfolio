import LargeLogo from './LargeLogo'

function Footer() {
    
    return (
        <footer className="relative bg-gray-100 p-4 md:p-12 mt-24 md:mt-32 lg:mt-40">
            <div className='w-full md:w-fit mx-auto flex items-start justify-between md:justify-start md:gap-36'>
                <LargeLogo />
                <div className="flex flex-col gap-1.5">
                    <a href="/" className='hover:underline text-slate-700'>
                        Home
                    </a>
                    <a href="#about" className='hover:underline text-slate-700'>
                        About
                    </a>
                    <a href="/projects" className='hover:underline text-slate-700'>
                        Projects
                    </a>
                </div>
                <div className="flex flex-col gap-1.5">
                    <a href="https://linkedin.com/in/mkusay" target="_blank" className='hover:underline text-slate-700'>
                        Linkedin
                    </a>
                    <a href="https://github.com/muhammedkusay" target="_blank" className='hover:underline text-slate-700'>
                        Github
                    </a>
                    <a href="https://instagram.com/m_hamdo_" target="_blank" className='hover:underline text-slate-700'>
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer