import { View, ScrollView, Image } from "react-native";
import React, { FC, useState } from "react";
import { Heading, Para } from "../../../components/typography/Typography";
import { Formik } from "formik";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { PostLoginSchema, postLoginSchema } from "../../../store/actions/schemas/auth.schema";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { RootState } from "../../../store";
import { postLoginAction } from "../../../store/actions/auth.action";
import ForgotPasswordModal from "./components/fogotPasswordModal/ForgotPasswordModal";
import { alertActions } from "../../../store/slices/alert.slice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../navigation/AuthStack";

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, "Login">;

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
	const dispatch = useAppDispatch();
	const { isLoginLoading } = useAppSelector((state: RootState) => state.auth);

	const [isForgotPasswordModalVisible, setIsForgotPasswordModalVisible] = useState(false);

	const onSubmitHandler = async (values: PostLoginSchema) => {
		try {
			await dispatch(postLoginAction(values));

			navigation.navigate("BottomTabs");
		} catch (err: any) {
			dispatch(alertActions.setAlert({ type: "error", message: err.message }));
		}
	};

	return (
		<ScrollView automaticallyAdjustKeyboardInsets={!isForgotPasswordModalVisible}>
			<View className="items-center mb-6">
				<View className="w-auto h-auto mt-10">
					<Image
						source={require("../../../../assets/illustrations/login.jpg")}
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
								keyboardType="email-address"
								textContentType="emailAddress"
							/>

							<Input
								label="Password"
								placeholder="mypassword"
								rootClassName="mt-5"
								onChangeText={handleChange("password")}
								error={errors.password}
								value={values.password}
								autoCapitalize="none"
								textContentType="password"
								secureTextEntry
							/>

							<View className="flex-row items-center mt-5">
								<Para>Don&lsquo;t have account? </Para>

								<Button type="link" textClassName="font-semibold" to="Signup">
									Signup
								</Button>
							</View>

							<View className="flex-row items-center mt-5">
								<Para>Uhhh! </Para>

								<Button
									type="link"
									textClassName="font-semibold"
									onPress={() => setIsForgotPasswordModalVisible(true)}
								>
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

			<ForgotPasswordModal
				isForgotPasswordModalVisible={isForgotPasswordModalVisible}
				setIsForgotPasswordModalVisible={setIsForgotPasswordModalVisible}
			/>
		</ScrollView>
	);
};

export default LoginScreen;
