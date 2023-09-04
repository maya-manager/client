import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import HomeScreen from "../screens/auth/welcomeScreen/WelcomeScreen";
import SignupScreen from "../screens/auth/signupScreen/SignupScreen";
import VerifyAccountScreen from "../screens/auth/verifyOtpScreen/VerifyOtpScreen";
import LoginScreen from "../screens/auth/loginScreen/LoginScreen";
import ServerUnderMaintenance from "../screens/error/serverUnderMaintenance/ServerUnderMaintenance";
import { Image } from "react-native";
import { BottomTabsParamList } from "./BottomTabs";

/**
 * Param list for RootStack navigation
 */
export type AuthStackParamList = {
	Welcome: undefined;
	Login: undefined;
	Signup: undefined;
	VerifyAccount: {
		email: string;
	};
	ServerUnderMaintenance: undefined;
	BottomTabs: BottomTabsParamList;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
export const initialRouteName: keyof AuthStackParamList = "Welcome";

const Logo: FC = () => {
	return (
		<Image
			className="h-10 w-10 mb-2 flex items-center justify-center rounded-full"
			source={require("../../assets/logos/icon.png")}
		/>
	);
};

const AuthStackNavigation: FC = () => {
	return (
		<Stack.Navigator
			initialRouteName={initialRouteName}
			screenOptions={{
				headerBackTitleVisible: false,
			}}
		>
			<Stack.Screen
				name="Welcome"
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
	);
};

export default AuthStackNavigation;
