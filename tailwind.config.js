/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				mono: ["IBM Plex Mono", "ui-monospace"],
				sans: ["Darker Grotesque Variable", "sans-serif"],
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
