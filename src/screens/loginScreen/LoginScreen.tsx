import { View, ScrollView, Image, Modal } from "react-native";
import React, { FC } from "react";
import Header from "../../components/header/Header";
import { Heading, Para } from "../../components/typography/Typography";
import { Formik } from "formik";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { PostLoginSchema, postLoginSchema } from "../../store/actions/schemas/auth.schema";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../store";
import { postLoginAction } from "../../store/actions/auth.action";

const LoginScreen: FC = () => {
	const dispatch = useAppDispatch();
	const { isLoginLoading } = useAppSelector((state: RootState) => state.auth);

	const onSubmitHandler = (values: PostLoginSchema) => {
		dispatch(postLoginAction(values));
	};

	return (
		<ScrollView automaticallyAdjustKeyboardInsets>
			<View className="items-center mb-6">
				<View className="w-auto h-auto mt-10">
					<Image
						source={require("../../../assets/illustrations/login.jpg")}
						className="w-[80vw] h-[80vw]"
					/>
				</View>

				<View className="mt-5">
					<Heading>Login into your account</Heading>
				</View>

				<Formik
					onSubmit={onSubmitHandler}
					validationSchema={postLoginSchema}
					initialValues={{ email_username: "", password: "" }}
				>
					{({ handleSubmit, errors, handleChange, handleBlur, values }) => (
						<View className="items-center mt-5">
							<Input
								label="Username/email"
								placeholder="email@example"
								error={errors.email_username}
								onChangeText={handleChange("email_username")}
								onBlur={handleBlur("email_username")}
								value={values.email_username}
								autoCapitalize="none"
							/>

							<Input
								label="Password"
								placeholder="mypassword"
								rootClassName="mt-5"
								onChangeText={handleChange("password")}
								error={errors.password}
								value={values.password}
								autoCapitalize="none"
								type="password"
							/>

							<View className="flex-row items-center mt-5">
								<Para>Already have an account? </Para>

								<Button type="link" textClassName="font-semibold" to="Signup">
									Signup
								</Button>
							</View>

							<View className="flex-row items-center mt-5">
								<Para>Uhhh! </Para>

								<Button type="link" textClassName="font-semibold">
									Forgot password
								</Button>
							</View>

							<Button
								rootClassName="mt-5"
								loadingText="logging in..."
								loading={isLoginLoading}
								onPress={handleSubmit}
							>
								Login
							</Button>
						</View>
					)}
				</Formik>
			</View>

			{/* <Modal visible>
				<View>
					<Heading>Modal</Heading>
				</View>
			</Modal> */}
		</ScrollView>
	);
};

export default LoginScreen;
