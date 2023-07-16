import { createSlice } from "@reduxjs/toolkit";
import {
	setIsLoginLoadingReducer,
	setIsSignupLoadingReducer,
	setIsVerifyAccountLoadingReducer,
} from "../reducers/auth.reducer";

export interface AuthState {
	isSignupLoading: boolean;
	isVerifyAccountLoading: boolean;
	isLoginLoading: boolean;
}

const initialState: AuthState = {
	isSignupLoading: false,
	isVerifyAccountLoading: false,
	isLoginLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsSignupLoading: setIsSignupLoadingReducer,
		setIsVerifyAccountLoading: setIsVerifyAccountLoadingReducer,
		setIsLoginLoading: setIsLoginLoadingReducer,
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
