import { FC } from "react";
import { View, ScrollView, Image } from "react-native";
import Header from "../../components/header/Header";
import { HeadingPrimary } from "../../components/typography/Typography";
import Input from "../../components/input/Input";
import ButtonPrimary from "../../components/button/Button";
import { Formik } from "formik";
import { IPostSignupSchema, postSignupSchema } from "../../api/schemas/auth.schema";
import { postSignup } from "../../api/auth";

const SignupScreen: FC = () => {
	const onSubmitHandler = async (values: IPostSignupSchema) => {
		try {
			await postSignup(values);
		} catch (err) {
			// TODO: show alert here
			console.log(err);
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
					<HeadingPrimary title="Welcome to our family" />
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

							<ButtonPrimary
								title="Signup"
								rootClassName="mt-5"
								onPress={handleSubmit}
							/>
						</View>
					)}
				</Formik>
			</View>
		</ScrollView>
	);
};

export default SignupScreen;
