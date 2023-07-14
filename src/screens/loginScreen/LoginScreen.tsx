import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Header from "../../components/header/Header";
import { Heading, Para } from "../../components/typography/Typography";
import { Formik } from "formik";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const LoginScreen = () => {
	const onSubmitHandler = () => {};

	return (
		<ScrollView>
			<Header />

			<View className="items-center">
				<View className="w-auto h-auto mt-10">
					<Image
						source={require("../../../assets/illustrations/login.jpg")}
						className="w-[80vw] h-[80vw]"
					/>
				</View>

				<View className="mt-5">
					<Heading>Login into your account</Heading>
				</View>

				<Formik onSubmit={onSubmitHandler}>
					{() => (
						<View className="items-center mt-5">
							<Input label="Username/email" placeholder="email@example" />
							<Input label="Password" placeholder="mypassword" rootClassName="mt-5" />

							<View className="flex-row items-center mt-5">
								<Para>Already have an account? </Para>

								<Button type="link" textClassName="font-semibold" to="Signup">
									Signup
								</Button>
							</View>

							{/* TODO: add forgot password option here */}

							<Button rootClassName="mt-5" loadingText="logging in...">
								Login
							</Button>
						</View>
					)}
				</Formik>
			</View>
		</ScrollView>
	);
};

export default LoginScreen;
