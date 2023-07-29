import { createSlice } from "@reduxjs/toolkit";
import {
	setIsLoginLoadingReducer,
	setIsResendVerificationCodeLoadingReducer,
	setIsSignupLoadingReducer,
	setIsVerifyAccountLoadingReducer,
} from "../reducers/auth.reducer";

export interface AuthState {
	isSignupLoading: boolean;
	isVerifyAccountLoading: boolean;
	isLoginLoading: boolean;
	isResendVerificationCodeLoading: boolean;
}

const initialState: AuthState = {
	isSignupLoading: false,
	isVerifyAccountLoading: false,
	isLoginLoading: false,
	isResendVerificationCodeLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsSignupLoading: setIsSignupLoadingReducer,
		setIsVerifyAccountLoading: setIsVerifyAccountLoadingReducer,
		setIsLoginLoading: setIsLoginLoadingReducer,
		setIsResendVerificationCodeLoading: setIsResendVerificationCodeLoadingReducer,
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
