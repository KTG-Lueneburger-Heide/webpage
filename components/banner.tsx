"use client"

import { PropsWithChildren, ReactNode, RefObject, useEffect, useRef, useState } from 'react'

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

  useEffect( () => {
    onVisibilityChange(isBannerVisible)
  }, [isBannerVisible])
  
  return (
    <div id="banner"  className={`h-screen w-screen ${isBannerVisible ? "onScreen" : "offScreen"} ${className}`} ref={bannerRef}>
      {children}
    </div>
  )
}