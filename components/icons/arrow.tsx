import { SVGProps } from "react";

const defaultProps : SVGProps<SVGSVGElement> = {
  width: "30px",
  height: "30px",
  viewBox: "0 0 30 30",
  zoomAndPan: "disable",
  overflow: "visible",
  preserveAspectRatio: "none",
  style: {
    stroke: '#ffffff',
    strokeWidth: 3
  }
}

export default function Arrow( props? : SVGProps<SVGSVGElement>) {

  return (

    <svg xmlns="http://www.w3.org/2000/svg" {...{...defaultProps, ...props}} >
      <line x1="0" y1="15" x2="15" y2="30" />
      <line x1="30" y1="15" x2="15" y2="30" />
      <line x1="15" y1="30" x2="15" y2="0" />
    </svg>

  )
}