/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: ["aqua"],
	},
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("tailwindcss"),
		require("autoprefixer"),
		require("daisyui"),
	],
};
