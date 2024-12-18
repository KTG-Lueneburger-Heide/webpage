"use client"

import { PropsWithChildren, useRef, CSSProperties, RefObject } from 'react';

import { useIsVisible } from '../utils/visibility';

type StickyContainerProps = {
  top: number,
  className?: string,
  root?: RefObject<HTMLDivElement>
}

export function StickyContainer( {top,children,root,className} : StickyContainerProps & PropsWithChildren) {

  const ref = useRef<HTMLDivElement>(null)
  const isSticky = !useIsVisible(root || ref, true, 0, `0px 0px 0px 0px`)
  
  const style : CSSProperties = {
    top: `${top}px`,
    position: "sticky"
  }

  return (
    <div className={`${className}${isSticky ? " isSticky" : ""}`} ref={ref} style={style} >
      {children}
    </div>
  )
}