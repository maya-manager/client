import { FC } from "react";
import { View, ScrollView, Image } from "react-native";
import Header from "../../components/header/Header";
import { Heading } from "../../components/typography/Typography";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Formik } from "formik";
import { PostSignupSchema, postSignupSchema } from "../../store/actions/schemas/auth.schema";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { alertActions } from "../../store/slices/alert.slice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../store";
import { postSignupHandler } from "../../store/actions/auth.action";

type SignupScreenProps = NativeStackScreenProps<RootStackParamList, "Signup">;

const SignupScreen: FC<SignupScreenProps> = ({ navigation }) => {
	const dispatch = useAppDispatch();
	const { isSignupLoading } = useAppSelector((state: RootState) => state.auth);

	const onSubmitHandler = async (values: PostSignupSchema) => {
		try {
			await dispatch(postSignupHandler(values));
		} catch (err: any) {
			// TODO: don't show direct errors from server instead do error handling in client
			dispatch(alertActions.setAlert({ type: "error", message: err.message }));
		} finally {
			// TODO: move this to try block
			navigation.navigate("VerifyAccount", {
				email: values.email,
			});
		}
	};

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
							/>

							{/* TODO: add already have account line */}

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
