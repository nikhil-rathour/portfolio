/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      // ...your existing theme extensions
      animation: {
        'musicBar1': 'musicBar 1s ease-in-out infinite',
        'musicBar2': 'musicBar 1.2s ease-in-out infinite',
        'musicBar3': 'musicBar 0.8s ease-in-out infinite',
        'musicBar4': 'musicBar 1.5s ease-in-out infinite',
        'text': 'text 5s ease infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
         'spin-slow': 'spin 3s linear infinite',
        'spin-slow-reverse': 'spin-reverse 3s linear infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'progress': 'progress 2s ease-in-out infinite',
      },
      keyframes: {
        musicBar: {
          '0%, 100%': { height: '4px' },
          '50%': { height: '12px' },
          
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        
         progress: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%', marginLeft: '100%' },
        },
        
      },
    },
  },
  plugins: [],
}

