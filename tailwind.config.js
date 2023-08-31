/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				grey: "#565656",
				primary: "#56BAA7",
				greyLight: "#868686",
				accent: "#FF6364",
			},
			fontFamily: {
				motserratReg: "motserratReg",
				motserratBold: "motserratBold",
				motserratLight: "motserratLight",
				motserratSemiBold: "motserratSemiBold",
			},
		},
	},
	plugins: [],
};
