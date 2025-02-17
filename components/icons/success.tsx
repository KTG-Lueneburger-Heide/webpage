import { SVGProps, CSSProperties } from "react";

const defaultProps : SVGProps<SVGSVGElement> = {
  width: "100%",
  height: "100% ",
  viewBox: "0 0 200 200",
  zoomAndPan: "disable",
  overflow: "visible",
}

const defaultStyle : CSSProperties = {
  stroke: '#ffffff',
  strokeWidth: "15.41px",
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5
}

export default function Success( props? : SVGProps<SVGSVGElement>) {

  const style = {...defaultStyle, ...props?.style };
  return (

    <svg {...{...defaultProps, ...props}} style={{...style}} xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1.0825,0,0,1.07996,-11.7074,-8.40765)">
          <path d="M71.287,86.31L102.893,125.508L174.585,56.351C182.362,69.093 186.983,84.288 186.983,100.296C186.983,146.706 149.304,184.386 102.893,184.386C56.482,184.386 18.802,146.706 18.802,100.296C18.802,53.885 56.482,16.205 102.893,16.205"/>
      </g>
    </svg>

  )
}