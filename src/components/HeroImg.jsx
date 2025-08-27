import ProfilePic from "/assets/profile_picture.webp"


function HeroImg() {

    return(
        <div className="w-full md:w-5/12 pt-6 md:pt-0">
            <img src={ProfilePic} 
                alt="Profile"    
                className="grayscale drop-shadow-slate-300 drop-shadow-2xl opacity-95"/>
        </div>
    )
}

export default HeroImg