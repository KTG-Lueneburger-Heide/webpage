import { CSSProperties, SVGProps } from "react";

const defaultProps : SVGProps<SVGSVGElement> = {
  width: "100%",
  height: "100% ",
  viewBox: "0 0 24 24",
  zoomAndPan: "disable",
  overflow: "visible",
}

const defaultStyle : CSSProperties = {
  stroke: '#ffffff',
  strokeWidth: "2px",
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5
}

export default function Error( props? : SVGProps<SVGSVGElement>) {

  const style = {...defaultStyle, ...props?.style };
  return (

    <svg {...{...defaultProps, ...props}} style={{...style}} xmlns="http://www.w3.org/2000/svg">
      <path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z"/>
      <path d="M12 9V13"/>
      <path d="M12 17.0195V17"/>
    </svg>

  )
}