/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': 'poppins',
				'jetbrains': 'jetbrains mono'
			},
		},
	},
	plugins: [],
}
