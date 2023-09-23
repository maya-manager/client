import React, { FC, useCallback } from "react";
import { Provider } from "react-redux";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { SafeAreaView, View } from "react-native";
import constants from "./common/constants";
import store from "./store";
import { AlertError, AlertSuccess } from "./components/alert/Alert";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackNavigation, { AuthStackParamList } from "./navigation/AuthStack";
import BottomTabs, { BottomTabsParamList } from "./navigation/BottomTabs";

export type RootStackParamsList = {
	Auth: AuthStackParamList;
	BottomTabs: BottomTabsParamList;
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const navigationThemeLight: Theme = {
	dark: false,
	colors: {
		background: constants.colors.white,
		primary: constants.colors.primary,
		card: constants.colors.white,
		text: constants.colors.grey,
		border: constants.colors.grey,
		notification: constants.colors.primary,
	},
};

const Navigation: FC = () => {
	SplashScreen.preventAutoHideAsync();

	const [isLoaded] = useFonts({
		motserratReg: require("../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
		motserratBold: require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
		motserratLight: require("../assets/fonts/Montserrat/Montserrat-Light.ttf"),
		motserratSemiBold: require("../assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
		oswaldReg: require("../assets/fonts/Oswald/Oswald-Regular.ttf"),
		oswaldLight: require("../assets/fonts/Oswald/Oswald-Light.ttf"),
		oswaldBold: require("../assets/fonts/Oswald/Oswald-Bold.ttf"),
		oswaldSemiBold: require("../assets/fonts/Oswald/Oswald-SemiBold.ttf"),
		oswaldMedium: require("../assets/fonts/Oswald/Oswald-Medium.ttf"),
	});

	const handleOnLayout = useCallback(async () => {
		if (isLoaded) {
			await SplashScreen.hideAsync(); //hide the splashscreen
		}
	}, [isLoaded]);

	if (!isLoaded) {
		return null;
	}

	return (
		<NavigationContainer theme={navigationThemeLight}>
			<View className="flex-1 font-motserratReg" onLayout={handleOnLayout}>
				<AlertError />
				<AlertSuccess />

				<RootStack.Navigator
					initialRouteName="BottomTabs"
					screenOptions={{ headerShown: false }}
				>
					<RootStack.Screen name="Auth" component={AuthStackNavigation} />
					<RootStack.Screen name="BottomTabs" component={BottomTabs} />
				</RootStack.Navigator>
			</View>
		</NavigationContainer>
	);
};

const App: FC = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};

export default App;
