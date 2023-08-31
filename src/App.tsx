import React, { FC, useCallback, useEffect } from "react";
import { Provider } from "react-redux";
import { NavigationContainer, Theme, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, SafeAreaView, View } from "react-native";
import constants from "./common/constants";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import SignupScreen from "./screens/signupScreen/SignupScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import store from "./store";
import VerifyAccountScreen from "./screens/verifyOtpScreen/VerifyOtpScreen";
import { AlertError, AlertSuccess } from "./components/alert/Alert";
import ServerUnderMaintenance from "./screens/serverUnderMaintenance/ServerUnderMaintenance";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

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

/**
 * Param list for RootStack navigation
 */
export type RootStackParamList = {
	Home: undefined;
	Login: undefined;
	Signup: undefined;
	VerifyAccount: {
		email: string;
	};
	ServerUnderMaintenance: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export const initialRouteName: keyof RootStackParamList = "Home";

const Logo: FC = () => {
	return (
		<Image
			className="h-10 w-10 mb-2 flex items-center justify-center rounded-full"
			source={require("../assets/logos/icon.png")}
		/>
	);
};

const Navigation: FC = () => {
	SplashScreen.preventAutoHideAsync();

	const [isLoaded] = useFonts({
		motserratReg: require("../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
		motserratBold: require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
		motserratLight: require("../assets/fonts/Montserrat/Montserrat-Light.ttf"),
		motserratSemiBold: require("../assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
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
			<SafeAreaView className="flex-0" />

			<View className="flex-1 font-motserratReg" onLayout={handleOnLayout}>
				<AlertError />
				<AlertSuccess />

				<Stack.Navigator
					initialRouteName={initialRouteName}
					screenOptions={{
						headerBackTitleVisible: false,
					}}
				>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							headerLeft: () => <Logo />,
							headerTitle: "Maya",
						}}
					/>
					<Stack.Screen name="Signup" component={SignupScreen} />
					<Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen
						name="ServerUnderMaintenance"
						component={ServerUnderMaintenance}
						options={{
							headerTitle: "We Are Under Maintenance",
							headerBackVisible: false,
							gestureEnabled: false,
						}}
					/>
				</Stack.Navigator>
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
