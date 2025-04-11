/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'shadows-into-light': ['"Shadows Into Light"', 'cursive'],
      },
      colors: {
        base100: 'oklch(22% 0.019 237.69)', 
        base200: 'oklch(20% 0.019 237.69)', 
        base300: 'oklch(18% 0.019 237.69)', 
        baseContent: 'oklch(77.383% 0.043 245.096)',
        primary: 'oklch(84% 0.143 164.978)', 
        primaryContent: 'oklch(14.94% 0.031 39.947)', 
        secondary: 'oklch(72.537% 0.177 2.72)', 
        secondaryContent: 'oklch(14.507% 0.035 2.72)', 
        accent: 'oklch(71.294% 0.166 299.844)', 
        accentContent: 'oklch(14.258% 0.033 299.844)', 
        neutral: 'oklch(26% 0.019 237.69)', 
        neutralContent: 'oklch(70% 0.019 237.69)', 
        info: 'oklch(85.559% 0.085 206.015)', 
        infoContent: 'oklch(17.111% 0.017 206.015)', 
        success: 'oklch(85.56% 0.085 144.778)', 
        successContent: 'oklch(17.112% 0.017 144.778)', 
        warning: 'oklch(85.569% 0.084 74.427)', 
        warningContent: 'oklch(17.113% 0.016 74.427)', 
        error: 'oklch(85.511% 0.078 16.886)', 
        errorContent: 'oklch(17.102% 0.015 16.886)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        sunset: {
          primary: 'oklch(84% 0.143 164.978)',
          'primary-content': 'oklch(14.94% 0.031 39.947)',
          secondary: 'oklch(72.537% 0.177 2.72)',
          'secondary-content': 'oklch(14.507% 0.035 2.72)',
          accent: 'oklch(71.294% 0.166 299.844)',
          'accent-content': 'oklch(14.258% 0.033 299.844)',
          neutral: 'oklch(26% 0.019 237.69)',
          'neutral-content': 'oklch(70% 0.019 237.69)',
          'base-100': 'oklch(22% 0.019 237.69)',
          'base-content': 'oklch(77.383% 0.043 245.096)',
          info: 'oklch(85.559% 0.085 206.015)',
          'info-content': 'oklch(17.111% 0.017 206.015)',
          success: 'oklch(85.56% 0.085 144.778)',
          'success-content': 'oklch(17.112% 0.017 144.778)',
          warning: 'oklch(85.569% 0.084 74.427)',
          'warning-content': 'oklch(17.113% 0.016 74.427)',
          error: 'oklch(85.511% 0.078 16.886)',
          'error-content': 'oklch(17.102% 0.015 16.886)',
        },
      },
    ],
    darkTheme: 'sunset', // You can set it as your default theme
  },
};