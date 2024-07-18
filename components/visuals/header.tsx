"use client"

import Link from 'next/link';
import GlobalConfig from "@/app/app.config.js"
import { Suspense, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faClose, faSpinner } from '@fortawesome/free-solid-svg-icons'


type MenuProps = {
  items :{
    name: String,
    link: String
  }[]
}

const Menu = ( { items } : MenuProps) => {

  const [isExpanded, setExpanded] = useState(false)

  return (
    <nav  id="nav" className='absolute top-0 right-0'>
        <div className="cursor-pointer p-4 text-lg" onClick={()=>setExpanded(true)} hidden={isExpanded}>
          <span className='p-2 uppercase font-sans tracking-widest'>Menü</span>
          <span className='p-0'><FontAwesomeIcon className="inline align-[-2px]" icon={faBars} height="1em"/></span>
        </div>
        <div className='bg-lipstick-800 w-screen sm:w-64 h-screen' hidden={!isExpanded}>
          <div className='p-4 text-right text-lg'>
            <FontAwesomeIcon icon={faClose}  onClick={() => setExpanded(false)}/>
          </div>
        </div>
    </nav>
  )
}

export default function Header({transparent=true}) {

  const menuItems = [
    {name: "Home", link: "index.html"},
    {name: "Team", link: "team.html"},
    {name: "Aktuelles", link: "#"}
  ]
  //${transparent ? "bg-transparent" : "bg-lipstick-950"}
  return (
    <header id="header" className={`fixed top-0 left-0 w-screen opacity-0 animate-blend-in animation-delay-200 z-20`}>
      <h1 className={`font-serif text-lg md:text-xl p-4 hidden transition-all duration-200 bg-lipstick-950`}>
        <Link href="index.html" className={`transition-all duration-200`}>{GlobalConfig.title}</Link>
      </h1>
      <Suspense fallback={<FontAwesomeIcon icon={faSpinner} width={20}/>}>
        <Menu items={menuItems} />
      </Suspense>
      
    </header>
  )

}