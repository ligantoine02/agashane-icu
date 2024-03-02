/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				mono: ["IBM Plex Mono", "ui-monospace"],
				sans: [
					"Figtree Variable",
					"Archivo Variable",
					"Recursive Variable",
					"sans-serif",
				],
				figtree: ["Figtree Variable", "sans-serif"],
				archivo: ["Archivo Variable", "sans-serif"],
				recursive: ["Recursive Variable", "sans-serif"],
				darkerGrotesque: ["Darker Grotesque Variable", "sans-serif"],
				neueMachina: [
					"Neue Machina",
					"Darker Grotesque Variable",
					"sans-serif",
				],
			},
		},
	},
	plugins: [require("rippleui"), require("@tailwindcss/typography")],
};
