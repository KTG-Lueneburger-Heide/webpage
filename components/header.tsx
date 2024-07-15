"use client"

import Link from 'next/link';
import GlobalConfig from "@/app/app.config.js"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faClose } from '@fortawesome/free-solid-svg-icons'


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
      <div className={`${isExpanded ? "hidden" : ""} cursor-pointer p-4`} onClick={()=>setExpanded(true)}>
        <span className='p-2 uppercase font-sans text-lg tracking-widest'>Menü</span>
        <span className='p-0'><FontAwesomeIcon icon={faBars} /></span>
      </div>
      <div className={`${isExpanded ? "" : "hidden"} bg-lipstick-800 w-screen sm:w-64 h-screen`}>
        <div className='p-4 text-right text-lg'>
          <span onClick={()=>setExpanded(false)}><FontAwesomeIcon icon={faClose} /></span>
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
    <header id="header" className={`z-10 fixed top-0 left-0 w-screen`}>
      <h1 className={`font-serif text-lg md:text-xl p-4 transition-all duration-200 bg-lipstick-950`}>
        <Link href="index.html" className={`transition-all duration-200 ${transparent ? "invisible" : ""}`}>{GlobalConfig.title}</Link>
      </h1>
      <Menu items={menuItems} />
    </header>
  )

}