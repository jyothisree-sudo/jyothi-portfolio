import React from "react";

export default function Navbar({onClickBckgroundChange, isBlackBg}) {

    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById('pro-parent-div');
        const navbarDiv = document.querySelector('.navbar-div');
        navbarDiv.style
        const navbarHeight = document.querySelector('.navbar-div').offsetHeight; // Adjust the selector based on your actual navbar class
        const projectsTop = projectsSection.offsetTop - navbarHeight;
        window.scrollTo({ top: projectsTop, behavior: 'smooth' });
    }; 

    const handleScrollToHome = () => {
        const homeSection = document.getElementById('intro-div');
        window.scrollTo({  top: homeSection, behavior: 'smooth' });
      };

    const handleScrollToSkills = () => {
        const projectsSection = document.getElementById('skills-parent-div');
        const navbarDiv = document.querySelector('.navbar-div');
        navbarDiv.style
        const navbarHeight = document.querySelector('.navbar-div').offsetHeight; // Adjust the selector based on your actual navbar class
        const projectsTop = projectsSection.offsetTop - navbarHeight;
        window.scrollTo({ top: projectsTop, behavior: 'smooth' });
    }; 

    const  downloadFile =() => {
        const link = document.createElement('a');
        link.href = 'https://port2bucket.s3.amazonaws.com/jyothisree_resume.pdf';
        link.download = 'jyothi_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className={`d-flex flex-r all-center justify-space-btw fs-12 font-mo navbar-div mr-20 ${isBlackBg ? 'navbar-div-black' : 'navbar-div-blue'}`} >
            <div>
                <img src={`${isBlackBg ? 'https://port2bucket.s3.amazonaws.com/jo_logo.svg' :'https://port2bucket.s3.amazonaws.com/jo_logo.svg'}`}
                 className="h-3r margin-left-2r margin-top-1r"/>
            </div>
            <div className="d-flex flex-r mr-20">
                <div onClick={handleScrollToHome}>
                    <p className="pointer m-1-r margin-top-15 font-mo">
                        Home
                    </p>
                </div>
                <div onClick={handleScrollToProjects}>
                    <p className="pointer m-1-r margin-top-15">
                        Projects
                    </p>
                </div>
                <div onClick={handleScrollToSkills}>
                    <p className="pointer m-1-r margin-top-15">
                        Skills
                    </p>
                </div>
                
                <button className="download-button m-1-r" onClick={downloadFile}>
                    Download CV
                </button>
                
                <div className={`${isBlackBg? 'mode-icon-black' : 'mode-icon-blue'}`}>
                    <img src={`${isBlackBg ? 
                    'https://port2bucket.s3.amazonaws.com/bulb.webp'
                    :'https://cdn-icons-png.freepik.com/512/6714/6714961.png'}`}
                    onClick={onClickBckgroundChange}
                    className="br-2"/>
                </div>

            </div>
        </div>
    );
}
//this