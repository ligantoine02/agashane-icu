/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				mono: ["IBM Plex Mono", "ui-monospace"],
				sans: [
					"Archivo Variable",
					"Recursive Variable",
					"Figtree Variable",
					"sans-serif",
				],
			},
		},
	},
	plugins: [require("rippleui")],
};
