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
              backgroundImage: value,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
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
