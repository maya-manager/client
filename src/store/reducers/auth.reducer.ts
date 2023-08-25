import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../slices/auth.slice";

export const setIsSignupLoadingReducer = (state: AuthState, action: PayloadAction<boolean>) => {
	state.isSignupLoading = action.payload;
};

export const setIsVerifyAccountLoadingReducer = (
	state: AuthState,
	action: PayloadAction<boolean>,
) => {
	state.isVerifyAccountLoading = action.payload;
};

export const setIsLoginLoadingReducer = (state: AuthState, action: PayloadAction<boolean>) => {
	state.isLoginLoading = action.payload;
};

export const setIsResendVerificationCodeLoadingReducer = (
	state: AuthState,
	action: PayloadAction<boolean>,
) => {
	state.isResendVerificationCodeLoading = action.payload;
};

export const setIsForgotPasswordLoadingReducer = (
	state: AuthState,
	action: PayloadAction<boolean>,
) => {
	state.isForgotPasswordLoading = action.payload;
};
