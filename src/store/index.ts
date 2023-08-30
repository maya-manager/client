import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert.slice";
import authSlice from "./slices/auth.slice";
import healthCheckSlice from "./slices/healthCheck.slice";

/**
 * Redux store configuration
 */
const store = configureStore({
	reducer: {
		alert: alertSlice,
		auth: authSlice,
		healthCheck: healthCheckSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
