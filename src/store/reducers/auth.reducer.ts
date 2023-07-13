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
