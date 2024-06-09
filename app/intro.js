import React from "react";
export default function IntroDiv({isBlackBg}){
    return(
        <div className={`d-flex flex-r all-center j-c-space-around  h-110v p-all-100 font-mo intro-main-div ${isBlackBg ? 'top-bg-black' : 'top-bg-blue'}`} id='intro-main-div'>
            <h2 className="fs-20 intro-hello-mobile">Hello...! It's </h2>
            <h1 className="fs-30 fw-bold intro-hello-mobile">Jyothisree</h1>
            <div className={`${isBlackBg ? 'intro-img-div-mobile-black' : 'intro-img-div-mobile'}`}>
            </div>
            <div className="name-intro">
                <h2 className="fs-20 intro-hello-web">Hello...! It's</h2>
                <h1 className="fs-30 fw-bold intro-hello-web">Jyothisree</h1>
                <h2 className="fs-20">Frontend Developer in Bengaluru</h2>
                <h2 className="pointer fs-20"> SDE @ <a href="https://www.zivame.com" target="_blank" className="text-underline ">ZIVAME</a></h2>
            </div>
            <div className={`${isBlackBg ? 'intro-img-div-black' : 'intro-img-div'}`}>
            </div>
        </div>
    )
}
