import { configureStore } from "@reduxjs/toolkit";

/**
 * Redux store configuration
 */
const store = configureStore({
	reducer: {},
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
