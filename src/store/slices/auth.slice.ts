import { createSlice } from "@reduxjs/toolkit";
import {
	setIsForgotPasswordLoadingReducer,
	setIsLoginLoadingReducer,
	setIsResendVerificationCodeLoadingReducer,
	setIsResetPasswordLoadingReducer,
	setIsSignupLoadingReducer,
	setIsVerifyAccountLoadingReducer,
	setSignupCredentialsReducer,
} from "../reducers/auth.reducer";

export interface AuthState {
	isSignupLoading: boolean;
	isVerifyAccountLoading: boolean;
	isLoginLoading: boolean;
	isResendVerificationCodeLoading: boolean;
	isForgotPasswordLoading: boolean;
	isResetPasswordLoading: boolean;
	signupCredentials: {
		email: string;
		password: string;
	};
}

const initialState: AuthState = {
	isSignupLoading: false,
	isVerifyAccountLoading: false,
	isLoginLoading: false,
	isResendVerificationCodeLoading: false,
	isForgotPasswordLoading: false,
	isResetPasswordLoading: false,
	signupCredentials: {
		email: "",
		password: "",
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsSignupLoading: setIsSignupLoadingReducer,
		setIsVerifyAccountLoading: setIsVerifyAccountLoadingReducer,
		setIsLoginLoading: setIsLoginLoadingReducer,
		setIsResendVerificationCodeLoading: setIsResendVerificationCodeLoadingReducer,
		setIsForgotPasswordLoading: setIsForgotPasswordLoadingReducer,
		setIsResetPasswordLoading: setIsResetPasswordLoadingReducer,
		setSignupCredentials: setSignupCredentialsReducer,
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
