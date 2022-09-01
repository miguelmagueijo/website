/** @type {import('tailwindcss').Config} */
module.exports = {
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
				"primary2": "#FE5A1D",
				"secondary2": "#FFCF07",
				"primary3": "#D92122",
				"secondary3": "#551B8D",
				"primary2r": "rgba(254, 90, 29, 0.6)",
				"secondary2r": "rgba(255, 207, 7, 0.6)",
				"dark": "#000000",
				"blackMaterial": "#121212",
			},
			padding: {
				"0.5": "0.125rem",
			}
		},
	},
	plugins: [],
}