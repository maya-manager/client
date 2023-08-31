import { ExpoConfig } from "expo/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
	name: "maya",
	slug: "maya",
	version: "1.0.0",
	orientation: "portrait",
	icon: "./assets/logos/icon.png",
	userInterfaceStyle: "light",
	splash: {
		image: "./assets/logos/full.png",
		resizeMode: "contain",
		backgroundColor: "#ffffff",
	},
	assetBundlePatterns: ["**/*"],
	jsEngine: "hermes",
	ios: {
		supportsTablet: true,
	},
	android: {
		adaptiveIcon: {
			foregroundImage: "./assets/logos/icon.png",
			backgroundColor: "#FFFFFF",
		},
	},
};

export default config;
