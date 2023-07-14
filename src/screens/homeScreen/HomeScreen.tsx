import { View, Text, Image, ScrollView } from "react-native";
import React, { FC } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import { Heading, Para } from "../../components/typography/Typography";

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
					<Heading rootClassName="mt-8">
						Easily manage your money {"\n"}with{" "}
						<Text className="text-primary">Maya</Text>
					</Heading>

					<Para rootClassName="mt-8">
						Join us now and let us take care of all your stress to manage your money
					</Para>
				</View>

				<Button rootClassName="mt-8" to={"Signup"}>
					Join Us
				</Button>

				<View className="mt-8 flex-row items-center">
					<Para>Or </Para>
					<Button to="Login" type="link">
						login{" "}
					</Button>
					<Para>if you already have an account</Para>
				</View>
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
