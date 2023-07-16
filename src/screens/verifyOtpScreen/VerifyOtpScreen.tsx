import { FC } from "react";
import { Image, ScrollView, View } from "react-native";
import Header from "../../components/header/Header";
import { Heading, Para } from "../../components/typography/Typography";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { Formik } from "formik";
import {
	GetVerifyAccountSchema,
	getVerifyAccountSchema,
} from "../../store/actions/schemas/auth.schema";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../store";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getVerifyAccountHandler } from "../../store/actions/auth.action";
import { alertActions } from "../../store/slices/alert.slice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type VerifyAccountScreenProps = NativeStackScreenProps<RootStackParamList, "VerifyAccount">;

const VerifyAccountScreen: FC<VerifyAccountScreenProps> = ({ navigation }) => {
	const route = useRoute<RouteProp<RootStackParamList, "VerifyAccount">>();
	const { email } = route.params;

	const dispatch = useAppDispatch();

	const { isVerifyAccountLoading } = useAppSelector((state: RootState) => state.auth);

	const onSubmitHandler = async (values: GetVerifyAccountSchema) => {
		try {
			await dispatch(getVerifyAccountHandler(values));
		} catch (err: any) {
			// TODO: don't show direct errors from server instead do error handling in client
			dispatch(alertActions.setAlert({ type: "error", message: err.message }));
		} finally {
			// TODO: move this to try block
			navigation.navigate("Login");
		}
	};

	return (
		<ScrollView automaticallyAdjustKeyboardInsets>
			<Header />

			<View className="items-center">
				<View className="w-auto h-auto mt-10">
					<Image
						source={require("../../../assets/illustrations/verify-account.jpg")}
						className="w-[80vw] h-[80vw]"
					/>
				</View>

				<View className="px-8">
					<Heading>Please verify your account</Heading>
					<Para rootClassName="mt-8">
						An OTP is sent to your email please enter that here
					</Para>
				</View>

				<Formik
					validationSchema={getVerifyAccountSchema}
					initialValues={{ email, verification_code: "" }}
					onSubmit={onSubmitHandler}
				>
					{({ handleSubmit, errors, handleChange, handleBlur, values }) => (
						<View className="mt-8 items-center">
							<Input
								label="OTP"
								placeholder="1234"
								keyboardType="numeric"
								error={errors.verification_code}
								onChangeText={handleChange("verification_code")}
								onBlur={handleBlur("name")}
								value={values.verification_code}
								required
							/>

							<Button
								rootClassName="mt-8"
								onPress={handleSubmit}
								loading={isVerifyAccountLoading}
								loadingText="Verifying..."
							>
								Verify
							</Button>
						</View>
					)}
				</Formik>
			</View>
		</ScrollView>
	);
};

export default VerifyAccountScreen;
