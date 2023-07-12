import { createSlice } from "@reduxjs/toolkit";
import { setIsSignupLoadingReducer } from "../reducers/auth.reducer";

export interface AuthState {
	isSignupLoading: boolean;
}

const initialState: AuthState = {
	isSignupLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsSignupLoading: setIsSignupLoadingReducer,
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
