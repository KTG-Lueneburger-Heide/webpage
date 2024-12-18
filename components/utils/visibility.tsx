import { RefObject, useEffect, useState } from "react";

// Check visibility of elements 
// Source: https://dev.to/jmalvarez/check-if-an-element-is-visible-with-react-hooks-27h8

export function useIsVisible(ref : RefObject<Element>, initialValue = true, threshold = 0.1, rootMargin = "0px 0px 0px 0px") {
    
  const [isIntersecting, setIntersecting] = useState(initialValue);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, {threshold, rootMargin});
    if (ref && ref.current) observer.observe(ref.current);
  }, [ref]);

  return isIntersecting;

}

export type VisibilityObserverProps = {
  onVisibilityChange : (isVisible : boolean) => void,
  ref : RefObject<Element>
}
export default function VisibilityObserver(
  { 
    onVisibilityChange,
    ref
  } : VisibilityObserverProps
) {

  const isVisible = useIsVisible( ref )
  

  useEffect( () => {
    onVisibilityChange(isVisible)
  }, [isVisible])
  
  return (<></>)
}