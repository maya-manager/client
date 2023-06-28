import React, { FC } from "react";
import { Provider } from "react-redux";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import constants from "./common/constants";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import SignupScreen from "./screens/signupScreen/SignupScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import Constants from "expo-constants";
import store from "./store/store";

export type RootStackParamList = {
	Home: undefined;
	Login: undefined;
	Signup: undefined;
};

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

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: FC = () => {
	return (
		<NavigationContainer theme={navigationThemeLight}>
			<SafeAreaView className="flex-1" style={{ paddingTop: Constants.statusBarHeight }}>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Signup" component={SignupScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
				</Stack.Navigator>
			</SafeAreaView>
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
