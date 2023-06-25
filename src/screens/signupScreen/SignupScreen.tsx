import { FC } from "react";
import { View, ScrollView, Image } from "react-native";
import Header from "../../components/header/Header";
import { HeadingPrimary } from "../../components/typography/Typography";

const SignupScreen: FC = () => {
	return (
		<ScrollView>
			<Header />

			<View className="items-center">
				<View className="w-auto h-auto mt-10">
					<Image
						source={require("../../../assets/illustrations/signup.jpg")}
						className="w-[80vw] h-[80vw]"
					/>
				</View>

				<View>
					<HeadingPrimary title="Welcome to our family" />
				</View>
			</View>
		</ScrollView>
	);
};

export default SignupScreen;
