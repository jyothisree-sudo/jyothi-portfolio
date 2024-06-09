'use client'
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './navbar';
import IntroDiv from './intro';
import Footer from './footer';
import './webfontkit-20240310-131230/stylesheet.css';
import Projects from './projects';
import Skills from './skills';

export default function Home() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isBlackBg, setIsBlackBg] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null); // Explicitly type the ref

  const onClickBckgroundChange = () => {
    setIsBlackBg(prevState => !prevState);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      console.log('is intersecting = ', entry.isIntersecting);
    });
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current?.querySelectorAll("h2").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current?.querySelectorAll("h2").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  console.log('ref in home', ref);

  return (
    <div className='d-flex f-d-column c-white' id='portfolio'>
      <div className={`pos-fixed r-0 h-3r w-3r ${isBlackBg ? 'mode-icon-black' : 'mode-icon-blue'}`}>
        <img src={`${isBlackBg ? 'https://port2bucket.s3.amazonaws.com/bulb.webp' :'https://cdn-icons-png.freepik.com/512/6714/6714961.png'}`}
             onClick={onClickBckgroundChange}
             className={`${isBlackBg ? 'mode-black-img':''}`}/>
      </div>
      <Navbar onClickBckgroundChange={onClickBckgroundChange} isBlackBg={isBlackBg}/>
      <div id='intro-div'>
        <IntroDiv isBlackBg={isBlackBg} onClickBckgroundChange={onClickBckgroundChange} />
      </div>
      <div id='skills-parent-div'>
        <Skills isBlackBg={isBlackBg}/>
      </div>
      <div id='pro-parent-div' ref={ref}>
        <Projects isBlackBg={isBlackBg} />
      </div>
      <Footer isBlackBg={isBlackBg}/> 
    </div> 
  );
}
