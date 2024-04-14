/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
				"primary-a": "rgba(6, 63, 150, 0.70)",
				"secondary-a": "rgba(6, 137, 137, 0.70)",
				"darkPrimary": "#FE5A1D",
				"darkSecondary": "#FFCF07",
				"darkPrimary-a": "rgba(254, 90, 29, 0.70)",
				"darkSecondary-a": "rgba(255, 207, 7, 0.70)",
				"primary3": "#D92122",
				"secondary3": "#551B8D",
				"black": "#121212",
				"pureBlack": "#000000",
				"priry": "rgba(var(--color-priry), <alpha-value>)",
				"sery": "rgb(var(--color-sery), <alpha-value>)",
				"baund": "rgb(var(--color-baund), <alpha-value>)",
				"xetx": "rgb(var(--color-xetx), <alpha-value>)",
			},
			padding: {
				"0.5": "0.125rem",
			}
		},
	},
	plugins: [],
}