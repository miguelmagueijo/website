/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				"0.5": "0.125rem",
				"100vh": "100vh",
				"50px": "50px",
			},
			width: {
				"50px": "250px",
			},
			colors: {
				"primary": "#063F96",
				"secondary": "#068989",
				"primary-a": "rgba(6, 63, 150, 0.75)",
				"secondary-a": "rgba(6, 137, 137, 0.75)",
				"darkPrimary": "#FE5A1D",
				"darkSecondary": "#FFCF07",
				"darkPrimary-a": "rgba(254, 90, 29, 0.75)",
				"darkSecondary-a": "rgba(255, 207, 7, 0.75)",
				"primary3": "#D92122",
				"secondary3": "#551B8D",
				"black": "#121212",
				"pureBlack": "#000000",
			},
			padding: {
				"0.5": "0.125rem",
			}
		},
	},
	plugins: [],
}