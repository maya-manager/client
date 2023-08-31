import { View, Text, Image, ScrollView } from "react-native";
import React, { FC, useEffect } from "react";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import { Heading, Para } from "../../components/typography/Typography";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getHealthCheck } from "../../store/actions/healthCheck.action";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

interface HomeScreenProps {
	navigation: NavigationProp<RootStackParamList, "Home">;
}

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
	// health check
	const dispatch = useAppDispatch();

	const healthCheck = async () => {
		try {
			await dispatch(getHealthCheck());

			return;
		} catch (err) {
			navigation.navigate("ServerUnderMaintenance");
		}
	};

	useEffect(() => {
		healthCheck();
	}, []);

	return (
		<ScrollView>
			<View className="items-center">
				<View className="w-auto h-auto mt-10">
					<Image
						source={require("../../../assets/illustrations/get-started.jpg")}
						className="w-[80vw] h-[80vw]"
					/>
				</View>
				<View className="px-8">
					<Heading rootClassName="mt-8">
						Easily manage your money with <Text className="text-primary">Maya</Text>
					</Heading>

					<Para rootClassName="mt-8">
						Join us now and let us take care of all your stress to manage your money
					</Para>
				</View>

				<Button rootClassName="mt-8" to={"Signup"}>
					Join Us
				</Button>

				<View className="my-8 flex-row items-center">
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
