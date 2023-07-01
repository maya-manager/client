import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clearAlertReducer, setAlertReducer } from "../reducers/alert.reducer";

export interface IAlertState {
	message: string | null;
	type: "success" | "error" | "warning" | null;
}

const initialState: IAlertState = {
	message: null,
	type: null,
};

const alertSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		setAlert: setAlertReducer,
		clearAlert: clearAlertReducer,
	},
});

export const alertActions = alertSlice.actions;

export default alertSlice.reducer;
