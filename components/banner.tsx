import { RefObject, useEffect, useRef, useState } from 'react'
import styles from './banner.module.css'

export default function Banner({onVisibilityChange} : { onVisibilityChange : (isVisible : boolean) => void} ) {

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
    <div className="h-screen" ref={bannerRef}>

    </div>
  )
}