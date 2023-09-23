import { API_URL } from "@env";
import Constants from "expo-constants";

const constants = {
	colors: {
		success: "#52C41A",
		primary: "#56BAA7",
		white: "#fff",
		grey: "#565656",
		placeholders: "#868686",
		danger: "#FF6364",
	},
	environment: {
		API_URL: API_URL,
	},
	statusBarHeight: Constants.statusBarHeight,
};

export default constants;
