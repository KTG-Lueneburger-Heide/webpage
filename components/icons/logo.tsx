import { CSSProperties } from "react";

type LogoProps = {
  style? : CSSProperties | undefined;
  backgroundStyle? : CSSProperties | undefined;
}

export function LogoMinimal( 
  {
    style = {fill: 'rgb(0,0,0)'},
    backgroundStyle = { fill: 'transparent'}
  } : LogoProps 
) {

  const baseStyle : CSSProperties = {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    strokeLinejoin: 'round',
    strokeMiterlimit:2
  }

  return (
      <svg width="100%" height="100%" viewBox="0 0 722 652" version="1.1" xmlns="http://www.w3.org/2000/svg" style={baseStyle}>
      <g transform="matrix(1,0,0,1,-1172.59,-1910.83)">
          <g id="Artboard1" transform="matrix(1.15348,0,0,1.27689,-300.628,-667.458)">
              <rect x="1277.2" y="2019.19" width="625.2" height="510.006" style={backgroundStyle}/>
              <g transform="matrix(0.845974,0,0,0.797198,2372.16,2485.37)">
                  <g transform="matrix(1.23299,0,0,1.18196,-1181.35,-500.448)">
                      <path d="M198.806,33.514C-79.995,130.38 271.343,76.641 440.294,65.442C-180.957,185.209 12.634,58.197 198.806,33.514Z" style={style}/>
                  </g>
                  <g transform="matrix(1.23299,0,0,1.18196,-1187.52,-500.448)">
                      <path d="M208.933,122.459C29.952,116.642 166.451,262.654 204.588,276.148C144.73,178.238 154.485,152.343 208.933,122.459Z" style={style}/>
                  </g>
                  <g transform="matrix(1.23299,0,0,1.18196,-1179.24,-495.744)">
                      <path d="M176.543,278.338C159.001,359.405 183.5,375.816 204.37,383.346C170.143,390.364 147.457,344.514 160.153,261.207C168.43,251.569 174.99,270.145 176.543,278.338Z" style={style}/>
                  </g>
                  <g transform="matrix(1.23299,0,0,1.18196,-1199.06,-522.061)">
                      <circle cx="226.603" cy="253.405" r="25.117" style={style}/>
                  </g>
              </g>
          </g>
      </g>
      </svg>
  )
}