"use client"

import Header from "@/components/header";
import { useEffect, useState, useRef, RefObject } from "react";
import ReactMarkdown from 'react-markdown';
import type { SplashData } from "@/data/datatypes";
import splashes from '@/data/splashes.yaml'
import Sponsors from "@/components/sponsors";
import SocialMedia from "@/components/social";

export default function Home() {

  // Check visibility of the banner element
  // Source: https://dev.to/jmalvarez/check-if-an-element-is-visible-with-react-hooks-27h8
  const bannerRef = useRef<HTMLDivElement>(null);

  const isBannerVisible = useIsVisible( bannerRef )
  function useIsVisible(ref : RefObject<Element>) {
    
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );
      if (ref && ref.current) observer.observe(ref.current);
    }, [ref]);
  
    return isIntersecting;
  }

  // Splash elements in the landing page
  const Splash = ({splash} : {splash : SplashData} ) => {

    return (
      <div className="odd:bg-oxford-blue-950 bg-oxford-blue-900 flex flex-col lg:flex-row lg:odd:flex-row-reverse text-center lg:odd:text-right lg:even:text-left">
        <div className="w-full lg:w-2/5">
          {splash.img ? <img className="w-full" src={splash.img} alt={splash.img_alt}/> : <></>}
          {splash.video ? <video src={splash.video} controls={true} poster={splash.video_alt}></video>: <></>}
        </div>
        <div className="px-4 lg:px-[4em] pt-4 lg:pt-[2em] pb-6 w-full lg:w-3/5 justify-center flex flex-col">
          <h2 className="mb-4 uppercase font-sans tracking-[0.225em] font-extrabold text-lg lg:text-2xl">{splash.title}</h2>
          <div className="text-base lg:text-lg leading-relaxed tracking-wider"><ReactMarkdown>{splash.body}</ReactMarkdown></div>
        </div>
      </div>
    )
  }

  return (
    <>
    <Header transparent={isBannerVisible}/>
    <main className="flex min-h-screen flex-col items-center justify-start p-0">
      <div id="page-wrapper" className="bg-landing-landscape w-screen h-screen overflow-scroll bg-center bg-cover bg-no-repeat">
        <div className="h-screen" ref={bannerRef}>

        </div>
        {splashes.map( (s,i) => <Splash splash={s} key={i}/>)}
        <footer>
          <Sponsors/>
          <SocialMedia/>
          <ul className="pb-20 text-center uppercase tracking-widest bg-oxford-blue-900 text-oxford-blue-500">
            <li className="p-4">© 2024 KTG Lüneburger Heide</li>
          </ul>
        </footer>
        
      </div>
    </main>
    </>
  );
} 
