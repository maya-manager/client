import { FC } from "react";
import { Image, ScrollView, View } from "react-native";
import Header from "../../components/header/Header";
import { HeadingPrimary, ParaPrimary } from "../../components/typography/Typography";
import Input from "../../components/input/Input";
import ButtonPrimary from "../../components/button/Button";

const VerifyOtpScreen: FC = () => {
	return (
		<ScrollView>
			<Header />

			<View className="items-center">
				<View className="w-auto h-auto mt-10">
					<Image
						source={require("../../../assets/illustrations/verify-account.jpg")}
						className="w-[80vw] h-[80vw]"
					/>
				</View>

				<View className="px-8">
					<HeadingPrimary title="Please verify your account" />
					<ParaPrimary
						rootClassName="mt-8"
						title="An OTP is sent to your email please enter that here"
					/>
				</View>

				<View className="mt-8 items-center">
					<Input label="OTP" placeholder="1234" keyboardType="numeric" />
					<ButtonPrimary title="Verify" rootClassName="mt-8" />
				</View>
			</View>
		</ScrollView>
	);
};

export default VerifyOtpScreen;
