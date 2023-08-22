import React, { FC } from "react";
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
	return (
		<NavigationContainer theme={navigationThemeLight}>
			<SafeAreaView className="flex-0" />

			<View className="flex-1">
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
