const Header = () =>{
    return(
        <div className="container text-justify">
            <h1 className="text-6xl"><span className="text-secondary">SAROJ</span> <span className="text-primary">WASTI</span></h1>
            <h2 className="text-2xl"><span className="text-secondary">SOFTWARE</span> <span className="text-primary">DEVELOPER</span></h2>
            <div className="">
                <ul className="flex pt-2 space-x-4 text-tert text-2xl">
                    <a target="_blank" href="https://www.linkedin.com/in/saroj-wasti" className="hover:text-blue-500"><i class="fab fa-linkedin-in"></i></a>
                    <a target="_blank" href="https://www.instagram.com/sarojwasti" className="hover:text-orange-500"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" href="https://twitter.com/Sarozwosti" className="hover:text-blue-500"><i class="fab fa-twitter"></i></a>
                    <a target="_blank" href="https://github.com/SarojWasti" className="hover:text-black"><i class="fab fa-github"></i></a>
                </ul> 
            </div>
            <p>I am a results-driven Software Developer with a strong passion for research, problem-solving, and programming. Constantly seeking opportunities to enhance my skills and efficiency, I am dedicated to building high-quality, scalable solutions. I thrive in dynamic environments and am always eager to embrace new technologies and challenges.</p>
            <hr className="mt-2"/>
        </div>
        
    );
}
export default Header;