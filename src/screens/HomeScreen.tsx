import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from "react-native";
import React, { FC } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import ButtonPrimary from "../components/button/Button";
import Header from "../components/header/Header";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<ScrollView>
			<Header />

			<View className="bg-white items-center">
				<View className="w-auto h-auto mt-10">
					<Image
						source={require("../../assets/illustrations/get-started.jpg")}
						className="w-[80vw] h-[80vw]"
					/>
				</View>
				<View className="">
					<Text className="text-center text-[22px] mt-8">
						Easily manage your money {"\n"}with{" "}
						<Text className="text-primary">Maya</Text>
					</Text>
					<Text className="text-[16px] tracking-widest mt-6">
						Join us now and let us take care {"\n"}of all your stress to manage your{" "}
						{"\n"}
						money
					</Text>
				</View>

				<ButtonPrimary to={"Signup"} title="Join Us" />

				<View className="mt-8">
					<Text>
						<Text
							onPress={() => navigation.navigate("Login")}
							className="text-primary underline"
						>
							Or login{" "}
						</Text>
						if you already have an account
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
