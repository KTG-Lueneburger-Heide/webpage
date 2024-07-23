"use client"

import { PropsWithChildren, ReactNode, RefObject, useEffect, useRef, useState } from 'react'
import { useIsVisible } from '../utils/visibility'

type BannerProps = {
  className? : string
}

export default function Banner(
  { 
    children,
    className = ""
  } : PropsWithChildren<BannerProps>
) {
  
  
  return (
    <div id="banner"  className={`h-screen w-screen ${className}`}>
      {children}
    </div>
  )
}