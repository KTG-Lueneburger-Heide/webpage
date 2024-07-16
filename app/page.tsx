
import Splash from '@/components/splash'
import splashes from '@/data/splashes.yaml'
import Banner from "@/components/banner";

import Config from "@/app/app.config"

export default function Home() {

  return (
    <>        
      <Banner className="landscape:parallax-landing-landscape portrait:parallax-landing-portrait animate-blend-in animation-delay-200 opacity-0">
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
          <img src={Config.logo} className='w-[30em]'></img>
          <div className='relative'>
            <div className='h-[2px] w-0 bg-white  top-0 left-0 absolute animate-grow-width animation-delay-500'></div>
            <h2 className='font-serif text-4xl mx-7 mt-5 mb-4 opacity-0 animate-blend-scale animation-delay-500'>{Config.title}</h2>
            <div className='h-[2px] w-0 bg-white bottom-0 right-0 absolute animate-grow-width animation-delay-500'></div>
          </div>
        </div>
        
      </Banner>
      {splashes.map( (s,i) => <Splash splash={s} key={i}/>)}
    </>
  );
} 
