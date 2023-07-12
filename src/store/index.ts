import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert.slice";

/**
 * Redux store configuration
 */
const store = configureStore({
	reducer: {
		alert: alertSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
