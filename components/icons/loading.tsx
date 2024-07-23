import { CSSProperties } from "react";

 export default function LoadingIcon( {
  primaryColor = 'var(--color-primary-loading)', 
  secondaryColor = 'var(--color-secondary-loading)', 
  background = 'none',
  keyframe = 'spin'
}) {

  const backgroundStyle : CSSProperties = {
    margin: 'initial', 
    display: 'block',  
    background: background,
    shapeRendering: 'auto'
  } ;

  const majorStyle = {
    strokeWidth: '1px',
    fill: primaryColor // 'rgb(225, 92, 100)'
  }

  const minorStyle = {
    strokeWidth: '1px',
    fill: secondaryColor //'rgb(244, 126, 95)'
  }

  // Keyframe needs to be defined in global.css for animation to work

  return (
    <svg xmlSpace="preserve" viewBox="0 0 100 100" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1"
      version="1.1" style={backgroundStyle} preserveAspectRatio="xMidYMid" width="200" height="200">
      <g style={{transformOrigin: '50% 50% 0px', transform: 'rotate(0deg) scale(0.8)'}} className="ldl-scale">
        <g className="ldl-ani">
          <g className="ldl-layer">
            <g className="ldl-ani"
              style={{transformBox: 'view-box', opacity: 1, transformOrigin: '50px 50px 0px', transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', animation: `1s linear -0.625s infinite forwards ${keyframe}`}}>
              <path fill="#e15c64"
                d="M92.5 50c0 7.2-1.9 14.4-5.4 20.7C79.6 84.2 65.4 92.5 50 92.5c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3 13.2 0 25.5-7.2 31.9-18.7 3-5.4 4.6-11.6 4.6-17.8 0-6.6-1.8-13.1-5.2-18.7-.8-1.4-.4-3.2 1-4.1 1.4-.8 3.2-.4 4.1 1 4 6.6 6.1 14.1 6.1 21.8z"
                style={majorStyle}></path>
            </g>
          </g>
          <g className="ldl-layer">
            <g className="ldl-ani"
              style={{
                transformBox: 'view-box', 
                opacity: 1, 
                transformOrigin: '50px 50px 0px', 
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', 
                animation: `1s linear -0.75s infinite forwards ${keyframe}`}}>
              <path fill="#e15c64"
                d="M18.6 31.3c6.6-11 18.6-17.8 31.4-17.8 1.6 0 3-1.3 3-3s-1.3-3-3-3c-14.9 0-28.9 7.9-36.5 20.7-3.9 6.6-6 14.1-6 21.8 0 7.2 1.9 14.4 5.4 20.7.5 1 1.6 1.5 2.6 1.5.5 0 1-.1 1.4-.4 1.4-.8 1.9-2.6 1.1-4-3-5.4-4.6-11.6-4.6-17.8 0-6.6 1.8-13.1 5.2-18.7z"
                style={majorStyle}></path>
            </g>
          </g>
          <g className="ldl-layer">
            <g className="ldl-ani"
              style={{transformBox: 'view-box', opacity: 1, transformOrigin: '50px 50px 0px', transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', animation: `1s linear -0.875s infinite forwards ${keyframe}`}}>
              <path fill="#f47e5f"
                d="M53 74.7c0-1.6-1.3-3-3-3-7.9 0-15.3-4.3-19.1-11.3-1.7-3.2-2.7-6.8-2.7-10.4 0-4 1.1-7.9 3.2-11.3.9-1.4.4-3.2-1-4.1-1.4-.9-3.2-.4-4.1 1-2.6 4.3-4 9.3-4 14.4 0 4.6 1.2 9.2 3.4 13.3 4.9 8.9 14.2 14.4 24.3 14.4 1.6 0 3-1.4 3-3z"
                style={minorStyle}></path>
            </g>
          </g>
          <g className="ldl-layer">
            <g className="ldl-ani"
              style={{transformBox: 'view-box', opacity: 1, transformOrigin: '50px 50px 0px', transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', animation: `1s linear -1s infinite forwards ${keyframe}`}}>
              <path fill="#f47e5f"
                d="M47 25.3c0 1.6 1.3 3 3 3 7.6 0 14.6 3.9 18.6 10.4 2.1 3.4 3.2 7.3 3.2 11.3 0 3.6-.9 7.3-2.7 10.4-.8 1.4-.3 3.2 1.2 4 .5.2.9.4 1.4.4 1 0 2.1-.6 2.6-1.5 2.2-4 3.4-8.6 3.4-13.3 0-5.1-1.4-10.1-4-14.4-5.1-8.3-14-13.3-23.7-13.3-1.6 0-3 1.4-3 3z"
                style={minorStyle}></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export function SuccessIcon({color = 'white'}) {

  const style = {
    fill:'none',
    stroke:color,
    strokeWidth: '15px'
  }
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{fillRule: 'evenodd',clipRule:'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit:'1.5'}}>
      <g transform="matrix(1.0825,0,0,1.07996,-11.7074,-8.40765)">
        <path d="M71.287,86.31L102.893,125.508L174.585,56.351C182.362,69.093 186.983,84.288 186.983,100.296C186.983,146.706 149.304,184.386 102.893,184.386C56.482,184.386 18.802,146.706 18.802,100.296C18.802,53.885 56.482,16.205 102.893,16.205" style={style}/>
      </g>
    </svg>
  )

}