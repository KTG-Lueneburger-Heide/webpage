
import Splash from '@/components/splash'
import splashes from '@/data/splashes.yaml'

import Banner from "@/components/banner";

export default function Home() {

  return (
    <>        
      <Banner className="landscape:parallax-landing-landscape portrait:parallax-landing-portrait"/>
      {splashes.map( (s,i) => <Splash splash={s} key={i}/>)}
    </>
  );
} 
