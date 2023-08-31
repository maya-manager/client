import { FC, useEffect, useState } from "react";
import Modal from "../../../../../components/modal/Modal";
import { Formik } from "formik";
import { View } from "react-native";
import Input from "../../../../../components/input/Input";
import Button from "../../../../../components/button/Button";
import {
	GetForgotPasswordSchema,
	PostResetPasswordSchema,
	getForgotPasswordSchema,
	postResetPasswordSchema,
} from "../../../../../store/actions/schemas/auth.schema";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../../hooks/useAppSelector";
import { RootState } from "../../../../../store";
import {
	getForgotPasswordAction,
	postResetPasswordAction,
} from "../../../../../store/actions/auth.action";
import { alertActions } from "../../../../../store/slices/alert.slice";
import { Para } from "../../../../../components/typography/Typography";

interface ForgotPasswordModalProps {
	isForgotPasswordModalVisible: boolean;
	setIsForgotPasswordModalVisible: (isVisible: boolean) => void;
}

const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({
	isForgotPasswordModalVisible,
	setIsForgotPasswordModalVisible,
}) => {
	const dispatch = useAppDispatch();
	const { isForgotPasswordLoading, isResetPasswordLoading } = useAppSelector(
		(state: RootState) => state.auth,
	);

	const [visibleTab, setVisibleTab] = useState<"forgotPassword" | "resetPassword">(
		"forgotPassword",
	);
	const [email, setEmail] = useState("");
	const [resendOtpCounter, setResendOtpCounter] = useState(30);

	useEffect(() => {
		if (resendOtpCounter > 0) {
			setTimeout(() => {
				setResendOtpCounter((prev) => prev - 1);
			}, 1000);
		}
	}, [resendOtpCounter]);

	const onForgotPassword = async (values: GetForgotPasswordSchema) => {
		try {
			await dispatch(getForgotPasswordAction(values));

			setEmail(values.email);
			setVisibleTab("resetPassword");
		} catch (err: any) {
			dispatch(alertActions.setAlert({ message: err.message, type: "error" }));
		}
	};

	const onResetPassword = async (values: PostResetPasswordSchema) => {
		try {
			await dispatch(postResetPasswordAction(email, values));

			dispatch(
				alertActions.setAlert({ message: "password reset successful", type: "success" }),
			);
			setIsForgotPasswordModalVisible(false);
			setVisibleTab("forgotPassword");
		} catch (err: any) {
			dispatch(alertActions.setAlert({ message: err.message, type: "error" }));
		}
	};

	const onResendVerificationCode = async () => {
		try {
			await dispatch(getForgotPasswordAction({ email }));
		} catch (err: any) {
			dispatch(alertActions.setAlert({ message: err.message, type: "error" }));
		} finally {
			setResendOtpCounter(30);
		}
	};

	return (
		<Modal
			isVisible={isForgotPasswordModalVisible}
			setIsVisible={setIsForgotPasswordModalVisible}
			heading={visibleTab === "forgotPassword" ? "Verify Your Email" : "Select New Password"}
			description={
				visibleTab === "forgotPassword"
					? "An OTP will be sent to your email"
					: "Please enter the OTP that you received"
			}
		>
			{visibleTab === "forgotPassword" ? (
				<Formik
					onSubmit={onForgotPassword}
					initialValues={{ email: "" }}
					validationSchema={getForgotPasswordSchema}
				>
					{({ handleBlur, handleChange, handleSubmit, errors, values }) => (
						<View className="p-0">
							<Input
								label="Email"
								placeholder="email@example"
								rootClassName="p-0"
								inputClassName="w-[80%]"
								onChangeText={handleChange("email")}
								onBlur={handleBlur("email")}
								autoCapitalize="none"
								keyboardType="email-address"
								error={errors.email}
								value={values.email}
							/>

							<Button
								rootClassName="mt-5"
								onPress={handleSubmit}
								loading={isForgotPasswordLoading}
								loadingText="Sending OTP..."
							>
								Verify
							</Button>
						</View>
					)}
				</Formik>
			) : (
				<Formik
					onSubmit={onResetPassword}
					initialValues={{ verification_code: "", password: "", cpassword: "" }}
					validationSchema={postResetPasswordSchema}
				>
					{({ handleBlur, handleChange, handleSubmit, errors, values }) => (
						<View className="p-0">
							<Input
								label="OTP"
								placeholder="1234"
								rootClassName="p-0"
								inputClassName="w-[80%]"
								onChangeText={handleChange("verification_code")}
								onBlur={handleBlur("verification_code")}
								autoCapitalize="none"
								keyboardType="numeric"
								error={errors.verification_code}
								value={values.verification_code}
							/>

							<Input
								label="Password"
								placeholder="password"
								rootClassName="p-0 mt-5"
								inputClassName="w-[80%]"
								onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
								autoCapitalize="none"
								error={errors.password}
								value={values.password}
							/>

							<Input
								label="Confirm Password"
								placeholder="password"
								rootClassName="p-0 mt-5"
								inputClassName="w-[80%]"
								onChangeText={handleChange("cpassword")}
								onBlur={handleBlur("cpassword")}
								autoCapitalize="none"
								error={errors.cpassword}
								value={values.cpassword}
							/>

							<View className="mt-8 items-center">
								{resendOtpCounter ? (
									<Para>Resend OTP in {resendOtpCounter}s</Para>
								) : (
									<Button
										type="link"
										onPress={onResendVerificationCode}
										loading={isForgotPasswordLoading}
										loadingText="Sending..."
									>
										Resend OTP
									</Button>
								)}
							</View>

							<Button
								rootClassName="my-8"
								onPress={handleSubmit}
								loading={isResetPasswordLoading}
								loadingText="Resetting Password..."
							>
								Reset
							</Button>
						</View>
					)}
				</Formik>
			)}
		</Modal>
	);
};

export default ForgotPasswordModal;
