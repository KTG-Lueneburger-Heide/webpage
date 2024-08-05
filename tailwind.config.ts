import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'lipstick': {
        '50': '#fef1fb',
        '100': '#fee5f8',
        '200': '#ffcbf4',
        '300': '#ffa0e8',
        '400': '#ff66d6',
        '500': '#fc38c1',
        '600': '#ec16a1',
        '700': '#ce0883',
        '800': '#b60b73',
        '900': '#8d0e5b',
        '950': '#570035',
      },
      'oxford-blue': {
        '50': '#f3f7f8',
        '100': '#e0e9ed',
        '200': '#c4d4dd',
        '300': '#9cb7c4',
        '400': '#6b90a5',
        '500': '#50748a',
        '600': '#456175',
        '700': '#3d5161',
        '800': '#384652',
        '900': '#2e3842',
        '950': '#1e262e',
      },
      'black': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#000000',
      },
    },
    fontFamily: {
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
      'serif': ['Alkatra', 'ui-serif', 'Georgia'],
      'poppins' : ['Poppins']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "landing-landscape": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/banner-1.png")',
        "landing-portrait": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/banner-2-small.jpg")',
        "team": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/team_photo.jpg")',
        "team-portrait": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/team_photo_portrait.jpg")',
        "pink-splash-full": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/pink_splash_2xl.jpg")',
        "pink-splash-lg": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/pink_splash_lg.jpg")',
        "pink-splash-md": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/pink_splash_md.jpg")',
        "pink-splash-sm": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/pink_splash_sm.jpg")',
        "pink-splash-portrait-full": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/pink_splash_portrait_2xl.jpg")',
        "pink-splash-portrait-lg": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/pink_splash_portrait_lg.jpg")',
        "pink-splash-portrait-md": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/pink_splash_portrait_md.jpg")',
        "pink-splash-portrait-sm": 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/backgrounds/pink_splash_portrait_sm.jpg")',
      },
      transitionProperty: {
        'width': 'width'
      },
      keyframes: {
        'grow-width': {
          '0%' : { width: '0%' },
          '100%' : { width: '100%'}
        },
        'blend-scale': {
          from : { transform: 'scale(0.75)', opacity: '0'},
          to : { transform: 'scale(1)', opacity: '1' }
        },
        'blend-in': {
          from : { opacity: '0'},
          to : { opacity: '1' }
        },
        'slide-up': {
          from: { transform: 'translateY(10em)'},
          to: { transform: 'translate(0)'}
        },
        'spin': {
          '0.00%' : {
            'animation-timing-function': 'cubic-bezier(0.62,0.01,0.92,0.40)',
            transform: 'translate(0.00px,0.00px) rotate(0.00deg) scale(1.00, 1.00) skew(0deg, 0.00deg)',
            opacity: '1.00'
          },
          '50.00%': {
            'animation-timing-function': 'cubic-bezier(0.08,0.60,0.39,0.97)',
            transform: 'translate(0.00px,0.00px) rotate(180.00deg)'
          },
          '100.00%': {
            'animation-timing-function': 'cubic-bezier(0.08,0.60,0.39,0.97)',
            transform: 'translate(0.00px,0.00px) rotate(360.00deg)'
          } 
        }
      },
      animation: {
        'grow-width': "grow-width 0.85s ease forwards",
        'blend-scale': "blend-scale 0.5s forwards",
        'blend-in': "blend-in 0.5s forwards",
        'slide-up': "slide-up 2s forwards"
      },
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        1000: '1000ms'
      }
    },
  },
  plugins: [
    plugin(function({matchUtilities, theme}) {
      matchUtilities(
        {
          parallax: (value) => ({
            '@supports  (-webkit-touch-callout : none)': {
              backgroundImage: value,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            },
            '@supports not (-webkit-touch-callout : none)': {
              '&::before': {
                content: '""',
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                backgroundImage: value,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                zIndex: '0'
              },
              background: 'transparent'
            }
          })
        },
        { values: theme('backgroundImage') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) { 
      matchUtilities({
        'animation-delay': (value) => ({
            animationDelay: value,
        }),
    }, {
        values: theme('animationDelay'),
        supportsNegativeValues: true,
    });
    }),
  ],
};
export default config;
