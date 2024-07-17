"use client"

import { PropsWithChildren, ReactNode, RefObject, useEffect, useRef, useState } from 'react'
import { useIsVisible } from '../utils/visibility'

type BannerProps = {
  onVisibilityChange? : (isVisible : boolean) => void,
  className? : string
}

export default function Banner(
  { 
    onVisibilityChange = () => {},
    children,
    className = ""
  } : PropsWithChildren<BannerProps>
) {
  
  const bannerRef = useRef<HTMLDivElement>(null)
  const isBannerVisible = useIsVisible(bannerRef)
  useEffect( () => {
    onVisibilityChange(isBannerVisible)
  }, [isBannerVisible])
  
  return (
    <div id="banner"  className={`h-screen w-screen ${isBannerVisible ? "onScreen" : "offScreen"} ${className}`} ref={bannerRef}>
      {children}
    </div>
  )
}