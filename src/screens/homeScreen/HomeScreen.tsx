import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from "react-native";
import React, { FC } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import ButtonPrimary from "../../components/button/Button";
import Header from "../../components/header/Header";
import { HeadingPrimary, ParaPrimary } from "../../components/typography/Typography";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<ScrollView>
			<Header />

			<View className="items-center">
				<View className="w-auto h-auto mt-10">
					<Image
						source={require("../../../assets/illustrations/get-started.jpg")}
						className="w-[80vw] h-[80vw]"
					/>
				</View>
				<View className="px-8">
					<HeadingPrimary
						rootClassName="mt-8"
						title={
							<Text>
								Easily manage your money {"\n"}with{" "}
								<Text className="text-primary">Maya</Text>
							</Text>
						}
					/>

					<ParaPrimary
						rootClassName="mt-8"
						title="Join us now and let us take care of all your stress to manage your money"
					/>
				</View>

				<ButtonPrimary rootClassName="mt-8" to={"Signup"} title="Join Us" />

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
