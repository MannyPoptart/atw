/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'light',
			'dark',
			'coffee',
			'synthwave',
			// Custom pink/purple theme
			{
				'pinkPurpleTheme': {
					'primary': '#f472b6', // Soft pink
					'secondary': '#c084fc', // Lavender
					'accent': '#f9a8d4', // Light pink
					'neutral': '#4b5563', // Cool gray
					'base-100': '#f3e8ff', // Light lavender background
					'info': '#8b5cf6', // Soft purple
					'success': '#a78bfa', // Light purple
					'warning': '#fbbf24', // Amber for contrast
					'error': '#f43f5e', // Red-pink tone for errors
				},
			},
		],
	},
}
