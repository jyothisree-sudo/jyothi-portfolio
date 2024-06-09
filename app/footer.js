'use client'

import React, { useState } from "react";
export default function Footer({isBlackBg}){
    const onClickEmailIcon = () =>{
        window.location = 'mailto:jyothisree327@gmail.com'
    }
    return(
        <div className={`d-flex flex-r all-center justify-center footer-div ${isBlackBg ? 'bg-dark-white' : 'bg-voilet'}`}>
            <div className="d-flex flex-r all-center">
                <div className="margin-b-1r">
                    <p>______________________</p>
                </div>
                <div className="d-flex flex-r pointer">
                    <div className="intro-circle-button  m-1-r" onClick={onClickEmailIcon}>
                        <img src={`${isBlackBg ? 'https://port2bucket.s3.amazonaws.com/bw-email.svg' : 'https://port2bucket.s3.amazonaws.com/jo_email.svg'}`}
                         className="intro-icon-img pointer" width={'1rem'} height={'2rem'}/>
                    </div>
                    <a href='https://www.linkedin.com/in/jyothisree327/' target="_blank">
                    <div className="intro-circle-button  m-1-r">
                        <img
                        src={`${isBlackBg ? 'https://port2bucket.s3.amazonaws.com/bw-linkedin.svg' : 'https://port2bucket.s3.amazonaws.com/jo_linkedin.svg'}`}
                         className="intro-icon-img pointer" width={'1rem'} height={'2rem'}/>
                    </div>
                    </a>
                    <a target="_blank"
                        href='https://www.google.com/maps/place/SVNS+VENKATA+NAMRUTHA+NEW+LADIES+PG/@12.9709805,77.6542625,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae11d69ccef3c5:0xaede3027f7b93c33!8m2!3d12.9709753!4d77.6568374!16s%2Fg%2F11frrgtpqq?entry=ttu'>
                        <div className="intro-circle-button  m-1-r">
                            <img 
                            src={`${isBlackBg ? 'https://port2bucket.s3.amazonaws.com/bw-location.svg' : 'https://port2bucket.s3.amazonaws.com/jo_location.svg'}`}
                            className="intro-icon-img pointer" width={'1rem'} height={'2rem'}/>
                        </div>
                    </a>
                   
                </div>
                <div className="margin-b-1r">
                    <p>______________________</p>
                </div>
            </div>
            
        </div>
    )
}
