import { createSlice } from "@reduxjs/toolkit";
import {
	setIsSignupLoadingReducer,
	setIsVerifyAccountLoadingReducer,
} from "../reducers/auth.reducer";

export interface AuthState {
	isSignupLoading: boolean;
	isVerifyAccountLoading: boolean;
}

const initialState: AuthState = {
	isSignupLoading: false,
	isVerifyAccountLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsSignupLoading: setIsSignupLoadingReducer,
		setIsVerifyAccountLoading: setIsVerifyAccountLoadingReducer,
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
