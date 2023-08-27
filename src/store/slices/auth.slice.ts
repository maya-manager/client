import { createSlice } from "@reduxjs/toolkit";
import {
	setIsForgotPasswordLoadingReducer,
	setIsLoginLoadingReducer,
	setIsResendVerificationCodeLoadingReducer,
	setIsResetPasswordLoadingReducer,
	setIsSignupLoadingReducer,
	setIsVerifyAccountLoadingReducer,
} from "../reducers/auth.reducer";

export interface AuthState {
	isSignupLoading: boolean;
	isVerifyAccountLoading: boolean;
	isLoginLoading: boolean;
	isResendVerificationCodeLoading: boolean;
	isForgotPasswordLoading: boolean;
	isResetPasswordLoading: boolean;
}

const initialState: AuthState = {
	isSignupLoading: false,
	isVerifyAccountLoading: false,
	isLoginLoading: false,
	isResendVerificationCodeLoading: false,
	isForgotPasswordLoading: false,
	isResetPasswordLoading: false,
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
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
