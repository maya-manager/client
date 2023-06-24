import React from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, SignupScreen } from "./screens";
import { SafeAreaView } from "react-native";
import constants from "./common/constants";

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
		text: constants.colors.lightGrey,
		border: constants.colors.lightGrey,
		notification: constants.colors.primary,
	},
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer theme={navigationThemeLight}>
			<SafeAreaView className="flex-1">
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
}
