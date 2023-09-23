/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				success: "#52C41A",
				grey: "#565656",
				primary: "#56BAA7",
				greyLight: "#868686",
				danger: "#FF6364",
			},
			fontFamily: {
				motserratReg: "motserratReg",
				motserratBold: "motserratBold",
				motserratLight: "motserratLight",
				motserratSemiBold: "motserratSemiBold",
				oswaldReg: "oswaldReg",
				oswaldBold: "oswaldBold",
				oswaldLight: "oswaldLight",
				oswaldSemiBold: "oswaldSemiBold",
				oswaldMedium: "oswaldMedium",
			},
		},
	},
	plugins: [],
};
