import { FC } from "react";
import { Image, Text, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

const BottomTabBar: FC = () => {
	return (
		<View className="rounded-xl justify-self-end py-[7%] px-4 shadow shadow-black/10 bg-white">
			<View className="flex-row items-center justify-between px-4">
				<View>
					<Octicons name="home" size={24} color="black" />
				</View>

				<View className="ml-3">
					<Octicons name="people" size={24} color="black" />
				</View>

				<View className=" bg-primary rounded-full h-20 w-20 flex -mt-[24%] items-center justify-center text-center">
					<Text className="text-5xl p-0 m-0 text-white">+</Text>
				</View>

				<View className="mr-3">
					<Octicons name="credit-card" size={24} color="black" />
				</View>

				<View>
					<Image
						className="rounded-full"
						source={{
							// eslint-disable-next-line no-secrets/no-secrets
							uri: "https://firebasestorage.googleapis.com/v0/b/maya-manager.appspot.com/o/Pfp.png?alt=media&token=552bd3f8-a5ca-4489-ab8a-f16fceffb257",
							width: 30,
							height: 30,
						}}
					/>
				</View>
			</View>
		</View>
	);
};

export default BottomTabBar;
