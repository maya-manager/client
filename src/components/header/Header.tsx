import { FC } from "react";
import { Image, View } from "react-native";

/**
 * Header which will be shown on the top of the screen
 */
const Header: FC = () => {
	return (
		<View className="flex px-8">
			{/* TODO: add back button */}
			<Image
				className="h-14 w-14 border-[0.2px] rounded-full"
				source={require("../../../assets/logos/icon.png")}
			/>
		</View>
	);
};

export default Header;
