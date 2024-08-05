
"use client"

import Splash from '@/components/visuals/splash'
import splashes from '@/data/splashes.yaml'
import Banner from "@/components/visuals/banner";

import Config from "@/app/app.config"
import { LogoMinimal } from '@/components/icons/logo';
import Arrow from '@/components/icons/arrow';
import { useEffect, useRef, useState } from 'react';
import { useIsVisible } from '@/components/utils/visibility';
import Link from 'next/link';
import { HeaderTransparencyBorder } from '@/components/visuals/header';

export default function Home() {

  const splashRef = useRef<HTMLDivElement>(null)
  const isSplashVisible = useIsVisible(splashRef)
  const [showArrow,setShowArrow] = useState(true)
  useEffect( () => {
    if (showArrow && isSplashVisible) setShowArrow(false)
  }, [isSplashVisible])

  return (
    <>        
      <Banner className="relative landscape:parallax-landing-landscape portrait:parallax-landing-portrait animate-blend-in animation-delay-200 opacity-0 overflow-hidden z-0 landscape:min-h-[750px]">
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
          <div className='w-3/4 md:w-[25em] z-10'>
            <LogoMinimal style={{fill: "white"}}/>
          </div>
          <div className='relative max-h-[20%]'>
            <div className='h-[2px] w-0 bg-white  top-0 left-0 absolute animate-grow-width animation-delay-500'></div>
            <h2 className='font-serif text-xl md:text-4xl mx-7 mt-3 mb-2 md:mt-5 md:mb-4 opacity-0 animate-blend-scale animation-delay-500'>{Config.title}</h2>
            <div className='h-[2px] w-0 bg-white bottom-0 right-0 absolute animate-grow-width animation-delay-500'></div>
          </div>
          <h3 className='uppercase mt-7 mb-10 md:text-xl tracking-widest md:tracking-[0.225rem] animate-blend-in animation-delay-[1s] opacity-0'>Ein ganz besonderes Team</h3>
          <Link href='/join' className='text-sm md:text-base px-10 py-3 bg-lipstick-800 tracking-widest rounded hover:bg-lipstick-700 uppercase animate-blend-in animation-delay-[1s] opacity-0'>Mitglied werden</Link>
          <div className={`text-center p-2 bottom-0 absolute  translate-y-[10em] transition-opacity delay-200 duration-400 animate-slide-up animation-delay-[5s] ${showArrow ? 'opacity-100' : 'opacity-0'}`}>
            <div className='uppercase tracking-wide m-3 text-xs md:text-base'>Mehr erfahren</div>
            <Arrow className='block m-auto mb-3'/>
        </div>
        </div>
      </Banner>
      <HeaderTransparencyBorder />
      {/* The next div is needed as an ugly hack. Visibility of the Splashes is used to remove the "more" arrow as soon as
        someone scrolls
       */}
      <div className='h-[2px] bg-white'/>
      <div ref={splashRef} className='z-10'>
        {splashes.map( (s,i) => <Splash splash={s} key={i}/>)}
      </div>
    </>
  );
} 
