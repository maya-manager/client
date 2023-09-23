import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import Home from "../screens/core/home/Home";
import BottomTabBar from "../components/bottomTabBar/BottomTabBar";

export type BottomTabsParamList = {
	Home: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabs: FC = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			tabBar={() => <BottomTabBar />}
			screenOptions={{ headerShown: false }}
		>
			<Tab.Screen name="Home" component={Home} />
		</Tab.Navigator>
	);
};

export default BottomTabs;
