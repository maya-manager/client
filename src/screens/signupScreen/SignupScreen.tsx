import { FC } from "react";
import { View, ScrollView, Image } from "react-native";
import Header from "../../components/header/Header";
import { HeadingPrimary } from "../../components/typography/Typography";
import Input from "../../components/input/Input";
import ButtonPrimary from "../../components/button/Button";

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

				<View className="items-center">
					<Input label="Name" placeholder="Ayush Chugh" rootClassName="mt-5" />
					<Input label="Username" placeholder="ayushchugh" rootClassName="mt-5" />
					<Input label="Email" placeholder="email@example" rootClassName="mt-5" />
					<Input label="Password" placeholder="strongpassword" rootClassName="mt-5" />
					<Input
						label="Confirm Password"
						placeholder="strongpassword"
						rootClassName="mt-5"
					/>

					<ButtonPrimary title="Signup" rootClassName="mt-5" />
				</View>
			</View>
		</ScrollView>
	);
};

export default SignupScreen;
