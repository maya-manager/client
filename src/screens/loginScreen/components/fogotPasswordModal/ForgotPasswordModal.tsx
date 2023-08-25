import { FC } from "react";
import Modal from "../../../../components/modal/Modal";
import { Formik } from "formik";
import { View } from "react-native";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import {
	GetForgotPasswordSchema,
	getForgotPasswordSchema,
} from "../../../../store/actions/schemas/auth.schema";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { RootState } from "../../../../store";
import { getForgotPasswordAction } from "../../../../store/actions/auth.action";
import { alertActions } from "../../../../store/slices/alert.slice";

interface ForgotPasswordModalProps {
	isForgotPasswordModalVisible: boolean;
	setIsForgotPasswordModalVisible: (isVisible: boolean) => void;
}

const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({
	isForgotPasswordModalVisible,
	setIsForgotPasswordModalVisible,
}) => {
	const dispatch = useAppDispatch();
	const { isForgotPasswordLoading } = useAppSelector((state: RootState) => state.auth);

	const onForgotPassword = async (values: GetForgotPasswordSchema) => {
		try {
			await dispatch(getForgotPasswordAction(values));

			dispatch(alertActions.setAlert({ message: "OTP sent to your email", type: "success" }));
		} catch (err: any) {
			dispatch(alertActions.setAlert({ message: err.message, type: "error" }));
		}
	};

	return (
		// TODO: modal should close on success and when clicked outside
		<Modal
			isVisible={isForgotPasswordModalVisible}
			setIsVisible={setIsForgotPasswordModalVisible}
			heading="Verify your email"
		>
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

						{/* TODO: add loading state */}
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
		</Modal>
	);
};

export default ForgotPasswordModal;
