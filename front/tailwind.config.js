/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
		backgroundColor: [
			'bg-primary-light', 
		]
	},
  },
  plugins: [],
}

