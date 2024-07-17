import { RefObject, useEffect, useRef, useState } from "react";

// Check visibility of elements 
// Source: https://dev.to/jmalvarez/check-if-an-element-is-visible-with-react-hooks-27h8

export function useIsVisible(ref : RefObject<Element>) {
    
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
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