import { SplashData } from "@/data/datatypes"
import ReactMarkdown from "react-markdown"

// Splash elements in the landing page
export default function Splash({splash} : {splash : SplashData} ) {

  return (
    <div className="odd:bg-oxford-blue-950 bg-oxford-blue-900 flex flex-col lg:flex-row lg:odd:flex-row-reverse text-center lg:odd:text-right lg:even:text-left w-full">
      {/* <div className="w-full lg:w-2/5 lg:max-h-[40rem] text-right">
        {splash.img ? <img className="w-full h-full object-contain" src={splash.img} alt={splash.img_alt}/> : <></>}
        {splash.video ? <video  className="w-full" src={splash.video} controls={true} poster={splash.video_alt}></video>: <></>}
      </div> */}
        {splash.img ? <img className="w-full lg:w-auto lg:max-w-[40%] lg:max-h-[40rem] object-contain" src={splash.img} alt={splash.img_alt}/> : <></>}
        {splash.video ? <video  className="w-full py-0 lg:w-auto lg:max-w-[40%] lg:max-h-[40rem] object-contain" src={splash.video} controls={true} poster={splash.video_alt}></video>: <></>}
    
      <div className="px-4 lg:px-[4em] pt-10 lg:pt-[2em] pb-14 w-full lg:w-3/5 justify-center flex flex-col">
        <h2 className="mb-4 uppercase font-sans tracking-[0.225em] font-extrabold text-lg lg:text-2xl">{splash.title}</h2>
        <div className="text-base lg:text-lg leading-relaxed tracking-wider"><ReactMarkdown>{splash.body}</ReactMarkdown></div>
      </div>
    </div>
  )
  
}
