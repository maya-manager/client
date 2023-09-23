import { BlurView } from "expo-blur";
import { FC } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

export const Hero: FC = () => {
	return (
		<>
			<View className="h-[60%]">
				<ImageBackground
					source={require("../../../../../../assets/logos/icon.png")}
					resizeMethod="resize"
					resizeMode="center"
					className="flex-1"
				>
					<BlurView
						intensity={40}
						className="bg-primary/50 flex-1 rounded-3xl justify-center items-center"
					>
						<View className="items-center">
							<Text className="font-oswaldReg text-white tracking-widest text-xl">
								Cash In Hand
							</Text>
							<View className="pt-5 flex-row items-center justify-between w-[45%]">
								<Text className="font-oswaldBold text-white tracking-widest text-5xl pt-5">
									₹ 500
								</Text>
								<Octicons name="pencil" size={30} color="white" />
							</View>
						</View>

						<TouchableOpacity>
							<View className="bg-white flex-row justify-between items-center min-w-[50%] px-7 py-2 rounded-full my-8 shadow-2xl shadow-[#8D8D8D]">
								<Text className="font-oswaldMedium tracking-widest text-[#8D8D8D] text-lg">
									New Transaction
								</Text>
								<Text className="font-oswaldMedium text-primary text-3xl items-center ml-3 mb-1">
									+
								</Text>
							</View>
						</TouchableOpacity>

						<View className="w-[70%]">
							<View className="flex-row justify-between">
								<Text className="text-xl font-motserratReg tracking-wide text-white">
									Total Credit
								</Text>
								<Text className="text-xl font-motserratSemiBold text-white">
									+ 500
								</Text>
							</View>
							<View className="flex-row justify-between mt-4">
								<Text className="text-xl font-motserratReg tracking-wide text-white">
									Total Debit
								</Text>
								<Text className="text-xl font-motserratSemiBold text-white">
									- 500
								</Text>
							</View>
						</View>
					</BlurView>
				</ImageBackground>
			</View>
		</>
	);
};
