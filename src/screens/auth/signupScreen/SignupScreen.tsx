import { FC } from "react";
import { View, ScrollView, Image } from "react-native";
import { Heading, Para } from "../../../components/typography/Typography";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { Formik } from "formik";
import { PostSignupSchema, postSignupSchema } from "../../../store/actions/schemas/auth.schema";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { alertActions } from "../../../store/slices/alert.slice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { RootState } from "../../../store";
import { postSignupAction } from "../../../store/actions/auth.action";
import { AuthStackParamList } from "../../../navigation/AuthStack";

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, "Signup">;

const SignupScreen: FC<SignupScreenProps> = ({ navigation }) => {
	const dispatch = useAppDispatch();
	const { isSignupLoading } = useAppSelector((state: RootState) => state.auth);

	const onSubmitHandler = async (values: PostSignupSchema) => {
		try {
			await dispatch(postSignupAction(values));

			navigation.navigate("VerifyAccount", {
				email: values.email,
			});
		} catch (err: any) {
			// TODO: don't show direct errors from server instead do error handling in client
			dispatch(alertActions.setAlert({ type: "error", message: err.message }));
		}
	};

	return (
		<ScrollView automaticallyAdjustKeyboardInsets>
			<View className="items-center mb-6">
				<View className="w-auto h-auto mt-10">
					<Image
						source={require("../../../../assets/illustrations/signup.jpg")}
						className="w-[80vw] h-[80vw]"
					/>
				</View>

				<View>
					<Heading>Welcome to our family</Heading>
				</View>

				<Formik
					validationSchema={postSignupSchema}
					initialValues={{
						name: "",
						email: "",
						username: "",
						password: "",
						cpassword: "",
					}}
					onSubmit={onSubmitHandler}
				>
					{({ handleSubmit, errors, handleChange, handleBlur, values }) => (
						<View className="items-center">
							<Input
								label="Name"
								placeholder="Ayush Chugh"
								rootClassName="mt-5"
								error={errors.name}
								onChangeText={handleChange("name")}
								onBlur={handleBlur("name")}
								value={values.name}
								required
								textContentType="name"
							/>
							<Input
								label="Username"
								placeholder="ayushchugh"
								rootClassName="mt-5"
								error={errors.username}
								onChangeText={handleChange("username")}
								onBlur={handleBlur("username")}
								value={values.username}
								required
								autoCapitalize="none"
								textContentType="username"
							/>
							<Input
								label="Email"
								placeholder="email@example"
								rootClassName="mt-5"
								error={errors.email}
								onChangeText={handleChange("email")}
								onBlur={handleBlur("email")}
								value={values.email}
								required
								autoCapitalize="none"
								keyboardType="email-address"
								textContentType="emailAddress"
							/>
							<Input
								label="Password"
								placeholder="strongpassword"
								rootClassName="mt-5"
								error={errors.password}
								onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
								value={values.password}
								required
								autoCapitalize="none"
								textContentType="password"
								secureTextEntry
							/>
							<Input
								label="Confirm Password"
								placeholder="strongpassword"
								rootClassName="mt-5"
								error={errors.cpassword}
								onChangeText={handleChange("cpassword")}
								onBlur={handleBlur("cpassword")}
								value={values.cpassword}
								required
								autoCapitalize="none"
								textContentType="password"
								secureTextEntry
							/>

							<View className="flex-row items-center mt-5">
								<Para>Already have an account? </Para>

								<Button type="link" textClassName="font-semibold" to="Login">
									Login
								</Button>
							</View>

							<Button
								rootClassName="mt-5"
								onPress={handleSubmit}
								loadingText="Signing up..."
								loading={isSignupLoading}
							>
								Signup
							</Button>
						</View>
					)}
				</Formik>
			</View>
		</ScrollView>
	);
};

export default SignupScreen;
