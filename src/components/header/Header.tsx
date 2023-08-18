import { FC, useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { initialRouteName } from "../../App";
import { Ionicons } from "@expo/vector-icons";

/**
 * Header which will be shown on the top of the screen
 */
const Header: FC = () => {
	const route = useRoute();
	const [currentRoute, setCurrentRoute] = useState(route.name);
	const navigation = useNavigation();

	useEffect(() => {
		setCurrentRoute(route.name);
	}, [route.name]);

	return (
		<View className="flex px-8">
			{currentRoute === initialRouteName ? (
				<Image
					className="h-14 w-14 border-[0.2px] rounded-full"
					source={require("../../../assets/logos/icon.png")}
				/>
			) : (
				<Pressable onPress={() => navigation.goBack()}>
					<Ionicons name="arrow-back" size={30} color="black" />
				</Pressable>
			)}
		</View>
	);
};

export default Header;
